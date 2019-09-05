import contentLoader from './contentLoader';

const contact = (() => {
  const name = 'Contact';

  function switchTo() {
    const contactArticle = document.createElement('article');
    contactArticle.className = 'contact';
    contactArticle.innerHTML = `
      <header class="main">
        <h1>Odin Restaurant</h1>
        <h3>Contact</h3>
      </header>
      <section class="description">
        <div class="placeholder">
          Contact details like Address & such
        </div>
      </section>
    `;
    contentLoader.load(contactArticle);
  }

  return { name, switchTo };
})();

export default contact;
