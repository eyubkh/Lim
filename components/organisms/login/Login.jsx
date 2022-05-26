import styled from 'styled-components'
import Button from '../../atoms/button/Button'
import TextField from '../../molecules/textField/TextField'

const Component = styled.div`
  text-align: center;
`

export default function Login() {
  return (
    <Component>
      <h2>Your social network.</h2>
      <TextField title="User name or Email" />
      <TextField title="Password" subTitle="Forgot password?" />
      <Button text={'Login'} />
    </Component>
  )
}
