import Component from './UserPostInfo'
import { mocksUserPostInfoProps } from './UserPostInfo.mocks'

export default {
  title: 'web/molecules',
  component: Component,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/YpF9wNxntTvVpzt4XxWW2t/lim-project-team-library?node-id=499%3A179',
    },
  },
}

const Template = (props) => <Component {...props} />

export const UserPostInfo = Template.bind()
UserPostInfo.args = {
  ...mocksUserPostInfoProps,
}
