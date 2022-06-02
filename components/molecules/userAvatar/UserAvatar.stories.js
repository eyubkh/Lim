import Component from './UserAvatar'
import { mocksUserAvatarProps } from './UserAvatar.mocks'

export default {
  title: 'web/molecules',
  component: Component,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/YpF9wNxntTvVpzt4XxWW2t/lim-project-team-library?node-id=499%3A224',
    },
  },
}

const Template = (props) => <Component {...props} />

export const UserAvatar = Template.bind()
UserAvatar.args = {
  ...mocksUserAvatarProps,
}
