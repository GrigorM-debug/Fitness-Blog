const BASE_URL = 'http://localhost:3030/data/likes';

export async function likePost(postId) {
    const token = localStorage.getItem('auth-token');

    const response = await fetch(`${BASE_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({postId}),
    });

    const result = await response.json();

    // console.log(result)
    return result;
}

export async function getLikes(postId) {
    const params = new URLSearchParams({
        where: `postId="${postId}"`,
    })

    const response = await fetch(`${BASE_URL}?${params.toString()}`);

    // const result = await response.json();
    const result = await response.json();

    return result;
}

export async function getUserLikedPosts(userId) {
    const params = new URLSearchParams({
        where: `_ownerId="${userId}"`,
        load: `post=posdId:posts`
    })

    const response = await fetch(`${BASE_URL}?${params.toString()}`);

    // const result = await response.json();
    const result = await response.json();

    return result;
}