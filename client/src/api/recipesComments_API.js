const BASE_URL = 'http://localhost:3030/data/comments';

export async function createComment(recipeId, text) {
    // const token = localStorage.getItem('auth-token');
    const token = JSON.parse(sessionStorage.getItem('auth')).accessToken

   const response =  await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({recipeId, text})
    })

    const result = await response.json();

    return result;
}

export async function getAll(recipeId) {
    const params = new URLSearchParams({
        where: `recipeId="${recipeId}"`,
        load: `author=_ownerId:users`
    })

    const response = await fetch(`${BASE_URL}?${params.toString()}`);

    const comments = await response.json();

    return comments;
}