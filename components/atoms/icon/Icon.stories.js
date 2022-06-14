import Component from './Icon'
import { iconRules, mocksIconProps } from './Icon.mocks'

export default {
  title: 'web/atoms',
  component: Component,
  argTypes: {
    icon: {
      options: iconRules,
      control: { type: 'radio' },
    },
  },
}

const Template = (props) => <Component {...props} />

export const Icon = Template.bind()
Icon.args = {
  ...mocksIconProps,
}
