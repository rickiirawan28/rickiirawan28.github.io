const [...navLinks] = document.querySelectorAll('.nav-link');
const navbar = document.querySelector('.navbar');

navLinks.forEach(navLink => {
    navLink.addEventListener('click', function (e) {
        const target = this.href.split('#')[1];
        const elTarget = document.getElementById(target);
        scroll({
            top: elTarget.offsetTop - 70,
            behavior: 'smooth'
        })
        e.preventDefault();
    });
});

window.addEventListener('scroll', function (e) {
    if (window.scrollY >= 200) {
        navbar.classList.add('bg-success');
        navbar.classList.remove('navbar-light');
        navbar.classList.add('navbar-dark');
        navbar.style.paddingTop = '10px';
        navbar.style.paddingBottom = '10px';
    } else {
        navbar.classList.remove('bg-success');
        navbar.classList.remove('navbar-dark');
        navbar.classList.add('navbar-light');
        navbar.style.paddingTop = '20px';
        navbar.style.paddingBottom = '20px';
    };
});