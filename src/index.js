import contentLoader from './modules/contentLoader';
import home from './modules/home';
import contact from './modules/contact';
import about from './modules/about';
import food from './modules/food';

function main() {
  const tabs = [home, contact, about, food];

  // Navbar Tabs generation from `tabs` Array
  const navList = document.querySelector('#nav-list');
  tabs.forEach((tab, index) => {
    const listElement = document.createElement('li');
    listElement.className = 'nav-item';
    listElement.id = tab.name;
    listElement.innerHTML = `
      <a class="nav-link" data-index="${index}" href="#">${tab.name}</a>
    `;
    navList.appendChild(listElement);
  });

  // Tab-switching Logic
  navList.addEventListener('click', (event) => {
    const clickedTab = event.target;
    const clickedTabIndex = clickedTab.dataset.index;
    const articleElement = tabs[clickedTabIndex].switchTo();
    contentLoader.load(articleElement);
    document.querySelector('.active').classList.toggle('active');
    clickedTab.classList.toggle('active');
  });
  const homeArticle = home.switchTo();
  contentLoader.load(homeArticle);
  document.querySelector('.nav-link').classList.toggle('active');
}

main();
