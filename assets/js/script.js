let nav = document.querySelector('nav')

window.addEventListener('scroll', () => {
    window.scrollY > 0 ? nav.classList.add("active") : nav.classList.remove("active")
})

// faq open

let faqs= document.querySelectorAll('.faq')
faqs.forEach((faq)=>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open')
        faq.style.transition='.4s'

        const Icon = faq.querySelector(".faq__icon i")
        console.log(Icon)
        if (Icon.className === "uil uil-plus") {
            Icon.className = "uil uil-minus"
        }
        else{
            Icon.className = "uil uil-plus"
        }
        
    })
})

const menu = document.querySelector(".nav__menu")
const menuBtn = document.querySelector(".open-menu-btn")
const closeBtn = document.querySelector(".close-menu-btn")


menuBtn.addEventListener('click',()=>{
    menu.style.display="flex"
    menuBtn.style.display="none"
    closeBtn.style.display="inline-block"
})
closeBtn.addEventListener('click',()=>{
    menu.style.display="none"
    closeBtn.style.display="none"
    menuBtn.style.display="inline-block"
})