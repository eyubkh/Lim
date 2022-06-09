import Component from './FriendSearch'
import { mocksFriendSearchProps } from './FriendSearch.mocks'

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

export const FriendSearch = Template.bind()
FriendSearch.args = {
  ...mocksFriendSearchProps,
}
