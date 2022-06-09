import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import client from '../apollo-client'
import CreatePost from '../components/organisms/createPost/CreatePost'
import Post from '../components/organisms/post/Post'
import SideBar from '../components/organisms/sideBar/SideBar'
import { GET_USER } from '../utils/queries'

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

export default function Home() {
  const { data, loading, error } = useQuery(GET_USER)
  const router = useRouter()

  const logOutHandler = async () => {
    window.localStorage.removeItem('token')
    await client.clearStore()
    router.push('/')
  }
  // if (error) {
  //   window.localStorage.removeItem('token')
  //   router.push('/')
  //   return <>error</>
  // }
  if (loading) return <p>Cagando...</p>
  const friendPost = data.userData.friends.map((user) => user.posts)
  const userPost = data.userData.posts
  const allPost = [...userPost, ...friendPost.flat(2)]
  console.log(allPost)
  return (
    <Component>
      <SideBar
        username={data?.userData.username}
        imagePath={data?.userData.imgPath}
        friends={data?.userData.friends}
      />
      <Section>
        <CreatePost />
        <button onClick={logOutHandler}>log out</button>
        {allPost.map((post) => {
          return (
            <Post
              id={post.id}
              key={post.id}
              image={post.user.imgPath}
              username={post.user.username}
              iat={post.iat}
              likeCount={post.likeCount}
              text={post.text}
            />
          )
        })}
      </Section>
    </Component>
  )
}
