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
        load: `author=_ownerId:users`
    });

    const response = await fetch(`${BASE_URL}?${params.toString()}`)

    const posts = await response.json();
    return posts;
}

export async function getOne(postId) {
    // const response = await fetch(`${BASE_URL}/${postId}`);
    console.log(postId)
    const params = new URLSearchParams({
        load: `author=_ownerId:users`
    });
    const response = await fetch(`${BASE_URL}?${params.toString()}`)

    const post = await response.json();

    return post;
}

