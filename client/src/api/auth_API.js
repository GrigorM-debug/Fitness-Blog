import * as requester from './requester';

const BASE_URL = 'http://localhost:3030/users';

export async function login(email, password) {
    try {
        const response = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        })

        if(!response.ok) {
            throw new Error("Email or password doesnt't exist !");
        }
    
        const userData = await response.json();
    
        return userData;
    } catch (err) {
        console.log(err);
        throw err;
    } 
}

export async function register(newUserData) {
    try {
        const response = await fetch(`${BASE_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUserData)
        });

        if(!response.ok) {
            throw new Error('A user with the same email already exists');
        }
    
        const userData = await response.json();

        return userData;
    } catch (err) {
        console.log(err)
        throw err;
    }

    // return userData;
}

export async function logout(token) {
    try {
        const response = await fetch(`${BASE_URL}/logout`, {
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': token
            }
        })

        if(!response.ok) {
            throw new Error('User session does not exist');
        }

        if(response.ok) {
            console.log('Successfully log out')
        }
    } catch(err) {
        console.log(err);
        throw err;
    }
}