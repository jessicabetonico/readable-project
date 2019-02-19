const urlBase = process.env.REACT_APP_BACKEND || 'http://localhost:3001';
const headersBase = {
  Authorization: 'whatever-you-want',
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const create = () => {

  async function getCategories() {
    const endpoint = `${urlBase}/categories`;
    const res = await fetch(endpoint, {
      headers: headersBase,
    });
    const data = await res.json();
    return data && data.categories ? data.categories : [];
  }

  async function getPosts() {
    const endpoint = `${urlBase}/posts`;
    const res = await fetch(endpoint, {
      headers: headersBase,
    });
    return res.json();
  }

  async function savePost(post) {
    const endpoint = `${urlBase}/posts`;
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        ...headersBase,
      },
      body: JSON.stringify(post),
    });
    return res.json();
  }

  async function updatePost(postId, { title, body }) {
    const endpoint = `${urlBase}/posts/${postId}`;
    const res = await fetch(endpoint, {
      method: 'PUT',
      headers: {
        ...headersBase,
      },
      body: JSON.stringify({
        title,
        body,
      }),
    });
    return res.json();
  }

  async function removePost(postId) {
    const endpoint = `${urlBase}/posts/${postId}`;
    const res = await fetch(endpoint, {
      method: 'DELETE',
      headers: {
        ...headersBase,
      },
    });
    return res.json();
  }

  async function getCommentsByPostId(postId) {
    const endpoint = `${urlBase}/posts/${postId}/comments`;
    const res = await fetch(endpoint, {
      headers: {
        ...headersBase,
      },
    });
    return res.json();
  }

  async function getInitialData() {
    return Promise.all([
      getCategories(),
      getPosts(),
    ]).then(([categories, posts]) => {
      return {
        categories,
        posts,
      };
    })
  }
  
  return {
    getCategories,
    getPosts,
    getInitialData,
    savePost,
    updatePost,
    removePost,
    getCommentsByPostId,
  }
}

export let API;

export default () => {
  API = API || create();
};
