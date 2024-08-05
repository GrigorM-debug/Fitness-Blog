export default function healthyRecipesSearchValidation(title) {
    const errors = {};

    if(!title) {
        errors.title = 'Title is required !';
    }

    return errors;
}