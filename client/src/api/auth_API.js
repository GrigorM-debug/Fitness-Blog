import * as requester from './requester';

const BASE_URL = 'http://localhost:3030/users';

export async function login(email, password) {
    // const userData = await requester.post('POST', `${BASE_URL}/login`, {email, password});
    
    const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })

    const userData = await response.json();

    // console.log(userData)

    return userData;
}

export async function register(newUserData) {
    const response = await fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUserData)
    });

    const userData = await response.json();

    return userData;
}