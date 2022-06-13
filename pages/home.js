import { useQuery } from '@apollo/client'
import { GET_USER } from '@graphql/client/queries'
import { useRouter } from 'next/router'
import Loading from '../components/pages/Loading'
import UserHome from '../components/pages/UserHome'

export default function Home() {
  const { data, loading, error } = useQuery(GET_USER)
  const router = useRouter()
  // if (error) {
  //   window.localStorage.removeItem('token')
  //   router.push('/')
  //   return <>error</>
  // }
  if (loading) return <Loading />
  return <UserHome user={data} />
}
