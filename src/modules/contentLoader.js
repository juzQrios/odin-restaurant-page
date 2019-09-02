function contentLoader(htmlContent) {
  const contentDiv = document.querySelector('#content');
  contentDiv.innerHTML = htmlContent;
}

export default { load: contentLoader };
