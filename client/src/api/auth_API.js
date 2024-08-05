const BASE_URL = 'http://localhost:3030/users';

export async function login(email, password) {
    const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })

    if(!response.ok) {
        throw new Error("Wrong Email or Password!");
    }

    const userData = await response.json();

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

    if(!response.ok) {
        throw new Error('A user with the same email already exists');
    }

    const userData = await response.json();

    return userData;

    // return userData;
}

export async function logout(token) {
    const response = await fetch(`${BASE_URL}/logout`, {
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        }
    })

    if(!response.ok) {
        throw new Error('User session does not exist !');
    }

    if(response.ok) {
        console.log('Successfully log out !')
    }
}

export async function getUserData() {
    // const token = localStorage.getItem('auth-token');
    const token = JSON.parse(localStorage.getItem('auth')).accessToken

    const response = await fetch(`${BASE_URL}/me`, {
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        }
    })

    if(!response.ok) {
        throw new Error('User session does not exist !');
    }

    const result = await response.json();

    return result;
}