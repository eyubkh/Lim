import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import UserHome from '../components/pages/UserHome'
import { GET_USER } from '../utils/queries'

export default function Home() {
  const { data, loading, error } = useQuery(GET_USER)
  const router = useRouter()
  if (error) {
    window.localStorage.removeItem('token')
    router.push('/')
    return <>error</>
  }
  if (loading) return <p>Cagando...</p>
  return <UserHome user={data} />
}
