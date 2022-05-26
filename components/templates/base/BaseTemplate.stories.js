import BaseTemplate from './BaseTemplate'
import { mocksBaseTemplateProps } from './BaseTemplate.mocks'

export default {
    title: 'templates/base',
    component: BaseTemplate,
}

const Template = (props) => <BaseTemplate {...props} />

export const Base = Template.bind()

Base.props = {
    ...mocksBaseTemplateProps,
}
