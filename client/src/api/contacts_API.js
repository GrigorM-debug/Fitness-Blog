const BASE_URL = 'http://localhost:3030/data/contacts';

export default async function sendContacts(data) {
    const token = localStorage.getItem('auth-token');
    
    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(data)
    })

    if(!response.ok) {
        return false
    }

    return true;
}