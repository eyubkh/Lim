import { gql, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

const TEST = gql`
  query Test {
    test
  }
`

export default function Home() {
  const { data } = useQuery(TEST)
  const router = useRouter()
  const logOutHandler = (event) => {
    window.localStorage.removeItem('token')
    router.push('/')
  }
  return (
    <>
      <p>Welcome to home user!</p>
      <button onClick={logOutHandler}> log out</button>
    </>
  )
}
