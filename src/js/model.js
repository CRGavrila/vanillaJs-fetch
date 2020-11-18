import { API_URL, POSTS_PER_PAGE } from './config.js';
import { get } from './utils';

const state = {
  posts: [],
  comments: [],
  page: 1,
  postId: null,
  errorMessage: null,
  postsPerPage: POSTS_PER_PAGE,
};

const loadPosts = async () => {
  try {
    const data = await get(`${API_URL}/posts`);

    if (!Array.isArray(data)) {
      state.errorMessage = 'Posts not found';
      return {
        errorMessage: state.errorMessage,
        posts: []
      };
    }

    state.posts = data;
    state.page = 1;
    state.errorMessage = null;
    return {
      errorMessage: state.errorMessage,
      posts: data
    };
  } catch (err) {
    console.error(err);
    state.errorMessage = err.message;
    throw err;
  }
};

const loadComments = async (id) => {
  try {
    const data = await get(`${API_URL}/posts/${id}/comments`);

    if (!Array.isArray(data)) {
      state.errorMessage = 'Comments not found';
      return {
        errorMessage: state.errorMessage,
        comments: []
      };
    }

    state.comments = data;
    state.errorMessage = null;
    return {
      errorMessage: state.errorMessage,
      comments: data
    };
  } catch (err) {
    console.error(err);
    state.errorMessage = err.message;
    throw err;
  }
};

const getPostsPage = (page = state.page) => {
  state.page = page;

  const start = (page - 1) * state.postsPerPage;
  const end = page * state.postsPerPage;

  return state.posts.slice(start, end);
};

export {
  state,
  loadPosts,
  loadComments,
  getPostsPage
};
