import { SET_POST_SORT } from '../actions/postsSort';

export default function postsSortReducer(state = '', action) {
  switch(action.type) {
    case SET_POST_SORT:
      return action.sort;
    default:
      return state;
  }
}
