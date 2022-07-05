import { DialogForm, Key, Text, LongText, Date } from '@Form'

const inputs = <>
    <Key />
    <Date
        column='Date'
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

const UpsertSection = () => {
    return <DialogForm
        entityType='Section'
        inputs={inputs}
    />
}

export default UpsertSection