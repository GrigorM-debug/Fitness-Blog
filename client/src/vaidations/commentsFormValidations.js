export default function commentsFormValidations(text) {
    const errors = {};

    if(!text) {
        errors.text = 'Comment text is required';
    } 

    return errors;
}