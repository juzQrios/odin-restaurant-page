const home = (() => {
  function create() {
    const homeArticle = document.createElement('article');
    homeArticle.className = 'home';
    homeArticle.innerHTML = `
      <header class="main">
        <h1>Odin Restaurant</h1>
      </header>
      <section class="description">
        <div>This is a description of</div>
        <div>my take on the "Restaurant Page" project</div>
        <div>from The Odin Project</div>
      </section>
    `;
    return homeArticle;
  }

  return { create };
})();

export default home;
