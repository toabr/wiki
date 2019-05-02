// version = 0.2
// description = generate a table of contents (toc) on page load

export const injectToc = (body) => {

    let wrapper = document.createElement('div');
    wrapper.innerHTML = body;

    const toc = wrapper.getElementsByClassName('table-of-contents')[0];
    if (toc) console.log('### generate table of contents'); else return wrapper.innerHTML;

    // caching
    const alphabetical = (toc.classList.contains('alphabetical')) ? true : false;
    const numerals = (toc.classList.contains('numerals')) ? true : false;
    let headingNodes = [...wrapper.getElementsByTagName('h3')];

    /*
     * generate Toc links
     */
    let tocLinks = headingNodes.map((e,i) => {
        let link = document.createElement('a');
        link.classList.add('toc-link');
        link.setAttribute('href', '#toc-' + (i + 1));
        link.innerText = e.innerText;
        return link
    });

    /*
     * add ids to headings
     */
    headingNodes = headingNodes.map((e,i) => {
        e.id = 'toc-' + (i + 1);
        return e
    });

    /*
     * add numerals to headings
     */
    headingNodes = (numerals) ? headingNodes.map((e,i) => {
        e.innerText = (i + 1) + '. ' + e.innerText;
        return e
    }) : headingNodes;

    /*
     * add href to tocLinks
     */
    tocLinks = tocLinks.map((e,i) => {
        e.setAttribute('href', '#toc-' + (i + 1))
        return e
    });

    /*
     * order tocLinks alphabetical
     */
    tocLinks = (alphabetical) ? tocLinks.sort((a, b) => {
        const nameA = a.innerText.toUpperCase(); 
        const nameB = b.innerText.toUpperCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    }) : tocLinks;

    /*
     * let tocList = generateTocList(tocLinks);
     */
    let tocList = document.createElement('ul');
    tocLinks.map(e => {
        let li = document.createElement('li');
        li.classList.add('toc-item');
        li.append(e);
        tocList.append(li);
    });

    toc.innerHTML = '';
    toc.append(tocList);

    return wrapper.innerHTML;
}