import * as model from './model'
import postView from './views/post';
import commentView from './views/comment';
import paginationView from './views/pagination';

import '../css/index.css';

const controlPosts = async () => {
  try {
    const id = window.location.hash.slice(1);
    if (id) return;

    postView.renderLoading(); 

    if (!model.state.posts.length) {
      await model.loadPosts();
    }

    postView.render({
      data: model.getPostsPage(),
      page: model.state.page
    });
    
    paginationView.render({
      posts: model.state.posts,
      page: model.state.page,
      postsPerPage: model.state.postsPerPage,
    });
  } catch (err) {
    console.error(err);
  }
};

const controlComments = async () => {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    paginationView._clear();
    commentView.renderLoading(); 

    await model.loadComments(id);

    commentView.render({
      data: model.state.comments
    });
  } catch (err) {
    commentView.renderError();
    console.error(err);
  }
};

const controlGoBack = async () => {
  if (!model.state.posts.length) {
    await model.loadPosts();
  }
  paginationView.render({
    posts: model.state.posts,
    page: model.state.page,
    postsPerPage: model.state.postsPerPage,
  });
  window.history.pushState(null, '', '/');
  const page = model.state.page;
  postView.render({
    data: model.getPostsPage(page),
    page
  });
};

const controlPagination = (goToPage) => {
  postView.render({
    data: model.getPostsPage(goToPage)
  });

  paginationView.render({
    posts: model.state.posts,
    page: model.state.page,
    postsPerPage: model.state.postsPerPage,
  });
};

const init = async () => {
  postView.addHandlerRender(controlPosts);

  commentView.addHandlerRender(controlComments);
  commentView.addHandleClick(controlGoBack);

  paginationView.addHandlerClick(controlPagination);
};

init();
