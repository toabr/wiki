
const apiUrl = process.env.REACT_APP_API_URL;
const delay = (process.env.NODE_ENV === 'development')? 1000 : 0;

const GET = ({ requestUrl, cb }) => {
    let response = null;

    setTimeout(() => {
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
    }, delay);
}

export const nodeReq = (ids, cb) => {
    const endpoint = `${apiUrl}/api/articles/`;
    const requestUrl = endpoint + ids.join('+');
    GET({ requestUrl, cb });
}

export const searchReq = (q, cb) => {
    const endpoint = `${apiUrl}/api/search?_q=`;
    const requestUrl = endpoint + q;
    GET({ requestUrl, cb });
}

export const tagReq = (id, cb) => {
    const endpoint = `${apiUrl}/api/tag/`;
    const requestUrl = endpoint + id;
    GET({ requestUrl, cb });
}

export const termReq = (tid, cb) => {
    const endpoint = `${apiUrl}/api/term/`;
    const requestUrl = endpoint + tid;
    GET({ requestUrl, cb });
}