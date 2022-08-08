function nav () {
    const navToggler = document.querySelector(".js-nav-toggler");
    const nav = document.querySelector(".js-nav");

    const toggleNav = () => {
        navToggler.classList.toggle("active");
        nav.classList.toggle("open");
    }

    navToggler.addEventListener("click", toggleNav);
}
nav();