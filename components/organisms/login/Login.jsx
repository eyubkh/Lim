import { useRouter } from 'next/router'
import Button from '../../atoms/button/Button'
import DisplayText from '../../atoms/displayText/DisplayText'
import StyleText from '../../atoms/styleText/StyleText'
import TextField from '../../molecules/textField/TextField'

export default function Login({ setForm }) {
  const router = useRouter()
  const handler = (event) => {
    event.preventDefault()
    setForm('singup')
  }
  const formSubmitHandler = async (event) => {
    event.preventDefault()
    const object = {
      username: event.target[0].value,
      password: event.target[1].value,
    }
    const { jwt } = await window
      .fetch('/api/auth/login', {
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
    <form onSubmit={formSubmitHandler}>
      <h2>Your social network.</h2>
      <TextField type="text" title="User name or Email" />
      <TextField type="password" title="Password" subTitle="Forgot password?" />
      <Button text={'Login'} />
      <DisplayText size="regular">
        New in Lim?
        <a style={{ cursor: 'pointer', marginLeft: '4px' }} onClick={handler}>
          <StyleText bold>Create account</StyleText>
        </a>
      </DisplayText>
    </form>
  )
}
