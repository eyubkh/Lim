import Component from './DisplayText'
import { mocksDisplayTextProps } from './DisplayText.mocks'

export default {
  title: 'web/atoms',
  component: Component,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: '',
    },
  },
}

const Template = (props) => <Component {...props} />

export const DisplayText = Template.bind()
DisplayText.args = {
  ...mocksDisplayTextProps,
}
