const apiUrl = process.env.REACT_APP_API_URL;

export const nodeReq = (ids, cb) => {
    const endpoint = `${apiUrl}/api/articles/`;
    const requestUrl = endpoint + ids.join('+');
    setTimeout(() => {
        GET({ requestUrl, cb });
    }, 500);
}

export const searchReq = (q, cb) => {
    const endpoint = `${apiUrl}/api/search?_q=`;
    const requestUrl = endpoint + q;
    GET({ requestUrl, cb });
}

export const tagReq = (id, cb) => {
    const endpoint = `${apiUrl}/api/tag/`;
    const requestUrl = endpoint + id;
    setTimeout(() => {
        GET({ requestUrl, cb });
    }, 500);
}

export const termReq = (tid, cb) => {
    const endpoint = `${apiUrl}/api/term/`;
    const requestUrl = endpoint + tid;
    GET({ requestUrl, cb });
}

const GET = ({ requestUrl, cb }) => {
    let response = null;
    fetch(requestUrl)
        .then(res => {
            response = res;
            return res.json();
        })
        .then(data => cb(data))
        .catch(err => {
            console.log('GET ERROR:', err, response);
            return cb([]);
        });
}