import contentLoader from './contentLoader';

const name = 'About';

function switchTo() {
  const aboutArticle = document.createElement('article');
  aboutArticle.className = 'about';
  aboutArticle.innerHTML = `
      <header class="main">
        <h1>Odin Restaurant</h1>
        <h3>About</h3>
      </header>
      <section class="description">
        <div class="placeholder">
          About the restaurant - History & Speciality
        </div>
      </section>
    `;
  contentLoader.load(aboutArticle);
}

export default { name, switchTo };
