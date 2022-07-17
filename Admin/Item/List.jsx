import BoltIcon from '@mui/icons-material/Bolt';
import AnchorIcon from '@mui/icons-material/Anchor';
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
import UpsertSectionItem from '../Item/Upsert'
import UpdateItemPrimaryCta from '../Item/PrimaryCta';
import UpdateItemSeconaryCta from '../Item/SecondaryCta';
import useSection from '../Hooks/useSection';

const headers = (configs) => <>
    {configs.itemsHaveImage && <td></td>}
    <th start>Title</th>
    {configs.itemsHavePrimaryCta && <th>Primary CTA</th>}
    {configs.itemsHaveSecondaryCta && <th>Secondary CTA</th>}
    {configs.itemsHaveAvatar && <th>Avatar</th>}
    {configs.itemsHaveSvgIcon && <th>SVG</th>}
</>

const row = (configs) => (item) => <>
    {
        configs.itemsHaveImage &&
        <td>
            <Image
                url={item.relatedItems?.imageUrl}
                uploadUrl={`/sectionItem/setImage?id=${item.id}&&property=ImageGuid`}
                deletionUrl={`/sectionItem/deleteImage?id=${item.id}&&property=ImageGuid`}
            />
        </td>
    }
    <td >
        <TitleSubtitle
            supertitle={item.supertitle?.cut(40)}
            title={<ValueWithTitle
                value={item.title?.cut(30)}
                title={item.summary}
            />}
            subtitle={item.subtitle?.cut(40)}
        />
    </td>
    {
        configs.itemsHavePrimaryCta &&
        <td>
            {
                item.primaryCtaText
                &&
                <a href={item.primaryCtaLink?.startsWith('http') ? item.primaryCtaLink : `${app.env('SITE_HOST')}${item.primaryCtaLink}`} target="_blank" className="link">{item.primaryCtaText}</a>
            }
        </td>
    }
    {
        configs.itemsHaveSecondaryCta &&
        <td>
            {
                item.secondaryCtaText
                &&
                <a href={item.secondaryCtaLink?.startsWith('http') ? item.secondaryCtaLink : `${app.env('SITE_HOST')}${item.secondaryCtaLink}`} target="_blank" className="link">{item.secondaryCtaText}</a>
            }
        </td>
    }
    {
        configs.itemsHaveSvgIcon &&
        <td>
            SVG
        </td>
    }
</>

const entityActions = (configs) => (entity) => <>
    {
        configs.itemsHavePrimaryCta &&
        <EntityAction
            title='Primary CTA'
            icon={BoltIcon}
            dialog={UpdateItemPrimaryCta}
        />
    }
    {
        configs.itemsHaveSecondaryCta &&
        <EntityAction
            title='Secondary CTA'
            icon={AnchorIcon}
            dialog={UpdateItemSeconaryCta}
        />
    }
</>

const SectionItems = ({ setProgress }) => {

    const {
        configs,
        section,
    } = useSection({ setProgress })

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
        upsert={configs.variableItems ? UpsertSectionItem : false}
        hasEdit={true}
        hasDelete={configs.variableItems}
        separateRowForActions={true}
    />
}

export default SectionItems