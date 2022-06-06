import { List, Text } from '@List'
import UpsertSectionItem from './UpsertItem'

const headers = <>
    <th>Title</th>
</>

const row = (item) => <>
    <td>{item.title}</td>
</>

const SectionItems = () => {
    return <List
        title='Section items'
        entityType='SectionItem'
        headers={headers}
        row={row}
        upsert={UpsertSectionItem}
        hasEdit={true}
        hasDelete={true}
    />
}

export default SectionItems