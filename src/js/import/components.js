const links = document.querySelectorAll('a[href^="#"]'); // Select all anchor links on the page

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Cancel the default behavior of the link

    const href = this.getAttribute('href'); // Get the value of the href attribute
    const target = document.querySelector(href); // Find the target element

    // Calculate the scroll position with the height of the fixed element taken into account
    let topOffset = target.getBoundingClientRect().top + window.pageYOffset - header.offsetHeight + 1;

    // Check if target element occupies less than 85% of the screen
    const windowHeight = window.innerHeight;
    const targetHeight = target.offsetHeight;
    const offset = windowHeight * 0.85;
    if (targetHeight < offset) {
      // Calculate the top offset to center the target element
      const centerOffset = (windowHeight - targetHeight) / 2;
      topOffset = target.getBoundingClientRect().top + window.pageYOffset - header.offsetHeight + 40 - centerOffset;
    }

    // Smoothly scroll to the target element
    window.scrollTo({
      top: topOffset,
      behavior: 'smooth'
    });
  });
});
