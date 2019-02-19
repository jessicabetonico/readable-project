import { createStore, combineReducers } from 'redux';

import authedUserReducer from './authedUser';
import categoriesReducer from './categories';
import postsReducer from './posts';
import middleware from '../middleware';
import postsSortReducer from './postsSort';

const rootReducer = combineReducers({
  authedUser: authedUserReducer,
  categories: categoriesReducer,
  posts: postsReducer,
  postsSort: postsSortReducer,
});

export default () => {
  return createStore(rootReducer, middleware);
};
