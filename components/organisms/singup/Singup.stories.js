import Component from './Singup'
import { mocksSingupProps } from './Singup.mocks'

export default {
  title: 'web/organisms',
  component: Component,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/YpF9wNxntTvVpzt4XxWW2t/lim-project-team-library?node-id=493%3A18',
    },
  },
}

const Template = (props) => <Component {...props} />

export const Singup = Template.bind()
Singup.args = {
  ...mocksSingupProps,
}
