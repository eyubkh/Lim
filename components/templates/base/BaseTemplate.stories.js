import BaseTemplate from './BaseTemplate'
import { mocksBaseTemplateProps } from './BaseTemplate.mocks'

export default {
  title: 'templates/base',
  component: BaseTemplate,
  argTypes: {},
}

const Template = (props) => <BaseTemplate {...props} />

export const Base = Template.bind()
console.log(mocksBaseTemplateProps)
Base.args = {
  ...mocksBaseTemplateProps,
}
