import { useEffect, useState } from "react";

export default function useForm(initialData, handleSubmitCallback) {
    const [formData, setFormData] = useState(initialData);

    useEffect(() => {
        setFormData(initialData)
    }, [initialData])

    const updateFormInitialData = () => {
        setFormData(initialData);
    }

    const onChangeHandler = (e) => {
        setFormData(oldState => ({
            ...oldState,
            [e.target.name]: e.target.value || e.target.selected
        }))
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        handleSubmitCallback(formData);
        
        setFormData(initialData);
    } 

    return {formData, onChangeHandler, onSubmitHandler, updateFormInitialData};
}