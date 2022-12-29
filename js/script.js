let homeMenu = document.querySelector('#home-menu');
window.addEventListener('load', function(){
    /**
     * Menu with small screen
     */
    document.querySelectorAll('#nav-toggle').forEach(navToggle => {
        navToggle.addEventListener('click', function(){
            homeMenu.classList.toggle('active');
        });
    });
    /**
     * Close menu when scrolling
     */
    window.addEventListener('scroll', function(){
        if(window.scrollY > 100){
            homeMenu.classList.remove('active');
        }
    });
    /**
     * Close menu when click link menu
     */
    document.querySelectorAll('#linkMenu li').forEach(linkMenu =>{
        linkMenu.addEventListener('click', function(){
            homeMenu.classList.remove('active');
        })
    });
});
/**
 * Animate on scroll
 */
let text = document.getElementById('text');
let imgct = document.getElementById('image-content');
window.addEventListener('scroll', function(){
    let position = window.scrollY;
    let s = 1000;
    let o = 250;
    text.style.transform = 'translateX(' + (-position*0.6) + 'px)';
    text.style.opacity = (o - position)/o;
    imgct.style.transform = 'scale(' + (position+s)/s + ')';
});
