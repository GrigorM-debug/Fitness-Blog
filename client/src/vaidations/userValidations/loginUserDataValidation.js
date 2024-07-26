export function validateLoginForm(formData) {
    const errors = {};

    //Email validations
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

    return errors;
}