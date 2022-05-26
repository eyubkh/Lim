import Component from './Login'
import { mocksLoginProps } from './Login.mocks'

export default {
  title: 'web/organisms',
  component: Component,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/YpF9wNxntTvVpzt4XxWW2t/lim-project-team-library?node-id=412%3A35',
    },
  },
}

const Template = (props) => <Component {...props} />

export const Login = Template.bind()
Login.args = {
  ...mocksLoginProps,
}
