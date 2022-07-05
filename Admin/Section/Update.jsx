import { DialogForm, Text, LongText } from '@Form'

const inputs = <>
    <Text
        column='key'
        placeholder='Key'
        superAdmin
    />
    <Text
        column="Title"
        placeholder="Title"
    />
    <Text
        column='Subtitle'
        placeholder='Subtitle'
    />
    <LongText
        column="Description"
        placeholder='Description'
    />
</>

const UpdateSection = () => {
    return <DialogForm
        entityType='Section'
        inputs={inputs}
    />
}

export default UpdateSection