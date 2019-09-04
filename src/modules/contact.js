const contact = (() => {
  function create() {
    const contactArticle = document.createElement('article');
    contactArticle.className = 'contact';
    contactArticle.innerHTML = `
      <header class="main">
        <h1>Odin Restaurant</h1>
        <h3>Contact</h3>
      </header>
      <section class="description">
        <div>
          Contact details like Address & such
        </div>
      </section>
    `;
    return contactArticle;
  }

  return { create };
})();

export default contact;
