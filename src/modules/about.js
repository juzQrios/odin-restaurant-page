const about = (() => {
  function create() {
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
    return aboutArticle;
  }

  return { create };
})();

export default about;
