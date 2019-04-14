
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

export const getArticles = ({ ids, page }, cb) => {
    const endpoint = `${apiUrl}/api/articles/`;
    const reqIds = (ids.length > 0) ? ids.join('+') : '';
    const reqPage = (page > 0) ? `?page=${page}` : '';
    const requestUrl = endpoint + reqIds + reqPage;
    // console.log('getArticles', ids, 'page', page, 'url', requestUrl);
    GET({ requestUrl, cb });
}

export const getArticle = (id, cb) => {
    const endpoint = `${apiUrl}/api/articles/`;
    const requestUrl = endpoint + id;
    fetch(requestUrl)
        .then(res => res.json())
        .then(data => cb(data[0]))
        .catch(err => console.log(err));
}

export const getTags = (tid, cb) => {
    const endpoint = `${apiUrl}/api/term/`;
    const requestUrl = endpoint + tid;
    GET({ requestUrl, cb });
}

export const getArticlesByTag = (id, cb) => {
    const endpoint = `${apiUrl}/api/tag/`;
    const requestUrl = endpoint + id;
    GET({ requestUrl, cb });
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