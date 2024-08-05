const BASE_URL = 'http://localhost:3030/data/likes';

export async function likePost(recipeId) {
    const token = localStorage.getItem('auth-token');

    const response = await fetch(`${BASE_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({recipeId}),
    });

    const result = await response.json();

    // console.log(result)
    return result;
}

export async function getLikes(recipeId) {
    const params = new URLSearchParams({
        where: `recipeId="${recipeId}"`,
    })

    const response = await fetch(`${BASE_URL}?${params.toString()}`);

    // const result = await response.json();
    const result = await response.json();

    return result;
}

export async function getUserLikedRecipes(userId) {
    const params = new URLSearchParams({
        where: `_ownerId="${userId}"`,
        load: `recipe=recipeId:recipes`
    })

    const response = await fetch(`${BASE_URL}?${params.toString()}`);

    // const result = await response.json();
    const result = await response.json();

    return result;
}