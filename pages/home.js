import { gql, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import client from '../apollo-client'
import CreatePost from '../components/organisms/createPost/CreatePost'
import Post from '../components/organisms/post/Post'
import SideBar from '../components/organisms/sideBar/SideBar'

const Component = styled.div`
  display: grid;
  grid-template-columns: 35% 1fr;
  height: 100vh;
  position: relative;
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 44px;
  padding: 72px 26px;
`

export const GET_USER = gql`
  query user {
    user {
      profile {
        id
        username
      }
      posts {
        id
        username
        likes
        text
        time
      }
    }
  }
`

function getStringTimeIat(iat) {
  const now = Math.round((Date.now() - iat) / 60000)
  return `${Math.round(now / 60)}h ago`
}

export default function Home() {
  const { data, loading, error } = useQuery(GET_USER)
  const router = useRouter()
  const logOutHandler = async (event) => {
    window.localStorage.removeItem('token')
    await client.clearStore()
    router.push('/')
  }
  if (error) {
    window.localStorage.removeItem('token')
    router.push('/')
    return <>error</>
  }
  if (loading) return <p>Cagando...</p>
  return (
    <Component>
      <SideBar username={data?.user.profile.username} />
      <Section>
        <CreatePost />
        <button onClick={logOutHandler}>log out</button>
        {data?.user.posts
          .map((post) => {
            return (
              <Post
                key={post.id}
                text={post.text}
                iat={getStringTimeIat(post.time)}
                username={post.username}
                likeCount={post.likes}
              />
            )
          })
          .reverse()}
      </Section>
    </Component>
  )
}
