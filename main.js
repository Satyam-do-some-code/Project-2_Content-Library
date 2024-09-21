//change navbar style on scroll

window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})


//  Hide/Show the faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq =>{
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // changing the + icon to - onclick 
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'fa-solid fa-plus'){
            icon.className = 'fa-solid fa-minus';
        }else{
            icon.className = 'fa-solid fa-plus';
        }
    })
})


// Hide/Show the nav menu 
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () =>{
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

// Close nav menu

const closenav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click' , closenav)