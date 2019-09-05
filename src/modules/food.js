import contentLoader from './contentLoader';

const food = (() => {
  const name = 'Food';

  function switchTo() {
    const foodArticle = document.createElement('article');
    foodArticle.className = 'food';
    foodArticle.innerHTML = `
      <header class="main">
        <h1>Odin Restaurant</h1>
        <h3>Food Menu</h3>
      </header>
      <section class="description">
        <div class="placeholder">
          Gallery of available food in the restaurant
        </div>
      </section>
    `;
    contentLoader.load(foodArticle);
  }

  return { name, switchTo };
})();

export default food;
