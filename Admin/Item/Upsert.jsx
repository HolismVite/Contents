import { useState } from 'react'
import {
    DialogForm,
    LongText,
    Text,
} from '@Form'
import useSection from '../Hooks/useSection'

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

const UpsertSectionItem = () => {

    const [progress, setProgress] = useState(false)
    const { configs } = useSection({ setProgress })

    return <DialogForm
        entityType='SectionItem'
        progress={progress}
        inputs={inputs(configs)}
    />
}

export default UpsertSectionItem