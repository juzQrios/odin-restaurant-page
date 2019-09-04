import contentLoader from './contentLoader';

const about = (() => {
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
        <div>
          About the restaurant - History & Speciality.
        </div>
      </section>
    `;
    contentLoader.load(aboutArticle);
  }

  return { name, switchTo };
})();

export default about;
