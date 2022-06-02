import { gql, useMutation } from '@apollo/client'
import Button from '../../atoms/button/Button'
import DisplayText from '../../atoms/displayText/DisplayText'
import StyleText from '../../atoms/styleText/StyleText'
import TextField from '../../molecules/textField/TextField'

const TEST = gql`
  mutation Test($username: String) {
    user(username: $username) {
      username
    }
  }
`
export default function Login({ setForm }) {
  const [login, { data, loading }] = useMutation(TEST)
  const handler = (event) => {
    event.preventDefault()
    setForm('singup')
  }
  const formSubmitHandler = async (event) => {
    event.preventDefault()
    const elements = [...event.target]
    const inputs = elements.filter((input) => input.type !== 'submit')
    const inputsData = inputs.map(({ type, value }) => {
      if (type === 'text') type = 'username'
      return { [type]: value }
    })
    const { username } = Object.assign(...inputsData)
    login({ variables: { username } })
  }
  return (
    <>
      <form onSubmit={formSubmitHandler}>
        {data ? <p>username ${data?.user.password}</p> : <p> nada bro</p>}
        <h2>Your social network.</h2>
        <TextField type="text" title="User name or Email" />
        <TextField
          type="password"
          title="Password"
          subTitle="Forgot password?"
        />
        <Button text={'Login'} />
        <DisplayText size="regular">
          New in Lim?
          <a style={{ cursor: 'pointer', marginLeft: '4px' }} onClick={handler}>
            <StyleText bold>Create account</StyleText>
          </a>
        </DisplayText>
      </form>
    </>
  )
}
