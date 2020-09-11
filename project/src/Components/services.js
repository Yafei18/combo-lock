export const getReviewers = () => {
    return fetch('/reviewers')
        .catch( err => Promise.reject({ error: 'service-error', err }) )
        .then( response => {
            if(response.ok) {
                return response.json();
            }
            return Promise.reject({ error: 'service-complaint', err: response.statusText });
        });
}

export const getPosts = () => {
    return fetch('/posts')
        .catch( err => Promise.reject({ error: 'service-error', err }) )
        .then( response => {
            if(response.ok) {
                return response.json();
            }
            return Promise.reject({ error: 'service-complaint', err: response.statusText });
        });
}

export const addPost = ( post ) => {
    return fetch('/posts', {
        method: 'POST',
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify( { post } )
    })
        .catch( err => Promise.reject({ error: 'service-error', err }) )
        .then( response => {
            if(response.ok) {
                return response.json();
            }
            return Promise.reject({ error: 'service-complaint', err: response.statusText });
        });
};

export const addName = ( reviewer ) => {
    return fetch('/reviewers', {
        method: 'POST',
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify( { reviewer } )
    })
        .catch( err => Promise.reject({ error: 'service-error', err }) )
        .then( response => {
            if(response.ok) {
                return response.json();
            }
            return Promise.reject({ error: 'service-complaint', err: response.statusText });
        });
};

export const removePost = ( post ) => {
    return fetch('/messages', {
        method: 'POST',
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify( { post } )
    })
        .catch( err => Promise.reject({ error: 'service-error', err }) )
        .then( response => {
            if(response.ok) {
                return response.json();
            }
            return Promise.reject({ error: 'service-complaint', err: response.statusText });
        });
};

export const removeName = ( reviewer ) => {
    return fetch('/users', {
        method: 'POST',
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify( { reviewer } )
    })
        .catch( err => Promise.reject({ error: 'service-error', err }) )
        .then( response => {
            if(response.ok) {
                return response.json();
            }
            return Promise.reject({ error: 'service-complaint', err: response.statusText });
        });
};



