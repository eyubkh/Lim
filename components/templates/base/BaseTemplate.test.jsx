import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import BaseTemplate from './BaseTemplate'
import { mocksBaseTemplateProps } from './BaseTemplate.mocks'

describe('<BaseTemplate />', () => {
  test('mocking test pass', () => {
    const component = render(<BaseTemplate {...mocksBaseTemplateProps} />)
    const mock = mocksBaseTemplateProps.sampleTextProp
    expect(component.container).toHaveTextContent(mock)
  })
})
