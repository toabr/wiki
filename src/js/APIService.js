class APIService {
    constructor() {
        this.apiUrl = process.env.REACT_APP_API_URL;
        this.delay = (process.env.NODE_ENV === 'development')? 1000 : 0;
    }

    getData = (requestUrl) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                fetch(requestUrl)
                    .then(res => res.json())
                    .then(data => resolve(data))
                    .catch(err => reject(new Error(`Could not load ${requestUrl}`, err)));
                }, this.delay);
        });
    }

    getArticle = (id) => {
        const endpoint = `${this.apiUrl}/api/articles/`;
        const requestUrl = endpoint + id;
        return this.getData(requestUrl);
    }

    getArticles = ({ ids, page }) => {
        const endpoint = `${this.apiUrl}/api/articles/`;
        const reqIds = (ids.length > 0) ? ids.join('+') : '';
        const reqPage = (page > 0) ? `?page=${page}` : '';
        const requestUrl = endpoint + reqIds + reqPage;
        // console.log('getArticles', ids, 'page', page, 'url', requestUrl);
        return this.getData(requestUrl);
    }

    getArticlesByTag = (tid) => {
        const endpoint = `${this.apiUrl}/api/tag/`;
        const requestUrl = endpoint + tid;
        return this.getData(requestUrl);
    }

    getTags = (tid) => {
        const endpoint = `${this.apiUrl}/api/term/`;
        const requestUrl = endpoint + tid;
        return this.getData(requestUrl);
    }

    articlesQuery = (q) => {
        const endpoint = `${this.apiUrl}/api/search?_q=`;
        const requestUrl = endpoint + q;
        return this.getData(requestUrl);
    }

    /*
     * ### Images
     */

    loadImage = (url) => {
        return new Promise((resolve, reject) => {
            let image = new Image();
            image.onload = () => resolve(image);
            image.onerror = () => reject(new Error('Could not load image at ' + url));
            image.src = url;
        })
    }

}

export default new APIService;