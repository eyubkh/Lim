import Component from './StyleText'
import { mocksStyleTextProps } from './StyleText.mocks'

export default {
  title: 'web/atoms',
  component: Component,
  argTypes: {},
}

const Template = (props) => <Component {...props} />

export const StyleText = Template.bind()
StyleText.args = {
  ...mocksStyleTextProps,
}
