import Component from './CreatePost'
import { mocksCreatePostProps } from './CreatePost.mocks'

export default {
  title: 'web/organisms',
  component: Component,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/YpF9wNxntTvVpzt4XxWW2t/lim-project-team-library?node-id=499%3A39',
    },
  },
}

const Template = (props) => <Component {...props} />

export const CreatePost = Template.bind()
CreatePost.args = {
  ...mocksCreatePostProps,
}
