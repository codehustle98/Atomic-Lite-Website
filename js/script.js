// menu navigation
function navigateTo(menu){
    const menuItems = document.querySelectorAll('.nav-link');
    menuItems.forEach(item => {
        if(item.getAttribute('data-menu').toLowerCase() === menu.toLowerCase()){
            item.classList.add('active');
            return;
        }
        item.classList.remove('active');
    });
}

window.addEventListener('scroll',()=>{
    if(window.scrollY > 150){
        document.querySelector('header').classList.add('fixed');
    }else{
        document.querySelector('header').classList.remove('fixed');
    }
})