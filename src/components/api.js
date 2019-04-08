export const nodeReq = ({ endpoint, ids }, cb) => {
    const requestUrl = endpoint + ids.join('+');

    fetch(requestUrl)
        .then(res => res.json())
        .then(nodes => cb(nodes))
        .catch(err => console.log(err));
}

export const termReq = (tid, cb) => {
    fetch(`https://local.wiki/taxonomy/term/${tid}?_format=json`)
        .then(res => res.json())
        .then(nodes => cb(nodes))
        .catch(err => console.log(err));
}