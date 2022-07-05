import { DialogForm, Key, Text, LongText } from '@Form'

const inputs = <>
    <Key />
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

const UpsertSection = () => {
    return <DialogForm
        entityType='Section'
        inputs={inputs}
    />
}

export default UpsertSection