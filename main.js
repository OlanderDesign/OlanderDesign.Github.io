// Navigation Menu
const toggleNav = document.querySelector('.toggle-nav');
const navLinks = document.querySelector('.nav-links');

toggleNav.addEventListener('click', () => {
  navLinks.classList.toggle('show-nav');
});

// Smooth Scrolling
const scrollLinks = document.querySelectorAll('a.scroll-link');

scrollLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const id = e.target.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    const position = element.offsetTop - 100;

    window.scrollTo({
      left: 0,
      top: position,
      behavior: 'smooth',
    });
    navLinks.classList.remove('show-nav');
  });
});

// Scroll to Top Button
const scrollToTopBtn = document.querySelector('.scroll-to-top-btn');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 500) {
    scrollToTopBtn.classList.add('show-scroll-btn');
  } else {
    scrollToTopBtn.classList.remove('show-scroll-btn');
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: 'smooth',
  });
});
