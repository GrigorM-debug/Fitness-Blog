const BASE_URL = 'http://localhost:3030/data/recipes'

export default async function searchRecipe(recipeTitle) {
    const params = new URLSearchParams({
        where: `title LIKE "${recipeTitle}"`
    })

    const response = await fetch(`${BASE_URL}?${params.toString()}`);

    const result = await response.json();
    console.log(result)

    return result;
}