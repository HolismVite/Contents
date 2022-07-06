import { useState, useEffect } from 'react'
import { List, Text, Progress, app, get, useMessage } from '@List'
import UpsertSectionItem from './UpsertItem'

const headers = <>
    <th>Title</th>
</>

const row = (item) => <>
    <td>{item.title}</td>
</>

const SectionItems = ({ setPageProgress }) => {

    const { sectionId } = app.parseQuery()
    const [section, setSection] = useState({})
    const [progress, setProgress] = useState(false)
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
        upsert={section.canChangeItemsCount ? UpsertSectionItem : false}
        hasEdit={true}
        hasDelete={true}
    />
}

export default SectionItems