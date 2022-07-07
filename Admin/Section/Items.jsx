import BoltIcon from '@mui/icons-material/Bolt';
import { useState, useEffect } from 'react'
import {
    app,
    EntityAction,
    get,
    Image,
    List,
    Text,
    useMessage,
    TitleSubtitle,
    ValueWithTitle,
} from '@List'
import UpsertSectionItem from './UpsertItem'
import UpdateItemCta from './UpdateItemCta';

const headers = <>
    <td></td>
    <th start>Title</th>
    <th>CTA</th>
</>

const row = (item) => <>
    <td>
        <Image
            url={item.relatedItems?.imageUrl}
            uploadUrl={`/section/setImage?sectionId=${item.id}`}
        />
    </td>
    <td >
        <TitleSubtitle
            supertitle={item.supertitle}
            title={<ValueWithTitle
                value={item.title}
                title={item.summary}
            />}
            subtitle={item.subtitle}
        />
    </td>
    <td>
        {
            item.ctaText
            &&
            <div>yes</div>
        }
    </td>
</>

const entityActions = (entity) => <>
    <EntityAction
        title='Manage actions'
        icon={BoltIcon}
        dialog={UpdateItemCta}
    />
</>

const SectionItems = ({ setProgress }) => {

    const { sectionId } = app.parseQuery()
    const [section, setSection] = useState({})
    const { error } = useMessage()

    useEffect(() => {
        setProgress(true)
        get(`/section/get/${sectionId}`)
            .then(data => {
                setProgress(false)
                setSection(data)
            }, e => {
                setProgress(false)
                error(e)
            })
    }, [])

    return <List
        title={section.title}
        // breadcrumbItems={[{
        //     title: 'Sections',
        //     link: '/sections'
        // }, {
        //     title: 'Items'
        // }]}
        entityType='SectionItem'
        headers={headers}
        row={row}
        entityActions={entityActions}
        upsert={section.variableItems ? UpsertSectionItem : false}
        hasEdit={true}
        hasDelete={true}
    />
}

export default SectionItems