import Component from './SideBar'
import { mocksSideBarProps } from './SideBar.mocks'

export default {
  title: 'web/organisms',
  component: Component,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/YpF9wNxntTvVpzt4XxWW2t/lim-project-team-library?node-id=499%3A272',
    },
  },
}

const Template = (props) => <Component {...props} />

export const SideBar = Template.bind()
SideBar.args = {
  ...mocksSideBarProps,
}
