export function blogPostsValidation(formData) {
    const errors = {};

    //Title validations
    if(!formData.title) {
        errors.title = 'Title is required !';
    } else if (formData.title.length < 5) {
        errors.title = 'Title must be at least 5 characters long !';
    }

    //Category validations
    if(formData.category === 'Choose a category') {
        errors.category = 'Please select category !';
    }

    //Subtitle Validations
    if(!formData.subTitle) {
        errors.subTitle = 'Subtitle is required';
    } else if (formData.subTitle.length < 5) {
        errors.subTitle = 'Subtitle must be at least 5 characters long !';
    }

    //Short Description validations
    if(!formData.shortDescription) {
        errors.shortDescription = 'Short description is required !'; 
    } else if(formData.shortDescription.length < 10) {
        errors.shortDescription = 'Short description must at least 10 characters long !';
    }

    //Content validations
    if(!formData.content) {
        errors.content = 'Content is required !';
    } else if (formData.content.length < 30) {
        errors.content = 'Content must be at least 30 characters long !'
    }

    //Image URL validations
    if(formData.imageUrl !== '' && !/^(http|https):\/\/[^ "]+$/.test(formData.imageUrl)) {
        errors.imageUrl = 'Invalid Image Url';
    }

    return errors;
}