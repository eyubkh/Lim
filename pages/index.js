import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Login from '../components/organisms/login/Login'
import Singup from '../components/organisms/singup/Singup'

const Component = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  margin: 0;
  padding: 0;
`

const Bg = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-image: url('/logoBg.svg');
  background-repeat: repeat;
  background-position: right;
  background-size: 59px;
`
function Home() {
  const router = useRouter()
  const [stateForm, setForm] = useState('')
  useEffect(() => {
    const token = window.localStorage.getItem('token')
    if (token) router.push('/home')
  })
  return (
    <>
      <Head>
        <title>Lim</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component>
        <Bg />
        {stateForm === 'singup' ? (
          <Singup setForm={setForm} />
        ) : (
          <Login setForm={setForm} />
        )}
      </Component>
    </>
  )
}

export default Home
