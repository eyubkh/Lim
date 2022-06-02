import Component from './HistoryAvatar'
import { mocksHistoryAvatarProps } from './HistoryAvatar.mocks'

export default {
  title: 'web/atoms',
  component: Component,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/YpF9wNxntTvVpzt4XxWW2t/lim-project-team-library?node-id=499%3A255',
    },
  },
}

const Template = (props) => <Component {...props} />

export const HistoryAvatar = Template.bind()
HistoryAvatar.args = {
  ...mocksHistoryAvatarProps,
}
