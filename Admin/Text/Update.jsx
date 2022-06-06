import { Form, Text } from '@Form'

const inputs = <>
    <Text
        column='Value'
        placeholder='Value'
        required='Please write something'
    />
</>

const UpdateText = () => {
    return <Form
        title='Update text'
        entityType='StaticText'
        inputs={inputs}
    />
}

export default UpdateText