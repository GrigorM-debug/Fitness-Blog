const BASE_URL = 'http://localhost:3030/data/replies';

export async function createReply(newComment) {
    // const token = localStorage.getItem('auth-token');
    const token = JSON.parse(localStorage.getItem('auth')).accessToken

    const response = await fetch(`${BASE_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify(newComment),
    });

    const result = await response.json();

    return result;
}

export async function getReplies(commentId) {
    const params = new URLSearchParams({
        where: `commentId="${commentId}"`,
        load: `author=_ownerId:users`
    })

    const response = await fetch(`${BASE_URL}?${params.toString()}`);
    const replies = await response.json();
    return replies;
}
