export function createHelthyRecipesValidations(formData) {
    const errors = {};

    //Title validations
    if(!formData.title) {
        errors.title = 'Title is required !';
    } else if (formData.title.length < 5) {
        errors.title = 'Title must be at least 5 characters long !';
    }

    //Ingredients Validations
    if(!formData.ingredients) {
        errors.subTitle = 'Ingredients is required';
    } else if (formData.ingredients.length < 5) {
        errors.title = 'Ingredients must be at least 5 characters long !';
    }

    //Instructions validations
    if(!formData.instructions) {
        errors.instructions = 'Instructions description is required !'; 
    } else if(formData.instructions.length < 5) {
        errors.Instructions = 'Short instructions must at least 5 characters long !';
    }

    //Image URL validations
    if(!ormData.imageUrl) {
        errors.imageUrl = 'Image Url is required !';
    } else if(!/^(http|https):\/\/[^ "]+$/.test(formData.imageUrl)) {
        errors.imageUrl = 'Invalid Image Url';
    }

    return errors;
}