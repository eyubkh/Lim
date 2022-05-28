import Button from '../../atoms/button/Button'
import DisplayText from '../../atoms/displayText/DisplayText'
import StyleText from '../../atoms/styleText/StyleText'
import TextField from '../../molecules/textField/TextField'

const Svg = () => (
  <svg
    width="24.5mm"
    height="24.5mm"
    version="1.1"
    viewBox="0 0 34.5 34.500001"
  >
    <g
      transform="matrix(-2,0,0,-2,272.47036,360.58721)"
      style={{ fill: '#000000' }}
    >
      <g transform="translate(-.29978122)">
        <g transform="matrix(.75000001 0 0 .75000001 -43.758395 50.237592)">
          <path
            d="m228.83147 162.09278s1.78417-1.71675 2.55186-2.68558c0.61864-0.78074 1.4858-1.51314 1.64048-2.50128 0.11134-0.71088-0.13705-1.51106-0.57286-2.08001-0.39298-0.51292-1.04881-0.79868-1.66655-0.97417-1.06153-0.30159-2.22588-0.29816-3.30702-0.079-0.77336 0.15678-1.6423 0.37358-2.16127 0.97416-0.48793 0.56473-0.69815 1.41282-0.62495 2.159 0.0813 0.82818 0.65531 1.54331 1.14576 2.21168 0.0626 0.0854 0.13268 0.17463 0.20863 0.26659 0.9373 1.13532 2.78593 2.70858 2.78593 2.70858z"
            style={{ fill: 'none', strokeWidth: '3.05192', stroke: '#3cffc2' }}
          />
          <path
            d="m228.89796 162.09278s-1.78419 1.71677-2.55188 2.68558c-0.61866 0.78074-1.48581 1.51311-1.6405 2.50126-0.1112 0.7109 0.13706 1.51106 0.57288 2.08003 0.39298 0.51287 1.04881 0.79867 1.66655 0.97417 1.06152 0.30159 2.22587 0.29814 3.30701 0.079 0.77337-0.15679 1.6423-0.37359 2.16127-0.97421 0.48792-0.56469 0.69815-1.41278 0.62496-2.15899-0.0813-0.82816-0.65532-1.54329-1.14577-2.21166-0.83384-1.13634-2.99451-2.97519-2.99451-2.97519z"
            style={{ fill: 'none', strokeWidth: '3.05192', stroke: '#3cffc2' }}
          />
        </g>
      </g>
    </g>
    <text
      x="7.8219743"
      y="20.835764"
      style={{
        fill: '#000000',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 'bold',
        fontSize: '10.5833px',
        lineHeight: '1.25',
        strokeWidth: '.264583',
      }}
      xmlSpace="preserve"
    >
      <tspan x="7.8219743" y="20.835764">
        LIM
      </tspan>
    </text>
  </svg>
)
export default function Singup({ setForm }) {
  const handler = (event) => {
    event.preventDefault()
    setForm('')
  }
  return (
    <form>
      <Svg />
      <h2>Your social network.</h2>
      <TextField title="Email" />
      <TextField title="Username" />
      <TextField title="Password" />
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
