import { useRouter } from 'next/router'
import { useEffect } from 'react'
import ErrorHandlerComponent from '../components/molecules/errorHandlerComponent/ErrorHandlerComponent'
import Portal from '../components/pages/Portal'

function Home() {
  const router = useRouter()
  useEffect(() => {
    const token = window.localStorage.getItem('token')
    if (token) router.push('/home')
  })
  return (
    <>
      <ErrorHandlerComponent />
      <Portal />
    </>
  )
}

export default Home
