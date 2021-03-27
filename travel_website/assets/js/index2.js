let h1 = document.querySelector('h1');
let header = h1.closest('header');
header.style.border = '5px solid grey';

const infoPackage = document.querySelectorAll('.info > .info-package');
infoPackage.forEach(item => {
    item.children[0].style.border = '3px solid black';
});

let label = document.querySelectorAll('label');
for (let item of label) {
        if (item.matches('.mild')) {
            item.style.borderBottom = '2px solid yellow'
        } else if(item.matches('.intense')){
            item.style.borderBottom = '2px solid orange'
        } else {
            item.style.borderBottom = '2px solid red'
        } 
    }

let navList = document.querySelector('.nav-list');
let navChildren = Array.from(navList.children);
let siteMap = document.querySelector('.footer > .site-map');

navChildren.forEach(element => {
    siteMap.append(element);
});


