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

export default function Singup({ toggleForm }) {
  const router = useRouter()
  const { addError } = useContext(ErrorHandlerContext)

  const singupSubmitHandler = async (event) => {
    event.preventDefault()
    const formData = {
      email: event.target[0].value,
      username: event.target[1].value,
      password: event.target[2].value,
    }
    const response = await postApiCredentials('api/singup', formData)
    if (response.jwt) {
      window.localStorage.setItem('token', response.jwt)
      router.push('/home')
    } else {
      addError(response.message)
    }
  }

  return (
    <Component onSubmit={singupSubmitHandler}>
      <h2>Your social network.</h2>
      <TextField type="email" title="Email" />
      <TextField type="username" title="Username" />
      <TextField type="password" title="Password" />
      <Button text={'Singup'} />
      <DisplayText size="regular">
        Have account?
        <a
          style={{ cursor: 'pointer', marginLeft: '4px' }}
          onClick={() => toggleForm()}
        >
          <StyleText bold>Login</StyleText>
        </a>
      </DisplayText>
    </Component>
  )
}
