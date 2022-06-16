import Button from '@components/atoms/button/Button'
import DisplayText from '@components/atoms/displayText/DisplayText'
import StyleText from '@components/atoms/styleText/StyleText'
import TextField from '@components/molecules/textField/TextField'
import { ErrorHandlerContext } from '@utils/errorHandlerUi'
import postApiCredentials from '@utils/postApiPostCredentials'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import styled from 'styled-components'

const Component = styled.form`
  display: flex;
  flex-direction: column;
  gap: 26px;
  align-items: center;
`

export default function Login({ toggleForm }) {
  const router = useRouter()
  const { addError } = useContext(ErrorHandlerContext)

  const loginSubmitHandler = async (event) => {
    event.preventDefault()
    const formData = {
      username: event.target[0].value,
      password: event.target[1].value,
    }
    await postApiCredentials('api/auth/login', formData)
      .then((response) => {
        window.localStorage.setItem('token', response.jwt)
        router.push('/home')
      })
      .catch((error) => {
        addError(error.message)
      })
  }

  return (
    <Component onSubmit={loginSubmitHandler}>
      <h2>Your social network.</h2>
      <TextField type="text" title="User name or Email" />
      <TextField type="password" title="Password" subTitle="Forgot password?" />
      <Button text={'Login'} />
      <DisplayText size="regular">
        New in Lim?
        <a
          style={{ cursor: 'pointer', marginLeft: '4px' }}
          onClick={() => toggleForm()}
        >
          <StyleText bold>Create account</StyleText>
        </a>
      </DisplayText>
    </Component>
  )
}
