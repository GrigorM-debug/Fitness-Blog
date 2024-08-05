import { useState } from "react"
import sendContacts from "../api/contacts_API";

export default function useSendContacts() {
    const [isLoading, setIsLoading] = useState(false);

    const sendContactsHandler = async (data) => {
        try {
            setIsLoading(true)
            const result = await sendContacts(data)
            setIsLoading(false)
            return result;
        } catch (err) {
            console.log(err);
        } 
    }

    return [isLoading, sendContactsHandler]
}