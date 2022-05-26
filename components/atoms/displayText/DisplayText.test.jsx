import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import DisplayText from './DisplayText'
import { mocksDisplayTextProps } from './DisplayText.mocks'

describe('<DisplayText />', () => {
  const { text, title, subTitle } = mocksDisplayTextProps
  test('title', () => {
    const component = render(<DisplayText title={title}>{text}</DisplayText>)
    expect(component.getByText(text)).toHaveStyle('text-align: left')
  })
  test('subTitle', () => {
    const component = render(
      <DisplayText subTitle={subTitle}>{text}</DisplayText>
    )
    expect(component.getByText(text)).toHaveStyle(`
      text-align: right;
      font-size: 14px;
    `)
  })
})
