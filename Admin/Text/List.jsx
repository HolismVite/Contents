import { List, Text } from '@List'
import UpdateText from './Update'

const filters = <>
    <Text
        column='Title'
        placeholder='Title'
    />
</>

const headers = <>
    <th>Title</th>
    <th>Value</th>
</>

const row = (item) => {
    return <>
        <td>{item.title}</td>
        <td>{item.value}</td>
    </>
}

const Texts = () => {
    return <List
        title='Texts'
        entityType='StaticText'
        filters={filters}
        headers={headers}
        row={row}
        edit={UpdateText}
    />
}

export default Texts