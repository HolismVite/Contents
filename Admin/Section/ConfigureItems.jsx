import { useState } from 'react'
import {
    DialogForm,
    Checks,
} from '@Form'

const ConfigureItems = ({ entity }) => {

    const [chosenValues, setChosenValues] = useState([])

    const inputs = <Checks
        itemsUrl={`/entityConfig/getItems?entityType=${entity.relatedItems.entityType}&entityGuid=${entity.guid}`}
        checkedItemsUrl={`/entityConfig/getValues?entityType=${entity.relatedItems.entityType}&entityGuid=${entity.guid}`}
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