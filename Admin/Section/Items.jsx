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

const headers = (configs) => <>
    <td></td>
    <th start>Title</th>
    {configs.itemsHavePrimaryCta && <th>CTA</th>}
</>

const row = (configs) => (item) => <>
    <td>
        <Image
            url={item.relatedItems?.imageUrl}
            uploadUrl={`/sectionItem/setImage?id=${item.id}&&property=ImageGuid`}
            deletionUrl={`/sectionItem/deleteImage?id=${item.id}&&property=ImageGuid`}
        />
    </td>
    <td >
        <TitleSubtitle
            supertitle={item.supertitle.cut(40)}
            title={<ValueWithTitle
                value={item.title.cut(30)}
                title={item.summary}
            />}
            subtitle={item.subtitle.cut(40)}
        />
    </td>
    {
        configs.itemsHavePrimaryCta &&
        <td>
            {
                item.ctaText
                &&
                <a href={item.ctaLink?.startsWith('http') ? item.ctaLink : `${app.env('SITE_HOST')}${item.ctaLink}`} target="_blank" className="link">{item.ctaText}</a>
            }
        </td>
    }
</>

const entityActions = (configs) => (entity) => <>
    <EntityAction
        title='Manage actions'
        icon={BoltIcon}
        dialog={UpdateItemCta}
    />
</>

const SectionItems = ({ setProgress }) => {

    const { sectionId } = app.parseQuery()
    const [section, setSection] = useState({})
    const [configs, setConfigs] = useState({})
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

    useEffect(() => {
        if (section && section.relatedItems) {
            setConfigs(section.relatedItems.configs)
        }
    }, [section])

    useEffect(() => {
        console.log(configs)
    }, [configs])

    return <List
        title={section.title}
        // breadcrumbItems={[{
        //     title: 'Sections',
        //     link: '/sections'
        // }, {
        //     title: 'Items'
        // }]}
        entityType='SectionItem'
        headers={headers(configs)}
        row={row(configs)}
        entityActions={entityActions(configs)}
        upsert={section.variableItems ? UpsertSectionItem : false}
        hasEdit={true}
        hasDelete={true}
        separateRowForActions={true}
    />
}

export default SectionItems