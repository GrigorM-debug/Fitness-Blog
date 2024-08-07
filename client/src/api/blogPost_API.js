const BASE_URL = 'http://localhost:3030/data/posts';



export async function createPost(postData) {
    // const token = localStorage.getItem('auth-token');
    const token = JSON.parse(sessionStorage.getItem('auth')).accessToken
    console.log(token)
    
    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(postData)
    })

    const result = await response.json();
    return result;
}

export async function getAll() {
    const params = new URLSearchParams({
        load: `author=_ownerId:users`,
    });

    const response = await fetch(`${BASE_URL}/?${params.toString()}`)

    const posts = await response.json();
    return posts;
}

export async function getOne(postId) {
    // const response = await fetch(`${BASE_URL}/${postId}`);
    const params = new URLSearchParams({
        load: `author=_ownerId:users`
    });
    const response = await fetch(`${BASE_URL}/${postId}?${params.toString()}`)

    if(!response.ok) {
        throw new Error('Not found');
    }

    const post = await response.json();

    return post;
}

export async function getLatest() {
    const response = await fetch(`${BASE_URL}/?load=author%3D_ownerId%3Ausers&sortBy=_createdOn%20desc`) 

    const posts = await response.json();

    return posts;
}

export async function deletePost(postId) {
    // const token = localStorage.getItem('auth-token');
    const token = JSON.parse(sessionStorage.getItem('auth')).accessToken

    const response = await fetch(`${BASE_URL}/${postId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        // body: JSON.stringify(postData)
    })

    if(!response.ok) {
        return false;
    } 

    return true;
}

export async function editPost(postId, newData) {
    // const token = localStorage.getItem('auth-token');
    const token = JSON.parse(sessionStorage.getItem('auth')).accessToken

    const response = await fetch(`${BASE_URL}/${postId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(newData)
    })

    if(!response.ok) {
        return false;
    } 

    return true;
}

//Getting user Created Posts
export async function getUserPosts(userId) {
    const params = new URLSearchParams();

    const encodedUser = `_ownerId="${userId}"`;
    params.append('where', encodedUser);

    const queryString = params.toString();

    const response = await fetch(`${BASE_URL}?${queryString}`);

    const result = await response.json();

    return result;
}