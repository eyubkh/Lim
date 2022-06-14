import Component from './Dropbox'
import { mocksDropboxProps } from './Dropbox.mocks'

export default {
  title: 'templates/base',
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

export const Base = Template.bind()
Base.args = {
  ...mocksDropboxProps,
}
