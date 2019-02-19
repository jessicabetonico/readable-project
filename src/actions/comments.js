import { API } from '../services/Api';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';

function receiveComments(comments, postId) {
  return {
    type: RECEIVE_COMMENTS,
    comments,
    postId,
  };
}

export function handleReceiveComments(postId) {
  return (dispatch) => {
    return API.getCommentsByPostId(postId)
      .then((comments) => {
        dispatch(receiveComments(comments, postId));
      })
  };
}
