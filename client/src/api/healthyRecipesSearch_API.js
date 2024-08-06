const BASE_URL = 'http://localhost:3030/data/recipes';

export default async function searchRecipe(recipeTitle) {
    const encodedTitle = encodeURIComponent(`title LIKE "${recipeTitle}"`);
    
    const url = `${BASE_URL}?where=${encodedTitle}&load=author%3D_ownerId%3Ausers`;
    
    const response = await fetch(url);
        
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const result = await response.json();

    return result
}
