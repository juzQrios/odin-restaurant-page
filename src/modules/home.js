import contentLoader from './contentLoader';

const home = (() => {
  const name = 'Home';

  function switchTo() {
    const homeArticle = document.createElement('article');
    homeArticle.className = 'home';
    homeArticle.innerHTML = `
      <header class="main">
        <h1>Odin Restaurant</h1>
        <div class="img-container">
          <img
            src="https://images.pexels.com/photos/301614/pexels-photo-301614.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
            alt="Placeholder Image"
          >
        </div>
        </img>
      </header>
      <section class="description">
        <div>
          This is a description for the "Restaurant Page" project from The Odin Project.
        </div>
        <div class="placeholder">
          More placeholder text here
        </div>
      </section>
    `;
    contentLoader.load(homeArticle);
  }

  return { name, switchTo };
})();

export default home;
