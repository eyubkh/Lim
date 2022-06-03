import Component from './Post'
import { mocksPostProps } from './Post.mocks'

export default {
  title: 'web/organisms',
  component: Component,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/YpF9wNxntTvVpzt4XxWW2t/lim-project-team-library?node-id=499%3A154',
    },
  },
}

const Template = (props) => <Component {...props} />

export const Post = Template.bind()
Post.args = {
  ...mocksPostProps,
}
