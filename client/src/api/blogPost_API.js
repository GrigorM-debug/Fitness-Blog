import { post } from "jquery";

const BASE_URL = 'http://localhost:3030/data/posts';

export async function createPost(postData) {
    const token = localStorage.getItem('auth-token');

    const result = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(postData)
    })

    return result;
}

export async function getAll() {
    const posts = await fetch(BASE_URL);

    return posts;
}

export async function getOne(postId) {
    const post = await fetch(`${BASE_URL}/${postId}`);

    return post;
}

