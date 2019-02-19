import { API } from '../services/Api';
import uuid from 'uuid';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const ADD_POST = 'ADD_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const REMOVE_POST = 'REMOVE_POST';

export function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts,
  }
}

function addPost(post) {
  return {
    type: ADD_POST,
    post,
  }
}

export function handleAddPost({ title, body, category }) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    return API.savePost({
      id: uuid(),
      title,
      body,
      category,
      timestamp: Date.now(),
      author: authedUser,
    })
    .then((post) => {
      dispatch(addPost(post));
    });
  };
}

function updatePost(postId, post) {
  return {
    type: UPDATE_POST,
    postId,
    post,
  }
}

export function handleUpdatePost(postId, post) {
  return (dispatch) => {
    return API.updatePost(postId, post)
      .then((post) => {
        dispatch(updatePost(postId, post));
      });
  };
}

function removePost(postId) {
  return {
    type: REMOVE_POST,
    postId,
  }
}

export function handleRemovePost(postId) {
  return (dispatch) => {
    return API.removePost(postId)
      .then(() => {
        dispatch(removePost(postId))
      })
  };
}
