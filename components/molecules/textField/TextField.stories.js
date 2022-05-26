import Component from './TextField'
import { mocksTextFieldProps } from './TextField.mocks'

export default {
  title: 'web/molecules',
  component: Component,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/YpF9wNxntTvVpzt4XxWW2t/lim-project-team-library?node-id=412%3A22',
    },
  },
}

const Template = (props) => <Component {...props} />

export const TextField = Template.bind()
TextField.args = {
  ...mocksTextFieldProps,
}
