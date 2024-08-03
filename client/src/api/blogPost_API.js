const BASE_URL = 'http://localhost:3030/data/posts';

export async function createPost(postData) {
    const token = localStorage.getItem('auth-token');

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

    const post = await response.json();

    return post;
}

export async function getLatest() {
    const response = await fetch(`${BASE_URL}/?load=author%3D_ownerId%3Ausers&sortBy=_createdOn%20desc`) 

    const posts = await response.json();

    return posts;
}

export async function deletePost(postId) {
    const token = localStorage.getItem('auth-token');

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