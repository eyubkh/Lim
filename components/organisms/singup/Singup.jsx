import Button from '../../atoms/button/Button'
import DisplayText from '../../atoms/displayText/DisplayText'
import StyleText from '../../atoms/styleText/StyleText'
import TextField from '../../molecules/textField/TextField'

export default function Singup({ setForm }) {
  const handler = (event) => {
    event.preventDefault()
    setForm('')
  }
  return (
    <form onSubmit={() => {}}>
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
    </form>
  )
}
