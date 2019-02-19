export const SET_POST_SORT = 'SET_POST_SORT';

export function setSortPosts(sort) {
  return {
    type: SET_POST_SORT,
    sort,
  };
}