import contentLoader from './contentLoader';

const name = 'Theme';


function changeTheme(theme) {
  const root = document.documentElement;
  const rootStyle = getComputedStyle(root);
  const themeBGColor = rootStyle.getPropertyValue(`--${theme}-background-color`);
  const themeFontColor = rootStyle.getPropertyValue(`--${theme}-font-color`);
  const themePrimary = rootStyle.getPropertyValue(`--${theme}-primary-color`);
  const themeSecondary = rootStyle.getPropertyValue(`--${theme}-secondary-color`);

  root.style.setProperty('--background-color', themeBGColor);
  root.style.setProperty('--font-color', themeFontColor);
  root.style.setProperty('--primary-color', themePrimary);
  root.style.setProperty('--secondary-color', themeSecondary);
}

function switchTo() {
  const themeArticle = document.createElement('article');
  themeArticle.className = 'food';
  themeArticle.innerHTML = `
      <header class="main">
        <h1>Odin Restaurant</h1>
        <h3>Themes</h3>
      </header>
      <section class="description">
        <div class="placeholder">
          Select a theme
        </div>
        <div class="theme-container">
        <div class="theme-1" id="t1">
          <div class="background"></div>
          <div class="primary"></div>
        </div>
        <div class="theme-2" id="t2">
          <div class="background"></div>
          <div class="primary"></div>
        </div>
        <div class="theme-3" id="t3">
          <div class="background"></div>
          <div class="primary"></div>
        </div>
      </div>    
      </section>
    `;
  contentLoader.load(themeArticle);

  const themes = ['t1', 't2', 't3'];
  themes.forEach((theme) => {
    const ele = document.getElementById(theme);
    ele.addEventListener('click', () => changeTheme(theme));
  });
}

export default { name, switchTo };
