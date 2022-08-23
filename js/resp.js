const navList = document.querySelector('.nav-list')
const closeMenu = document.querySelector('.closeMenu')
const openMenu = document.querySelector('.openMenu')


openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    navList.style.display= 'flex';
    navList.style.top= '0';
}
function close(){
    navList.style.top= '-100%';
}