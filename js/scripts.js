/*!
* Start Bootstrap - Agency v7.0.12
*/

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function (DEFAULT AGENCY)
    const navbarShrink = () => {
        const navbarCollapsible = document.querySelector('#mainNav');
        if (!navbarCollapsible) return;

        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink');
        } else {
            navbarCollapsible.classList.add('navbar-shrink');
        }
    };

    // Jalankan saat load
    navbarShrink();

    // Jalankan saat scroll
    document.addEventListener('scroll', navbarShrink);

    // ScrollSpy
    const mainNav = document.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    }

    // Collapse navbar mobile
    const navbarToggler = document.querySelector('.navbar-toggler');
    const responsiveNavItems = document.querySelectorAll('#navbarResponsive .nav-link');

    responsiveNavItems.forEach(item => {
        item.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

document.addEventListener("DOMContentLoaded", function () {

  const flyer = document.getElementById("flyerModal");
  if (!flyer) return;

  const flyerModal = new bootstrap.Modal(flyer);
  flyerModal.show();

});

