import makeFetch from './http.service';

const get = async (url, options) => {
  const res = await makeFetch(url, 'GET', null, options)

  return res;
}

const post = async (url, data, options) => {
  const res = await makeFetch(url, 'POST', data, options)

  return res;
}

export {
  get,
  post
}
