import {
    DialogForm,
    LongText,
    Text,
} from '@Form'

const inputs = (configs) => <>
    {
        configs.itemsHaveSupertitle &&
        <Text
            column="Supertitle"
            placeholder="Supertitle"
        />
    }
    {
        configs.itemsHaveTitle &&
        <Text
            column="Title"
            placeholder="Title"
        />
    }
    {
        configs.itemsHaveSubtitle &&
        <Text
            column='Subtitle'
            placeholder='Subtitle'
        />
    }
    {
        configs.itemsHaveSummary &&
        <LongText
            column="Summary"
            placeholder='Summary'
        />
    }
</>

const UpsertSectionItem = () => () => {
    return <DialogForm
        entityType='SectionItem'
        // onLoad={}
        inputs={inputs({})}
    />
}

export default UpsertSectionItem