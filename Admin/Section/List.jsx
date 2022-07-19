import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import ListAltIcon from '@mui/icons-material/ListAlt';
import BoltIcon from '@mui/icons-material/Bolt';
import {
    BooleanProperty,
    EntityAction,
    Image,
    List,
    Text,
    TitleSubtitle,
    ValueWithTitle,
} from '@List'
import { EntityConfigsAction } from 'Configuration'
import UpsertSection from './Upsert'

const filters = <>
    <Text
        column='Name'
    />
</>

const sorts = [
    {
        "caption": "Title A-Z",
        "column": "Title",
        "direction": "asc"
    },
    {
        "caption": "Title Z-A",
        "column": "Title",
        "direction": "desc"
    },
    {
        "caption": "Name A-Z",
        "column": "Name",
        "direction": "asc"
    },
    {
        "caption": "Name Z-A",
        "column": "Name",
        "direction": "desc"
    }
]

const card = (entity) => <>
    <div className="grid gap-4">
        <div className="flex items-center justify-between">
            <Image
                url={entity.relatedItems.imageUrl}
                uploadUrl={`/section/setImage?id=${entity.id}&property=ImageGuid`}
                deletionUrl={`/section/deleteImage?id=${entity.id}&property=ImageGuid`}
            />
            <span className="text-slate-700 flex-1 text-end">{entity.name}</span>
        </div>
        <TitleSubtitle
            supertitle={entity.supertitle?.cut(40)}
            title={<ValueWithTitle
                value={entity.title?.cut(30)}
                title={entity.description}
            />}
            subtitle={entity.subtitle?.cut(40)}
        />
    </div>
</>

const entityActions = (entity) => <>
    <EntityAction
        title='Manage actions'
        icon={BoltIcon}
        goTo={`/section/actions?sectionId=${entity.id}`}
    />
    <EntityAction
        title='Manage items'
        icon={ListAltIcon}
        goTo={`/section/items?sectionId=${entity.id}`}
    />
    <EntityAction
        title='Edit content'
        icon={TextSnippetIcon}
        goTo={`/section/editContent?id=${entity.id}`}
    />
    <EntityConfigsAction
        entityType={entity.relatedItems.entityType}
        entityGuid={entity.guid}
        superAdmin
    />
</>

const Sections = ({ isSuperAdmin }) => {
    return <List
        title='Sections'
        entityType='Section'
        create={isSuperAdmin && UpsertSection}
        filters={filters}
        sorts={sorts}
        card={card}
        entityActions={entityActions}
        hasDelete={isSuperAdmin}
        edit={UpsertSection}
        separateRowForActions={true}
    />
}

export default Sections