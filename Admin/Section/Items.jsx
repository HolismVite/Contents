import { useState, useEffect } from 'react'
import {
    app,
    get,
    List,
    Text,
    useMessage,
    TitleSubtitle,
    ValueWithTitle,
} from '@List'
import UpsertSectionItem from './UpsertItem'

const headers = <>
    <th>Title</th>
</>

const row = (item) => <>
    <td >
        <TitleSubtitle
            title={<ValueWithTitle
                value={item.title}
                title={item.summary}
            />}
            subtitle={item.subtitle}
        />
    </td>
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
        upsert={section.variableItems ? UpsertSectionItem : false}
        hasEdit={true}
        hasDelete={true}
    />
}

export default SectionItems