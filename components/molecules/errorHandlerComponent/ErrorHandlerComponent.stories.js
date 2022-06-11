import Component from './ErrorHandlerComponent'
import { mocksErrorHandlerComponentProps } from './ErrorHandlerComponent.mocks'

export default {
  title: 'web/molecules',
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

export const Base = Template.bind()
Base.args = {
  ...mocksErrorHandlerComponentProps,
}
