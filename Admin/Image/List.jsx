import SearchIcon from '@mui/icons-material/Search'
import { List, EntityAction } from '@List'

const headers = <>
    <th>Title</th>
</>

const row = (item) => {
    return <>
        <td>{item.title}</td>
    </>
}

const entityActions = (item) => {
    return <>
        <EntityAction
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