import { DialogForm, Key, Text, LongText } from '@Form'

const insertInputs = <>
    <Key />
    <Text
        column="Name"
        required="Please provide a name"
        placeholder="Name"
        superAdmin
    />
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
        column="Description"
        placeholder='Description'
    />
</>

const editInputs = (configs) => <>
    <Key />
    <Text
        column="Name"
        required="Please provide a name"
        placeholder="Name"
        superAdmin
    />
    {
        configs.hasSupertitle && <Text
            column="Supertitle"
            placeholder="Supertitle"
        />
    }
    {
        configs.hasTitle && <Text
            column="Title"
            placeholder="Title"
        />
    }
    {
        configs.hasSubtitle && <Text
            column='Subtitle'
            placeholder='Subtitle'
        />
    }
    {
        configs.hasDescription && <LongText
            column="Description"
            placeholder='Description'
        />
    }
</>

const UpsertSection = ({ entity, isEdit }) => {
    return <DialogForm
        entityType='Section'
        inputs={
            isEdit
                ?
                editInputs(entity?.relatedItems?.configs)
                :
                insertInputs
        }
    />
}

export default UpsertSection