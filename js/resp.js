burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
navRight = document.querySelector('.nav-right')


burger.addEventListener('click', () => {
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
    navRight.classList.toggle('v-class-resp');
})