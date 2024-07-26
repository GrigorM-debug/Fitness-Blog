import { useState } from "react";

export default function useForm(initialData, handleSubmitCallback) {
    const [formData, setFormData] = useState(initialData);

    const onChangeHandler = (e) => {
        setFormData(oldState => ({
            ...oldState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        handleSubmitCallback(formData);
    } 

    return {formData, onChangeHandler, onSubmitHandler};
}