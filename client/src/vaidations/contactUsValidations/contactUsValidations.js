export default function contactUsValidations(formData) {
    const errors = {};

    if(!formData.phoneNumber) {
        errors.phoneNumber = 'Phone number is required !';
    } else if (!/^(?:(\+?1?\s?(\([2-9]\d{2}\)|[2-9]\d{2})[\s.-]?\d{3}[\s.-]?\d{4})|(\+?359\s?\d{1,2}\s?\d{3}\s?\d{4}))$/.test(formData.phoneNumber)) {
        errors.phoneNumber = 'Invalid Phone number!';
    }

    if(!formData.email) {
        errors.email = 'Email is required !';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = 'Email address is invalid !';
    }

    if(!formData.firstName) {
        errors.firstName = 'First name is required !';
    } else if (formData.firstName.length < 3) {
        errors.firstName = 'First name must be at least 3 characters long !';
    }

    if(!formData.lastName) {
        errors.lastName = 'Last name is required !';
    } else if (formData.lastName.length < 3) {
        errors.lastName = 'Last name must be at least 3 characters long !';
    }

    if(!formData.message) {
        errors.message = 'Message name is required !';
    } else if (formData.message.length < 10) {
        errors.message = 'Messsage must be at least 10 characters long !';
    }
    
    return errors
}