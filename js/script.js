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
});