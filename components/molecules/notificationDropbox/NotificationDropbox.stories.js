import Component from './NotificationDropbox'
import { mocksNotificationDropboxProps } from './NotificationDropbox.mocks'

export default {
  title: 'templates/base',
  component: Component,
  argTypes: {},
  parameters: {},
}

const Template = (props) => <Component {...props} />

export const NotifiactionDropbox = Template.bind()
NotifiactionDropbox.args = {
  ...mocksNotificationDropboxProps,
}
