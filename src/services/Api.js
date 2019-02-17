const urlBase = process.env.REACT_APP_BACKEND || 'http://localhost:3001';

const create = () => {
  function getCategories() {
    const endpoint = `${urlBase}/categories`;
    console.log("fetching from endpoint", endpoint);
    return fetch(endpoint, {
      headers: { Authorization: "whatever-you-want" },
      credentials: "include"
    })
    .then(res => {
      console.log('res', res);
      return res.text();
    });
  }
  return {
    getCategories,
  }
}

export let API;

export default () => {
  API = API || create();
};
