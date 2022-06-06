import SearchIcon from '@mui/icons-material/Search'
import { List, ItemAction } from '@List'

const headers = <>
    <th>Title</th>
</>

const row = (item) => {
    return <>
        <td>{item.title}</td>
    </>
}

const itemActions = (item) => {
    return <>
        <ItemAction
            title='Search Google'
            icon={SearchIcon}
            goTo={`https://images.google.com`}
        />
    </>
}

const Images = () => {
    return <List
        title='Images'
        entityType='StaticImage'
        headers={headers}
        row={row}
    />
}

export default Images