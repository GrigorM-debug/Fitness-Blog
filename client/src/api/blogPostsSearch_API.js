const BASE_URL = 'http://localhost:3030/data/posts'

export default async function searchPost(postTitle, postCategory) {
    // const params = new URLSearchParams();

    // params.append('where', `title LIKE "${postTitle}"`);

    // const encodedCategory = `category="${postCategory}"`;
    // params.append('where', encodedCategory);

    // params.append('load', `author=_ownerId:users`);

    // const queryString = params.toString();
    // console.log(queryString);
    let url = '';

    if(postTitle && postCategory === 'Choose a category'){
        url= `${BASE_URL}?where=title%20LIKE%20%22${postTitle}%22&load=author%3D_ownerId%3Ausers`
    } else if (!postTitle && postCategory !== 'Choose a category') {
        console.log(postCategory)
        url = `${BASE_URL}?where=category%3D%22${postCategory}%22&load=author%3D_ownerId%3Ausers`;
    } else {
        url = `${BASE_URL}?where=title%20LIKE%20%22${postTitle}%22&where=category%3D%22${postCategory}%22&load=author%3D_ownerId%3Ausers`
    }
    // const response = await fetch(`${BASE_URL}?where=title%20LIKE%20%22${postTitle}%22&where=category%3D%22${postCategory}%22&load=author%3D_ownerId%3Ausers`);

    const response = await fetch(url);

    const result = await response.json();

    return result;
}