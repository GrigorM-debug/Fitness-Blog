export default function commentsRepliesValidations(text) {
    const errors = {};

    if(!text) {
        errors.text = 'Reply content is required !';
    }

    return errors;
}