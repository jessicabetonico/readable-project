import { RECEIVE_POSTS, ADD_POST, UPDATE_POST, REMOVE_POST, VOTE_UPDATE_POST } from '../actions/posts';
import { RECEIVE_COMMENTS } from '../actions/comments';

export default function postsReducer(state = {}, action) {
  switch(action.type) {
    case RECEIVE_POSTS:
      const mapPostId = action.posts.reduce((accumulator, post) => ({
        ...accumulator,
        [post.id]: post,
      }), {});
      return {
        ...mapPostId,
      };
    case ADD_POST:
      const { post } = action;
      return {
        ...state,
        [post.id]: {
          ...post,
        },
      };
    case UPDATE_POST:
      const { postId } = action;
      return {
        ...state,
        [postId]: {
          ...action.post,
        }
      };
    case REMOVE_POST:
      const { [action.postId]: omit, ...res } = state;
      return {
        ...res,
      };
    case RECEIVE_COMMENTS:
      return {
        ...state,
        [action.postId]: {
          ...state[action.postId],
          comments: action.comments,
        },
      };
    case VOTE_UPDATE_POST:
      return {
        ...state,
        [action.postId]: {
          ...state[action.postId],
          voteScore: action.voteScore,
        }
      };
    default:
      return {
        ...state,
      }
  }
}
