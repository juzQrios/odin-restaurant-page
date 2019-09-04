import contentLoader from './modules/contentLoader';
import home from './modules/home';
import contact from './modules/contact';
import about from './modules/about';
import food from './modules/food';

function main() {
  const homeArticle = home.create();
  contentLoader.load(homeArticle);
}

main();
