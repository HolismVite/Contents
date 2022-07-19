import AnchorIcon from '@mui/icons-material/Anchor';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import ListAltIcon from '@mui/icons-material/ListAlt';
import BoltIcon from '@mui/icons-material/Bolt';
import {
    EntityAction,
    Image,
    List,
    Text,
    TitleSubtitle,
    ValueWithTitle,
} from '@List'
import { EntityConfigsAction } from 'Configuration'
import UpsertSection from './Upsert'
import UpdateCta from './Cta';

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
        <div className="flex items-top justify-between">
            <div>
                {
                    entity?.relatedItems?.configs?.hasImage &&
                    <Image
                        url={entity.relatedItems.imageUrl}
                        uploadUrl={`/section/setImage?id=${entity.id}&property=ImageGuid`}
                        deletionUrl={`/section/deleteImage?id=${entity.id}&property=ImageGuid`}
                    />
                }
                <TitleSubtitle
                    supertitle={entity.supertitle?.cut(40)}
                    title={<ValueWithTitle
                        value={entity.title?.cut(30)}
                        title={entity.description}
                    />}
                    subtitle={entity.subtitle?.cut(40)}
                />
            </div>
            <span className="text-slate-700 flex-1 text-end">{entity.name}</span>
        </div>

    </div>
</>

const entityActions = (entity) => <>
    {
        entity?.relatedItems?.configs?.itemsHavePrimaryCta &&
        <EntityAction
            title='Primary CTA'
            icon={BoltIcon}
            dialog={UpdateCta('Primary')}
        />
    }
    {
        entity?.relatedItems?.configs?.itemsHaveSecondaryCta &&
        <EntityAction
            title='Secondary CTA'
            icon={AnchorIcon}
            dialog={UpdateCta('Secondary')}
        />
    }
    {
        entity?.relatedItems?.configs?.hasItems &&
        <EntityAction
            title='Manage items'
            icon={ListAltIcon}
            goTo={`/section/items?sectionId=${entity.id}`}
        />
    }
    {
        entity?.relatedItems?.configs?.hasContent &&
        <EntityAction
            title='Edit content'
            icon={TextSnippetIcon}
            goTo={`/section/editContent?id=${entity.id}`}
        />
    }
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
        edit={({ entity }) => {
            var configs = entity?.relatedItems?.configs
            var hasEdit = isSuperAdmin || configs?.hasSupertitle || configs?.hasTitle || configs?.hasSubtitle || configs?.hasDescription
            return hasEdit && UpsertSection
        }}
        separateRowForActions={true}
    />
}

export default Sections