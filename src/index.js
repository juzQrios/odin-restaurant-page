import contentLoader from './modules/contentLoader';

const htmlContent = `
  <nav>
    <div class="brand">Restaurant Page Project</div>
  </nav>
  <article class="intro">
    <header class="main">
      <h1>Odin Restaurant</h1>
      <img src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="Empty Bar Filled With Lights">
    </header>
    <section class="description">
      <div>This is a description of</div>
      <div>my take on the "Restaurant Page" project</div>
      <div>from The Odin Project</div>
    </section>
  </article>
`;

contentLoader.load(htmlContent);
