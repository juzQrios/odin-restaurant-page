function contentLoader(articleElement) {
  const contentDiv = document.querySelector('#content');
  contentDiv.innerHTML = '';
  contentDiv.appendChild(articleElement);
}

export default { load: contentLoader };
