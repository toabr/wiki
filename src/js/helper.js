// custom helper functions

export const handleLocalStore = ({ key, value }) => {
    if (typeof (Storage) === "undefined") return;

    if(key && value) localStorage.setItem(key, value);
    return localStorage.getItem(key);
}

export const toLocalDate = (timeStamp) => {
    const date = new Date(timeStamp * 1000);
    // const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    // return (`${date.getDate()}. ${months[date.getMonth()]} ${date.getFullYear()}`);
    return date.toLocaleString()
} 

export const stripTags = string => {
    return string.split(', ').map(tag => {
        return {
            tid: tag.split(':')[0],
            title: tag.split(':')[1],
        }
    });
}

export const orderByTitle = arr => {
    return arr.sort(function (a, b) {
        var nameA = a.title.toUpperCase(); // ignore upper and lowercase
        var nameB = b.title.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    });
}