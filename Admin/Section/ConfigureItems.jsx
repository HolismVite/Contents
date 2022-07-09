import {
    DialogForm,
    Text,
    Check,
} from '@Form'

const inputs = (props) => <>
    <Text
        column='Has'
        placeholder='Has'
    />
</>

const ConfigureItems = ({ entity }) => {

    const save = () => {

    }

    return <DialogForm
        title='Configure items'
        inputs={inputs}
        okAction={save}
    />
}

export default ConfigureItems