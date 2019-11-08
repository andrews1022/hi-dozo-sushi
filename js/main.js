// Grab elements
const contentDiv = document.querySelector('#content');
const navLinks = document.querySelectorAll('.nav-list-link');
const body = document.querySelector('.body');

// Load content function
async function loadContent() {
  try {
    // Handle initial page load
    const response = await fetch('pages/index.html');
    const data = await response.text();
    body.style.backgroundImage = `url('../../img/hero.jpg')`;
    contentDiv.innerHTML = data;

    // Loop through each nav link and add an event listener
    for (let i = 0; i < navLinks.length; i++) {
      // eslint-disable-next-line prettier/prettier
      document.querySelectorAll('.nav-list-link')[i].addEventListener('click', async function clickListener(event) {
          // Prevent default link behavior
          event.preventDefault();

          // Get href value
          const page = this.getAttribute('href');

          // Fetch and load data as per link clicked
          const pageResponse = await fetch(`pages/${page}.html`);
          const pageData = await pageResponse.text();

          // Change background image as well
          if (page === 'menu') {
            body.style.backgroundImage = `url('../img/menu.jpg')`;
          } else if (page === 'contact') {
            body.style.backgroundImage = `url('../img/contact.jpg')`;
          } else {
            body.style.backgroundImage = `url('../img/hero.jpg')`;
          }

          // Insert content for page selected
          contentDiv.innerHTML = pageData;
        });
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(`Oops! This is your error: ${error}`);
  }
}

// Run function on window load
window.onload = loadContent();
