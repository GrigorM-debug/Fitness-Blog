export function createHelthyRecipesValidations(formData) {
    const errors = {};

    //Title validations
    if(!formData.title) {
        errors.title = 'Title is required !';
    } else if (formData.title.length < 5) {
        errors.title = 'Title must be at least 5 characters long !';
    }

    
    //Subtitle Validations
    if(!formData.subTitle) {
        errors.subTitle = 'Subtitle is required !';
    } else if (formData.subTitle.length < 5) {
        errors.subTitle = 'Subtitle must be at least 5 characters long !';
    }

    //Description validations
    if(!formData.description) {
        errors.description = 'Description is required !';
    } else if(formData.description.length < 10) {
        errors.description = 'Description must be at least 10 characters long !';
    }

    //Ingredients Validations
    if(!formData.ingredients) {
        errors.ingredients = 'Ingredients are required !';
    } else if (formData.ingredients.length < 5) {
        errors.ingredients = 'Ingredients must be at least 5 characters long !';
    }

    //Instructions validations
    if(!formData.instructions) {
        errors.instructions = 'Instructions are required !'; 
    } else if(formData.instructions.length < 5) {
        errors.Instructions = 'Short instructions must be at least 5 characters long !';
    }

    //Image URL validations
    if(!formData.imageUrl) {
        errors.imageUrl = 'Image Url is required !';
    } else if(!/^(http|https):\/\/[^ "]+$/.test(formData.imageUrl)) {
        errors.imageUrl = 'Invalid Image Url';
    }

    return errors;
}