const BASE_URL = 'http://localhost:3030/data/comments';

export default async function createComment(gameId, text) {
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

export default async function getAll(gameId) {
    const params = new URLSearchParams({
        where: `gameId="${gameId}"`,
        load: `author=_ownerId:users`
    })

    const response = await fetch(`${BASE_URL}/?${params.toString()}`);
    const comments = response.json()
    return comments;
}