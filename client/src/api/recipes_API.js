const BASE_URL = 'http://localhost:3030/data/recipes';

export async function createRecipe(recipeData) {
    // const token = localStorage.getItem('auth-token');
    const token = JSON.parse(localStorage.getItem('auth')).accessToken

    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(recipeData)
    })

    const result = await response.json();
    return result;
}

export async function getAll() {
    const params = new URLSearchParams({
        load: `author=_ownerId:users`,
    });

    const response = await fetch(`${BASE_URL}/?${params.toString()}`)

    const recipes = await response.json();
    return recipes;
}


export async function getLatest() {
    const response = await fetch(`${BASE_URL}/?load=author%3D_ownerId%3Ausers&sortBy=_createdOn%20desc`) 

    const recipes = await response.json();

    return recipes;
}

export async function getOne(recipeId) {
    const params = new URLSearchParams({
        load: `author=_ownerId:users`
    });
    const response = await fetch(`${BASE_URL}/${recipeId}?${params.toString()}`)

    const recipe = await response.json();

    return recipe;
}

//Getting user Created High Protein Recipes
export async function getUserRecipes(userId) {
    const params = new URLSearchParams();

    const encodedUser = `_ownerId="${userId}"`;
    params.append('where', encodedUser);

    const queryString = params.toString();

    const response = await fetch(`${BASE_URL}?${queryString}`);

    const result = await response.json();

    return result;
}

export async function deleteRecipe(recipeId) {
    // const token = localStorage.getItem('auth-token');
    const token = JSON.parse(localStorage.getItem('auth')).accessToken

    const response = await fetch(`${BASE_URL}/${recipeId}`, {
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

export async function editRecipe(recipeId, newData) {
    // const token = localStorage.getItem('auth-token');
    const token = JSON.parse(localStorage.getItem('auth')).accessToken

    const response = await fetch(`${BASE_URL}/${recipeId}`, {
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
