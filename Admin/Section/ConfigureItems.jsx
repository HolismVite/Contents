import { useState } from 'react'
import {
    DialogForm,
    Checks,
} from '@Form'

const ConfigureItems = ({ entity }) => {

    const [chosenValues, setChosenValues] = useState([])

    const inputs = <Checks
        itemsUrl={`/entityConfigItem/list?entityType=${entity.relatedItems.entityType}`}
        checkedItemsUrl={`/entityConfig/getValues?entityGuid=${entity.guid}`}
        show={item => item.name}
        choose={item => item.tagGuid || item.guid}
        set={setChosenValues}
    />

    const save = () => {

    }

    return <DialogForm
        title='Configure items'
        inputs={inputs}
        okAction={save}
    />
}

export default ConfigureItems