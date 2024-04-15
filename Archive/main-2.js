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

// Select the labels and create a timeline
const labels = document.querySelectorAll('.label');
const timeline = new TimelineMax();

// Loop through each label and add animations to the timeline
labels.forEach((label, index) => {
  // Calculate the delay based on the index
  const delay = index * 0.2;
  
  // Add the animation to the timeline
  timeline.to(label, 0.5, {
    x: 0,
    opacity: 1,
    ease: Power2.easeOut,
    delay,
    onComplete: () => {
      // When the animation completes, create a physics-based tween to bump the previous label
      if (index > 0) {
        const prevLabel = labels[index - 1];
        const bumpTween = new TweenMax.to(prevLabel, 0.3, {
          x: '-=20',
          ease: Power2.easeOut,
          repeat: 1,
          yoyo: true,
        });
        timeline.add(bumpTween, `-=${delay}`);
      }
    },
  });
});
