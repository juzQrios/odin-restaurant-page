import home from './modules/home';
import contact from './modules/contact';
import about from './modules/about';
import food from './modules/food';
import theme from './modules/theme';

function main() {
  const tabs = [home, contact, about, food, theme];

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
    tabs[clickedTabIndex].switchTo();
    document.querySelector('.active').classList.toggle('active');
    clickedTab.classList.toggle('active');
  });

  // Loading home content on Initial Page Load
  home.switchTo();
  document.querySelector('.nav-link').classList.toggle('active');
}

main();
