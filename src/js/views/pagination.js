import View from './view.js';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn-pagination');
      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.posts.length / this._data.postsPerPage
    );

    if (curPage === 1 && numPages > 1) {
      return `
        <button data-goto="${
          curPage + 1
        }" class="btn btn-pagination btn-paginationNext">
          <span>Page ${curPage + 1}</span>
          <i class="fas fa-angle-right align-middle"></i>
        </button>
      `;
    }

    if (curPage === numPages && numPages > 1) {
      return `
        <button data-goto="${
          curPage - 1
        }" class="btn btn-pagination btn-paginationPrev">
          <i class="fas fa-angle-left align-middle"></i>
          <span>Page ${curPage - 1}</span>
        </button>
      `;
    }

    if (curPage < numPages) {
      return `
        <button data-goto="${
          curPage - 1
        }" class="btn btn-pagination btn-paginationPrev">
          <i class="fas fa-angle-left align-middle"></i>
          <span>Page ${curPage - 1}</span>
        </button>
        <button data-goto="${
          curPage + 1
        }" class="btn btn-pagination btn-paginationNext">
          <span>Page ${curPage + 1}</span>
          <i class="fas fa-angle-right align-middle"></i>
        </button>
      `;
    }

    return '';
  }
}

export default new PaginationView();
