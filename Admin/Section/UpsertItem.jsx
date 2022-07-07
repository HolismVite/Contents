import {
    DialogForm,
    LongText,
    Text,
} from '@Form'

const inputs = <>
    <Text
        column="Supertitle"
        placeholder="Supertitle"
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
        column="Summary"
        placeholder='Summary'
    />
</>

const UpsertSectionItem = () => {
    return <DialogForm
        entityType='SectionItem'
        inputs={inputs}
    />
}

export default UpsertSectionItem