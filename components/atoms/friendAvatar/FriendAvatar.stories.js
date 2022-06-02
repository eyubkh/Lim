import Component from './FriendAvatar'
import { mocksFriendAvatarProps } from './FriendAvatar.mocks'

export default {
  title: 'web/atoms',
  component: Component,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/YpF9wNxntTvVpzt4XxWW2t/lim-project-team-library?node-id=499%3A254',
    },
  },
}

const Template = (props) => <Component {...props} />

export const FriendAvatar = Template.bind()
FriendAvatar.args = {
  ...mocksFriendAvatarProps,
}
