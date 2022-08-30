function printFixedIndex() {
    const body = document.querySelector('body');
    const menuLists = body.querySelectorAll('.practice > .container > h2');
    body.insertAdjacentElement('afterbegin',createFixedIndexElement(menuLists));

    function createFixedIndexElement(list) {
        let aside = document.createElement('aside');
        let ulEl = document.createElement('ul');
        list.forEach((menu) => { // ul안에 list를 만듬
            let li = document.createElement('li');
            let a = document.createElement('a');
            let aElementHref = "#" + menu.querySelector('span').innerText;
            aElementHref = aElementHref.substring(0, aElementHref.length -1).toLowerCase();
            a.innerHTML = menu.innerHTML;
            a.setAttribute('href', aElementHref)
            li.appendChild(a);
            return ulEl.appendChild(li);
        })
        aside.appendChild(ulEl);
        return aside;
    }
}
printFixedIndex();