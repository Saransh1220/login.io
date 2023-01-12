const menuBtn = document.querySelector('.menu-btn');
const menItems = document.querySelector('.items');

menuBtn.addEventListener('click',() => {
    menuBtn.classList.toggle("open");
    menItems.classList.toggle("open");
});



