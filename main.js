// Select the navigation links and add an event listener to each one
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    // Prevent the default behavior of following the link
    event.preventDefault();
    
    // Get the href attribute of the link
    const href = link.getAttribute('href');
    
    // Scroll smoothly to the element with the corresponding id
    document.querySelector(href).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
