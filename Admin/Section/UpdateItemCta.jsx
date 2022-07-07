import {
    DialogForm,
    Text,
    Link,
    Info,
    post,
} from '@Form'

const inputs = <>
    <Text
        column='CtaText'
        placeholder='CTA Text'
    />
    <Link
        column='CtaLink'
        placeholder='CTA Link'
    />
</>

const UpdateItemCta = ({
    entity,
    reloadEntity,
}) => {

    const action = ({
        data,
        error,
        setProgress,
        success,
    }) => {
        setProgress(true)
        post(`/sectionItem/setCta?id=${entity.id}`, data)
            .then(data => {
                setProgress(false)
                reloadEntity(entity)
                success('Applied')
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    return <DialogForm
        title="Update CTA"
        entity={entity}
        explanations={
            <Info
                title="Note"
                text="To remove CTA, save with empty fields"
            />
        }
        inputs={inputs}
        okAction={action}
    />
}

export default UpdateItemCta