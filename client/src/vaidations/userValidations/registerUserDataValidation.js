export function validateRegisterForm(formData) {
    const errors = {};

    //Username validation
    if(!formData.username) {
        errors.username = 'Username is required !';
    } else if (formData.username.length < 3) {
        errors.username = 'Username must be at least 3 characters long !';
    }

    //Email validation
    if(!formData.email) {
        errors.email = 'Email is required !';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = 'Email address is invalid !';
    }

    //Password validation
    if(!formData.password) {
        errors.password = 'Password is required !';
    } else if (formData.password.length < 5) {
        errors.password = 'Password must be at least 5 characters long !';
    }

    //Confirm password validation
    if(!formData.rePassword) {
        errors.rePassword = 'Confirm password is required !';
    } else if (formData.password !== formData.rePassword) {
        errors.rePassword = "Passwords don't match !";
    }

    //Description validation
    if(!formData.description) {
        errors.description = 'Description is required !';
    } else if (formData.description.length < 10) {
        errors.description = 'Description must be at least 10 characters long !';
    }

    //Country validation
    if(!formData.country) {
        errors.country = 'Country is required !';
    } else if (formData.country.length < 5) {
        errors.country = 'Country must be at least 5 characters long !';
    }

    //City validation
    if(!formData.city) {
        errors.city = 'City is required !';
    } else if (formData.city.length < 5) {
        errors.city = 'City must be at least 5 characters long !';
    }

    //Image Url validation 
    if(!formData.imageUrl) {
        errors.imageUrl = 'Image URL is required !';
    } else if (!/^https?:\/\/.*\.(?:jpg|jpeg|png|gif)(?:\?.*)?$/i.test(formData.imageUrl)) {
        errors.imageUrl = 'Image URL is invalid or not supported.';
    }

    return errors;
}