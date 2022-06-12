import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import { List, Text, Enum, EntityAction, Image, BooleanProperty, ValueWithTitle, TitleSubtitle, app } from '@List'
import UpsertPage from './Upsert'
import { EntitySeo } from '../../Seo/Exports'

const filters = <>
    <Text
        column='Title'
        placehodler='Title'
    />
</>

const headers = <>
    <th></th>
    <th start={true}>Title</th>
    <th>Comments enabled?</th>
</>

const row = (item) => <>
    <td>
        <Image
            url={item.relatedItems.imageUrl}
            uploadUrl={`/page/setImage?pageId=${item.id}`}
        />
    </td>
    <td>
        <a target='_blank' href={`${app.env('PAGE_BASE_URL')}/${item.slug}`}>
            <TitleSubtitle
                title={<ValueWithTitle
                    value={item.title}
                    title={item.description}
                />}
                subtitle={item.slug}
            />
        </a>
    </td>
    <td>
        <BooleanProperty
            column='acceptsComment'
            value={item.acceptsComment}
            actionUrl={`/page/toggleCommentAcceptance/${item.id}`}
        />
    </td>
</>

const entityActions = (item) => <>
    <EntitySeo
        entityType='Page'
        entityGuid={item.guid}
    />
    <EntityAction
        title='Edit content'
        icon={TextSnippetIcon}
        goTo={`/page/editContent?id=${item.id}`}
    />
</>
const Pages = () => {
    return <List
        title="Pages"
        entityType="Page"
        filters={filters}
        headers={headers}
        row={row}
        create={UpsertPage}
        hasEdit={true}
        hasDelete={true}
        entityActions={entityActions}
    />
}

export default Pages