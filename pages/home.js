import { useRouter } from 'next/router'
import styled from 'styled-components'
import CreatePost from '../components/organisms/createPost/CreatePost'
import Post from '../components/organisms/post/Post'
import SideBar from '../components/organisms/sideBar/SideBar'

const Component = styled.div`
  display: grid;
  grid-template-columns: 35% 1fr;
  height: 100vh;
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 44px;
  padding: 72px 26px;
`

export default function Home() {
  const router = useRouter()
  const logOutHandler = (event) => {
    window.localStorage.removeItem('token')
    router.push('/')
  }
  return (
    <Component>
      <SideBar username={'Eyubkh'} />
      <Section>
        <CreatePost />
        <Post text={'Dia de cachimba'} username={'Abdulah'} likeCount={12} />
        <button onClick={logOutHandler}>log out</button>
      </Section>
    </Component>
  )
}
