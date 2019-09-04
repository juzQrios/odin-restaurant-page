const food = (() => {
  function create() {
    const foodArticle = document.createElement('article');
    foodArticle.className = 'food';
    foodArticle.innerHTML = `
      <header class="main">
        <h1>Odin Restaurant</h1>
        <h3>Food Menu</h3>
      </header>
      <section class="description">
        <div>
          Gallery of available food in the restaurant
        </div>
      </section>
    `;
    return foodArticle;
  }

  return { create };
})();

export default food;
