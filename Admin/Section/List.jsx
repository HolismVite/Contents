import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import ListAltIcon from '@mui/icons-material/ListAlt';
import BoltIcon from '@mui/icons-material/Bolt';
import SettingsIcon from '@mui/icons-material/Settings';
import {
    BooleanProperty,
    EntityAction,
    Image,
    List,
    Text,
    TitleSubtitle,
    ValueWithTitle,
} from '@List'
import UpsertSection from './Upsert'
import ConfigureItems from './ConfigureItems'

const filters = <>
    <Text
        column='Name'
    />
    <Text
        column='Title'
    />
</>

const sorts = [
    {
        "caption": "A-Z",
        "column": "Title",
        "direction": "asc"
    }
]

const headers = <>
    <th></th>
    <th>Content</th>
    <th>Name</th>
    <th superAdmin>Variable items?</th>
    <th superAdmin>Variable actions?</th>
</>

const row = (item) => <>
    <td>
        <Image
            url={item.relatedItems.imageUrl}
            uploadUrl={`/section/setImage?id=${item.id}&property=ImageGuid`}
            deletionUrl={`/section/deleteImage?id=${item.id}&property=ImageGuid`}
        />
    </td>
    <td>
        <TitleSubtitle
            supertitle={item.supertitle?.cut(40)}
            title={<ValueWithTitle
                value={item.title?.cut(30)}
                title={item.description}
            />}
            subtitle={item.subtitle?.cut(40)}
        />
    </td>
    <td>{item.name}</td>
    <td superAdmin>
        <BooleanProperty
            column='VariableItems'
            value={item.variableItems}
            actionUrl={`/section/toggleBoolean?id=${item.id}&property=VariableItems`}
        />
    </td>
    <td superAdmin>
        <BooleanProperty
            column='VariableActions'
            value={item.variableActions}
            actionUrl={`/section/toggleActionsVariability/${item.id}`}
        />
    </td>
</>

const entityActions = (item) => <>
    <EntityAction
        title='Manage actions'
        icon={BoltIcon}
        goTo={`/section/actions?sectionId=${item.id}`}
    />
    <EntityAction
        title='Manage items'
        icon={ListAltIcon}
        goTo={`/section/items?sectionId=${item.id}`}
    />
    <EntityAction
        title='Edit content'
        icon={TextSnippetIcon}
        goTo={`/section/editContent?id=${item.id}`}
    />
    <EntityAction
        title='Configure Items'
        icon={SettingsIcon}
        dialog={ConfigureItems}
    />
</>

const Sections = ({ isSuperAdmin }) => {
    return <List
        title='Sections'
        entityType='Section'
        create={isSuperAdmin && UpsertSection}
        filters={filters}
        sorts={sorts}
        headers={headers}
        row={row}
        entityActions={entityActions}
        edit={UpsertSection}
        separateRowForActions={true}
    />
}

export default Sections