import {
    DialogForm,
    Text,
    Link,
    Info,
    post,
} from '@Form'

const inputs = (type) => <>
    <Text
        column={`${type}CtaText`}
        placeholder={`${type} CTA Text`}
    />
    <Link
        column={`${type}CtaLink`}
        placeholder={`${type} CTA Link`}
    />
</>

const UpdateCta = (type) => ({
    entity,
    entityType,
    reloadEntity,
}) => {

    const action = ({
        data,
        error,
        setProgress,
        success,
    }) => {
        setProgress(true)
        post(`/${entityType}/set${type}Cta?id=${entity.id}`, data)
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
        title={`Update ${type} CTA`}
        explanations={
            <Info
                title="Note"
                text={`To remove ${type} CTA, save with empty fields`}
            />
        }
        inputs={inputs(type)}
        okAction={action}
    />
}

export default UpdateCta