import { DialogForm, Text, Link } from '@Form'

const inputs = <>
    <Text
        column='Text'
        placeholder='Text'
        required='CTA text is not provided'
    />
    <Link
        column='Link'
        placeholder='Link'
        required='Please provide a link'
    />
</>

const UpsertSectionAction = () => {
    return <DialogForm
        entityType='SectionAction'
        inputs={inputs}
    />
}

export default UpsertSectionAction