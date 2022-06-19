import { DialogForm, Text } from '@Form'

const inputs = <>
    <Text
        column='Value'
        placeholder='Value'
        required='Please write something'
    />
</>

const UpdateText = () => {
    return <DialogForm
        title='Update text'
        entityType='StaticText'
        inputs={inputs}
    />
}

export default UpdateText