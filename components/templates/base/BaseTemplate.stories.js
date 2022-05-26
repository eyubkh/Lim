import Component from './BaseTemplate'
import { mocksBaseTemplateProps } from './BaseTemplate.mocks'

export default {
  title: 'templates/base',
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
  ...mocksBaseTemplateProps,
}
