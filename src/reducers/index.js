import { createStore, combineReducers } from 'redux';

import authedUserReducer from './authedUser';
import categoriesReducer from './categories';
import postsReducer from './posts';
import middleware from '../middleware';

const rootReducer = combineReducers({
  authedUser: authedUserReducer,
  categories: categoriesReducer,
  posts: postsReducer,
});

export default () => {
  return createStore(rootReducer, middleware);
};
