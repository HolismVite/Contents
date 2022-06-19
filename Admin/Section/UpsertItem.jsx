import { DialogForm, Text } from '@Form'

const inputs = <>
    <Text
        column='Title'
        placeholder='Title'
        required='Please provide the title'
    />
</>

const UpsertSectionItem = () => {
    return <DialogForm
        entityType='SectionItem'
        inputs={inputs}
    />
}

export default UpsertSectionItem