import Component from './Button'
import { mocksButtonProps } from './Button.mocks'

export default {
  title: 'web/atoms',
  component: Component,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/YpF9wNxntTvVpzt4XxWW2t/lim-project-team-library?node-id=412%3A8',
    },
  },
}

const Template = (props) => <Component {...props} />

export const Button = Template.bind()
Button.args = {
  ...mocksButtonProps,
}
