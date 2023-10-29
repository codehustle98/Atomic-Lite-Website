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
});

// counter animation
const counters = document.querySelectorAll(".highlight-icon");
const speed = 800;
window.addEventListener('scroll',()=>{
    if(window.scrollY > 200){
        counters.forEach(counter => {
            counter.style.animationDelay = '1s';
            const animate = () => {
                const value = +counter.getAttribute('data-count');
                const data = +counter.innerText;
        
                const time = value / speed;
                if(data < value){
                    counter.innerText = Math.ceil(data + time);
                    setTimeout(animate,1);
                }else{
                    counter.innerText = value;
                }
            }
            animate();
        });
    }
});