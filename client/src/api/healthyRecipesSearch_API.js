const BASE_URL = 'http://localhost:3030/data/recipes';

export default async function searchRecipe(recipeTitle) {
    const params = new URLSearchParams();

    params.append('where', `title LIKE "${recipeTitle}"`);

    params.append('load', `author=_ownerId:users`);

    const queryString = params.toString();

    const response = await fetch(`${BASE_URL}?${queryString}`);

    const result = await response.json();

    return result;

}
