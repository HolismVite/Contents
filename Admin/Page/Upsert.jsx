import { Form, Text, LongText, Slug } from '@Form'

const inputs = <>
    <Text
        column="Title"
        placehodler="Title"
        required="Title is not written"
    />
    <Slug />
    <LongText
        column="Description"
        placehodler="Description"
    />
</>

const UpsertPage = () => {
    return <Form
        entityType='Page'
        inputs={inputs}
    />
}

export default UpsertPage