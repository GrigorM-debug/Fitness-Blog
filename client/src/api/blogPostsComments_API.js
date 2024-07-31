const BASE_URL = 'http://localhost:3030/data/comments';

export default async function createComment(postId, text) {
    const token = localStorage.getItem('auth-token');

    await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({gameId, text})
    })
}

export default async function getAll(postId) {
    const params = new URLSearchParams({
        where: `postId="${postId}"`,
        load: `author=_ownerId:users`
    })

    const response = await fetch(`${BASE_URL}/?${params.toString()}`);
    const comments = response.json()
    return comments;
}