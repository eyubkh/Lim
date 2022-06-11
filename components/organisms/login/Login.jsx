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

export default function Login({ toggleForm }) {
  const router = useRouter()
  const { addError } = useContext(ErrorHandlerContext)
  const formSubmitHandler = async (event) => {
    event.preventDefault()
    const object = {
      username: event.target[0].value,
      password: event.target[1].value,
    }
    const response = await window
      .fetch('/api/auth/login', {
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
    <Component onSubmit={formSubmitHandler}>
      <h2>Your social network.</h2>
      <TextField type="text" title="User name or Email" />
      <TextField type="password" title="Password" subTitle="Forgot password?" />
      <Button text={'Login'} />
      <DisplayText size="regular">
        New in Lim?
        <a
          style={{ cursor: 'pointer', marginLeft: '4px' }}
          onClick={changeLoginState}
        >
          <StyleText bold>Create account</StyleText>
        </a>
      </DisplayText>
    </Component>
  )
}
