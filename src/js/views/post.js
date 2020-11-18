import View from './view.js';

class PostView extends View {
  _parentElement = document.querySelector('.list');
  _errorMessage = 'No posts found!';
  _message = '';

  addHandlerRender(handler) {
    ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler));
  }

  _generateMarkup() {
    const posts = this._data.data.map(({ id, title, body }) => `
      <li class="listItem">
        <a class="listItem-link" href="#${id}">
          <i class="fab fa-battle-net align-middle"></i>
          <h3 class="listItem-linkTitle">${title}</h3>
          <p class="listItem-linkContent">${body}</p>
        </a>
      </li>
    `).join('')
    return posts;
  }
}

export default new PostView();
