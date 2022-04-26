const root = document.querySelector(".header-nav__menu")
const burger = document.querySelector(".header-nav__menu-borders");

if (root) {
    root.addEventListener("click", e => {
        const status = root.classList.toggle("active")
        if (!status) document.body.style.overflow =  "visible"
        else document.body.style.overflow = "hidden"
    })
}