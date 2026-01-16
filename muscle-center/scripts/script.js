const menuIcon = document.getElementById('menu-icon');
const menuHeader = document.getElementById('menu-header');
let menuOpen = false;

menuIcon.addEventListener('click', () => {  
    if (!menuOpen) {
        menuHeader.classList.add('open');
        menuIcon.style.transform = 'rotate(0deg)';
        menuOpen = true;
    } else {
        menuHeader.classList.remove('open');
        menuIcon.style.transform = 'rotate(90deg)';
        menuOpen = false;
  }
});