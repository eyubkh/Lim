import Component from './CommentTextField'
import { mocksCommentTextFieldProps } from './CommentTextField.mocks'

export default {
  title: 'web/molecules',
  component: Component,
  argTypes: {},
}

const Template = (props) => <Component {...props} />

export const CommentTextField = Template.bind()
CommentTextField.args = {
  ...mocksCommentTextFieldProps,
}
