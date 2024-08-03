const BASE_URL = 'http://localhost:3030/data/recipes';

export async function createRecipe(recipeData) {
    const token = localStorage.getItem('auth-token');

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

export async function getOneRecipe(recipeId) {
    // const response = await fetch(`${BASE_URL}/${postId}`);
    // const params = new URLSearchParams({
    //     load: 'author=_ownerId:users'
    // });
    // const response = await fetch(`${BASE_URL}/${recipeId}?${params.toString()}`)
    console.log(recipeId)
    // const params = new URLSearchParams({
    //     load: `author=_ownerId:users`
    // });
    const response = await fetch(`http://localhost:3030/data/recipes/${recipeId}/?load=author%3D_ownerId%3Ausers`)
    // const response = await fetch(`${BASE_URL}/${recipeId}/?load=author%3D_ownerId%3Ausers`);
    
    
    const recipe = await response.json();
    console.log(recipe)
    return recipe;
}

export async function getLatest() {
    const response = await fetch(`${BASE_URL}/?load=author%3D_ownerId%3Ausers&sortBy=_createdOn%20desc`) 

    const recipes = await response.json();

    return recipes;
}
