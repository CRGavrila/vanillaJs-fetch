import View from './view.js';

class CommentView extends View {
  _parentElement = document.querySelector('.list');
  _btnBack = document.querySelector('.btn-back');
  _errorMessage = 'No comments found!';
  _message = '';
  
  addHandlerRender(handler) {
    ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler));
  }

  addHandleClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn-back');
      if (!btn) return;

      handler()
    });
  }

  _generateMarkup() {
    const posts = '<a class="btn btn-back"><i class="fas fa-long-arrow-alt-left"></i><span>Back</span></a>' + this._data.data.map(({ id, name, body, email }) => `
      <li class="listItem listItem-commentWrapper">
        <div class="listItem-comment">
          <i class="far fa-envelope"></i>
          <h3 class="inline listItem-commentTitle">${email}</h3>
        </div>
        <div class="listItem-comment">
          <i class="far fa-user"></i>
          <h4 class="inline listItem-commentSubTitle">${name}</h4>
        </div>
        <div class="listItem-comment">
          <i class="far fa-comment-dots"></i>
          <span class="listItem-commentContent">${body}</span></div>
      </li>
    `).join('')
    return posts;
  }
}

export default new CommentView();
