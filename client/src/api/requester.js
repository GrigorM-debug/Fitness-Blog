async function requester(method, url, data) {
    const options = {};

    if(method !== 'GET') {
        options.method = method;
    }

    if(data) {
        options.headers = {
            'Content-Type': 'application/json'
        }
        options.body = JSON.stringify(data);
    }

    const result = await fetch(url, options);
    const data = await result.json();
}

export const get = requester.bind(null, 'GET');
export const post = requester.bind(null, 'POST');
export const put = requester.bind(null, 'PUT');
export const del = requester.bind(null, 'DELETE');