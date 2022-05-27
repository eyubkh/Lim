import Component from './DisplayText'
import {
  elementRules,
  mocksDisplayTextProps,
  sizeRules,
} from './DisplayText.mocks'

export default {
  title: 'web/atoms',
  component: Component,
  argTypes: {
    size: {
      options: sizeRules,
      control: { type: 'radio' },
    },
    element: {
      options: elementRules,
      control: { type: 'radio' },
    },
  },
}

const Template = ({ children, ...props }) => (
  <Component {...props}>{children}</Component>
)

export const DisplayText = Template.bind()
DisplayText.args = {
  ...mocksDisplayTextProps,
}
