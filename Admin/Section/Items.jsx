import { useState, useEffect } from 'react'
import { List, Text, Progress, app, get, useMessage } from '@List'
import UpsertSectionItem from './UpsertItem'

const headers = <>
    <th>Title</th>
</>

const row = (item) => <>
    <td>{item.title}</td>
</>

const SectionItems = () => {

    const [progress, setProgress] = useState(true)
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

    return progress
        ?
        <Progress />
        :
        <List
            title='Section items'
            entityType='SectionItem'
            headers={headers}
            row={row}
            upsert={section.canChangeItemsCount ? UpsertSectionItem : false}
            hasEdit={true}
            hasDelete={true}
        />
}

export default SectionItems