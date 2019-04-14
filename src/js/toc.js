// version = 0.2
// description = generate a table of contents (toc) on page load

export const injectToc = (node) => {

    let wrapper = document.createElement('div');
    wrapper.innerHTML = node;

    const toc = wrapper.getElementsByClassName('table-of-contents')[0];
    if (toc) console.log('### generate table of contents'); else return wrapper.innerHTML;

    // caching
    const alphabetical = (toc.classList.contains('alphabetical')) ? true : false;
    const numerals = (toc.classList.contains('numerals')) ? true : false;
    const headingNodes = wrapper.getElementsByTagName('h3');
    const headingsList = getText(headingNodes);
    const tocLinks = generateTocLinks(headingsList);

    addIds(headingNodes);
    if (numerals) addNumerals(headingNodes);

    addHref(tocLinks);
    if (alphabetical) orderAlphabetical(tocLinks);
    // console.dir(tocLinks);

    let tocList = generateTocList(tocLinks);
    tocList.addEventListener('click', event => {
            event.preventDefault();
            var target = ('href' in event.target) ? event.target.attributes.href.value : null;
            scrollintoView(target);
            // console.dir(target);
        });

    toc.innerHTML = '';
    toc.append(tocList);

    // scroll to top btn
    // insertToTopBtn(article);


    return wrapper.innerHTML;
}


function getText(nodeList) {
    var textList = [];
    for (var i = 0; i < nodeList.length; i++) {
        textList.push(nodeList[i].innerText);
    }
    return textList;
}


function generateTocLinks(textList) {
    var links = [];

    for (var i = 0; i < textList.length; i++) {
        var item = textList[i];

        var link = document.createElement('a');
        link.classList.add('toc-link');
        link.setAttribute('href', '#toc-' + (i + 1));
        link.innerText = item;

        links.push(link);
    }
    return links;
}


function addHref(links) {
    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        link.setAttribute('href', '#toc-' + (i + 1));
    }
    return links;
}


function generateTocList(nodeList) {
    var list = document.createElement('ul');

    for (var i = 0; i < nodeList.length; i++) {
        var item = nodeList[i];

        var listElement = document.createElement('li');
        listElement.classList.add('toc-item');

        listElement.append(item);
        list.append(listElement);
    }
    return list;
}


function orderAlphabetical(nodeList) {
    var output = nodeList.sort(function (a, b) {
        var nameA = a.innerText.toUpperCase(); // ignore upper and lowercase
        var nameB = b.innerText.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    });
    // console.log(output);
    return output;
}


function addNumerals(headingNodes) {
    for (var i = 0; i < headingNodes.length; i++) {
        headingNodes[i].innerText = (i + 1) + '. ' + headingNodes[i].innerText;
    }
}


function addIds(headingNodes) {
    for (var i = 0; i < headingNodes.length; i++) {
        headingNodes[i].id = 'toc-' + (i + 1);
    }
}


function scrollintoView(id) {
    var target = document.getElementById(id.slice(1, id.length));
    if (target) {
        var offset = target.offsetTop + target.offsetParent.offsetTop;
        window.scrollTo({ top: offset, behavior: 'smooth' });
    }
}


function insertToTopBtn(domNode) {
    var topBtn = document.createElement('div');
    topBtn.classList.add('back-to-top-btn', 'btn', 'btn-primary');
    topBtn.innerText = 'TOP';
    domNode.appendChild(topBtn);

    topBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // console.log('getOffset', getOffset());
    topBtn.style.left = getOffset();

    var resizeTimer;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            topBtn.style.left = getOffset();
        }, 250);
    });

    function getOffset() {
        var offset = (domNode.offsetLeft + domNode.offsetParent.offsetLeft + domNode.clientWidth - topBtn.clientWidth) + 'px';
        return offset;
    }
}