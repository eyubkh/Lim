import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import DisplayText from './DisplayText'
import { mocksDisplayTextProps } from './DisplayText.mocks'

describe('<DisplayText />', () => {
  const { children, title, subTitle } = mocksDisplayTextProps
  test('title', () => {
    const component = render(
      <DisplayText title={title}>{children}</DisplayText>
    )
    expect(component.getByText(children)).toHaveStyle('text-align: left')
  })
  test('subTitle', () => {
    const component = render(
      <DisplayText subTitle={subTitle}>{children}</DisplayText>
    )
    expect(component.getByText(children)).toHaveStyle(`
      text-align: right;
      font-size: 14px;
    `)
  })
})
