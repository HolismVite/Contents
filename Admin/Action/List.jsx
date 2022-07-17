import { List } from '@List'
import UpsertSectionAction from './Upsert'

const headers = <>
    <th>Text</th>
</>

const row = (item) => <>
    <td>{item.text}</td>
</>

const SectionActions = () => {
    return <List
        title='Section actions'
        entityType='SectionAction'
        headers={headers}
        row={row}
        upsert={UpsertSectionAction}
        hasEdit={true}
        hasDelete={true}
    />
}

export default SectionActions