import Component from './CommentUser'
import { mocksCommentUserProps } from './CommentUser.mocks'

export default {
  title: 'templates/base',
  component: Component,
  argTypes: {},
  parameters: {},
}

const Template = (props) => <Component {...props} />

export const Base = Template.bind()
Base.args = {
  ...mocksCommentUserProps,
}
