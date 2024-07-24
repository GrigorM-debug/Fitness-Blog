import { useState } from "react";

export default function useForm(initialData, handleSubmitCallback) {
    const [formData, setFormData] = useState(initialData);

    const handleInputChange = (e) => {
        setFormData(oldState => ({
            ...oldState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        handleSubmitCallback(formData);
    } 

    return {formData, handleInputChange, handleSubmit};
}