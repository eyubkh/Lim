import { useRouter } from 'next/router'
import styled from 'styled-components'
import CreatePost from '../organisms/createPost/CreatePost'
import Post from '../organisms/post/Post'
import SideBar from '../organisms/sideBar/SideBar'

const Component = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  position: relative;
`

const Section = styled.section`
  width: 600px;
  display: flex;
  z-index: 1;
  flex-direction: column;
  gap: 44px;
  padding: 44px 0px 44px 26px;
`

export default function UserHome({ user }) {
  const router = useRouter()

  const friendPost = user?.userData.friends.map((user) => user.posts)
  const userPost = user?.userData.posts
  const allPost = [...userPost, ...friendPost.flat(2)]
  return (
    <Component>
      <SideBar
        id={user?.userData.id}
        username={user?.userData.username}
        imagePath={user?.userData.imgPath}
        friends={user?.userData.friends}
      />
      <Section>
        <CreatePost />
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
              comments={post.comments}
              likes={post.likes}
              userId={user?.userData.id}
            />
          )
        })}
      </Section>
    </Component>
  )
}
