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
     * Button next page
     */
    document.querySelector('#change-page').addEventListener('click', function(){
        if(this.classList.contains('active') == true){
            this.classList.add('not-active');
        }else{
            this.classList.remove('not-active');
        }
        this.classList.toggle('active');
        document.querySelector('#home').classList.toggle('active');
        document.querySelector('#section').classList.toggle('active');
    })
});