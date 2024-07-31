const BASE_URL = 'http://localhost:3030/data/comments';

export async function createComment(postId, text) {
    const token = localStorage.getItem('auth-token');

   const response =  await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({postId, text})
    })

    const result = await response.json();

    return result;
}

export async function getAll(postId) {
    const params = new URLSearchParams({
        where: `postId="${postId}"`,
        load: `author=_ownerId:users`
    })

    const response = await fetch(`${BASE_URL}?${params.toString()}`);

    const comments = await response.json();
    
    return comments;
}