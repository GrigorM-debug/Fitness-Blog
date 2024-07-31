const BASE_URL = 'http://localhost:3030/data/likes';

export async function likeComment(commentId) {
    const token = localStorage.getItem('auth-token');

    const response = await fetch(`${BASE_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({commentId}),
    });

    const result = await response.json();

    // console.log(result)
    return result;
}

export async function getLikes(commentId) {
    const params = new URLSearchParams({
        where: `commentId="${commentId}"`,
    })

    const response = await fetch(`${BASE_URL}?${params.toString()}`);

    // const result = await response.json();
    const result = await response.json();

    return result;
}
