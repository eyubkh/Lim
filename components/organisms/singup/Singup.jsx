import { useRouter } from 'next/router'
import { useContext } from 'react'
import styled from 'styled-components'
import { ErrorHandlerContext } from '../../../utils/errorHandlerUI'
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

export default function Singup({ toggleForm }) {
  const router = useRouter()
  const { addError } = useContext(ErrorHandlerContext)

  const sumbitHandler = async (event) => {
    event.preventDefault()
    const object = {
      email: event.target[0].value,
      username: event.target[1].value,
      password: event.target[2].value,
    }
    const response = await window
      .fetch('/api/singup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(object),
      })
      .then((response) => response.json())
    if (response.jwt) {
      window.localStorage.setItem('token', response.jwt)
      router.push('/home')
    } else {
      addError(response.message)
    }
  }

  const changeLoginState = (event) => {
    event.preventDefault()
    toggleForm()
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
        <a
          style={{ cursor: 'pointer', marginLeft: '4px' }}
          onClick={changeLoginState}
        >
          <StyleText bold>Login</StyleText>
        </a>
      </DisplayText>
    </Component>
  )
}
