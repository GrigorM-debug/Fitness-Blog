import { useState } from "react"
import useBMICalculatorValidations from "../vaidations/bmiCalculatorValidations";

export default function useBMICalculator() {
    const [bmi, setBmi] = useState(0)
    const [errors, setErrors] = useState({});

    const calculateBMI = (data) => {
        const validationResult = useBMICalculatorValidations(data);

        if(Object.keys(validationResult).length > 0) {
            setErrors(validationResult);
            return false;
        }

        let heightInCm = parseFloat(data.height);
        let weightInKg = parseFloat(data.weight);

        if (heightUnit === "ft") {
            heightInCm *= 30.48; 
        }

        if (weightUnit === "lb") {
            weightInKg *= 0.453592; 
        }

        const calculatedBmi = (weightInKg / ((heightInCm * heightInCm) / 10000)).toFixed(2);

        setBmi(calculatedBmi);
        return true;
    }

    return [bmi, calculateBMI, errors]
}