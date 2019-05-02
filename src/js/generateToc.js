// version = 0.2
// description = generate a table of contents (toc) on page load

export const generateToc = (body) => {

    let dummy = document.createElement('div');
    dummy.innerHTML = body;

    const toc = dummy.getElementsByClassName('table-of-contents')[0];
    if (toc) {
        console.log('### generate table of contents'); 
        var alphabetical = (toc.classList.contains('alphabetical')) ? true : false;
        var numerals = (toc.classList.contains('numerals')) ? true : false;
    } else {
        return // nothing to do here
    }

    /*
    * edit body headlines
    */
    const bodyHeadlines = [...dummy.getElementsByTagName('h3')].map((e,i) => {
        e.id = `toc-${i + 1}`;
        e.innerText = (numerals) ? `${i + 1}. ${e.innerText}` : e.innerText;
        return e
    });
    
    /*
     * generate toc headlines
     */
    let tocHeadlines = bodyHeadlines.map((e,i) => {
        return {
            title: e.innerText,
            href: `#toc-${i + 1}`,
        }
    });

    /*
     * order tocHeadlines alphabetical
     */
    tocHeadlines = (alphabetical) ? tocHeadlines.sort((a, b) => {
        const nameA = a.title.toUpperCase(); 
        const nameB = b.title.toUpperCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    }) : tocHeadlines;

    /*
     * delete toc from body and return
     */
    dummy.removeChild(toc);

    return {
        body: dummy.innerHTML,
        toc: tocHeadlines,
    };
}