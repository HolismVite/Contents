import { Form, Rte, app, post } from '@Form'

const inputs = <>
    <Rte
        column='Content'
        placeholder='Write your post here ...'
    />
</>

const PageContent = () => {
    return <Form
        title='Edit content'
        entityType="PageContent"
        inputs={inputs}
        large={true}
    />
}

export default PageContent