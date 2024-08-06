export default function useBMICalculatorValidations(data) {
    const errors = {}

    // Height validations
    if(!data.height) {
        errors.height = 'Height is required !';
    } else if (isNaN(data.height)) {
        errors.height = 'Height must be number !';
    }

    //Weight validations
    if(!data.weight) {
        errors.weight = 'Weight is required !';
    } else if (isNaN(data.weight)) {
        errors.weight = 'Weight must be number !';
    }

    //Height Unit
    if(data.heightUnit === 'Please select height unit') {
        errors.heightUnit = 'Unit is required !'
    }

    if(data.weightUnit === 'Please select weight unit') {
        errors.weightUnit = 'Unit is required !';
    }

    if(data.gender === 'Please select gender') {
        errors.gender = 'Gender is required !';
    }

    if(!data.age) {
        errors.age = 'Age is required !';
    } else if (isNaN(data.age)) {
        errors.age = 'Age must be number !';
    } else if (data.age < 2 && data.age > 102) {
        errors.age = 'Age must be between 2 and 102'
    }

    return errors;
}