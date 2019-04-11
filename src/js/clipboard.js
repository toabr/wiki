// version = 0.1
// description = make code tags copyable by click

export const copyToClipboard = (node) => {

    console.log('### copy-to-clipboard');

    const body = document.createElement('div');
    body.innerHTML = node;

    var snippets = body.getElementsByTagName('code');

    for (var i = 0; i < snippets.length; i++) {
        var ele = snippets[i];
        attachCopy(ele);
    }

    function attachCopy(ele) {
        ele.classList.add('copyme');
        ele.addEventListener('click', copyToClipboard);
    }

    function copyToClipboard(e) {
        var target = e.target;

        toggleClassActive(target);

        var holder = document.createElement('input');
        holder.setAttribute('readonly', '');
        holder.style.position = 'absolute';
        holder.style.left = '-9999px';
        holder.value = target.innerText;
        document.body.appendChild(holder);
        holder.select();
        document.execCommand('copy');
        document.body.removeChild(holder);
    }

    function toggleClassActive(target) {
        for (var i = 0; i < snippets.length; i++) {
            var ele = snippets[i];
            ele.classList.remove('active');
        }
        target.classList.add('active');
    }

}