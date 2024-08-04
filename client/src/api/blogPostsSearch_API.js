const BASE_URL = 'http://localhost:3030/data/posts'

export default async function searchPost(postTitle, postCategory) {
    const params = new URLSearchParams();

    params.append('where', `title LIKE "${postTitle}"`);

    const encodedCategory = `category="${postCategory}"`;
    params.append('where', encodedCategory);

    params.append('load', `author=_ownerId:users`);

    const queryString = params.toString();

    const response = await fetch(`${BASE_URL}?${queryString}`);

    const result = await response.json();

    return result;
}