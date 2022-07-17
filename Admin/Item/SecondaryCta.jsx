import {
    DialogForm,
    Text,
    Link,
    Info,
    post,
} from '@Form'

const inputs = <>
    <Text
        column='SecondaryCtaText'
        placeholder='Secondary CTA Text'
    />
    <Link
        column='SecondaryCtaLink'
        placeholder='Secondary CTA Link'
    />
</>

const UpdateItemSecondaryCta = ({
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
        post(`/sectionItem/setSecondaryCta?id=${entity.id}`, data)
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
        title="Update Secondary CTA"
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

export default UpdateItemSecondaryCta