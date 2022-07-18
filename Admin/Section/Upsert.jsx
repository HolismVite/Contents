import { DialogForm, Key, Text, LongText } from '@Form'

const inputs = (configs) => <>
    <Key />
    <Text
        column="Name"
        required="Please provide a name"
        placeholder="Name"
    />
    {
        configs
            ?
            configs.hasTitle && <Text
                column="Supertitle"
                placeholder="Supertitle"
            />
            :
            <Text

                column="Supertitle"
                placeholder="Supertitle"
            />
    }
    <Text
        column='Subtitle'
        placeholder='Subtitle'
    />
    <LongText
        column="Description"
        placeholder='Description'
    />
</>

const UpsertSection = (props) => {
    console.log(props)
    return <DialogForm
        entityType='Section'
        inputs={inputs(props?.relatedItems?.configs)}
    />
}

export default UpsertSection