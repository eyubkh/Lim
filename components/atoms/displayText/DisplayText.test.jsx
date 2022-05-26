import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import DisplayText from './DisplayText'
import { mocksDisplayTextProps } from './DisplayText.mocks'

describe('<DisplayText />', () => {
  test('title', () => {
    const { title, text } = mocksDisplayTextProps
    const component = render(<DisplayText title={title} text={text} />)
    expect(component.getByText(text)).toHaveStyle(`
      text-align: left; 
      font-size: 16px;
    `)
  })
  test('subTitle', () => {
    const { subTitle, text } = mocksDisplayTextProps
    const component = render(<DisplayText subTitle={subTitle} text={text} />)
    expect(component.getByText(text)).toHaveStyle(`
      text-align: right; 
      font-size: 14px;
    `)
  })
})
