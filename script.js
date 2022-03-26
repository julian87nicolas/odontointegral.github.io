const nav = document.querySelector('nav');
const firstSep = document.querySelector('.sep.fixed');

// event scroll down
window.addEventListener('scroll', () => {
    if(window.pageYOffset > 100){
        nav.style.position = 'fixed';
        nav.style.top = '0';
        // if size windows < 768px
        if(window.innerWidth > 800){
            firstSep.style.display = 'flex';
        }
    }
    else{
        nav.style.position = 'relative';
        firstSep.style.display = 'none';
    }
    console.log(window.pageYOffset);
});