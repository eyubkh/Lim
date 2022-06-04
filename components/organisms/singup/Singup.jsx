import { useRouter } from 'next/router'
import styled from 'styled-components'
import Button from '../../atoms/button/Button'
import DisplayText from '../../atoms/displayText/DisplayText'
import StyleText from '../../atoms/styleText/StyleText'
import TextField from '../../molecules/textField/TextField'

const Component = styled.form`
  display: flex;
  flex-direction: column;
  gap: 26px;
  align-items: center;
`

export default function Singup({ setForm }) {
  const router = useRouter()
  const handler = async (event) => {
    event.preventDefault()
    setForm('')
  }
  const sumbitHandler = async (event) => {
    event.preventDefault()

    const object = {
      email: event.target[0].value,
      username: event.target[1].value,
      password: event.target[2].value,
    }
    const { jwt } = await window
      .fetch('/api/singup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(object),
      })
      .then((response) => response.json())
    if (jwt) {
      window.localStorage.setItem('token', jwt)
      router.push('/home')
    }
  }
  return (
    <Component onSubmit={sumbitHandler}>
      <h2>Your social network.</h2>
      <TextField type="email" title="Email" />
      <TextField type="username" title="Username" />
      <TextField type="password" title="Password" />
      <Button text={'Singup'} />
      <DisplayText size="regular">
        Have account?
        <a style={{ cursor: 'pointer', marginLeft: '4px' }} onClick={handler}>
          <StyleText bold>Login</StyleText>
        </a>
      </DisplayText>
    </Component>
  )
}
