import { API } from '../services/Api';
import { receiveCategories } from './categories';
import { receivePosts } from './posts';
import { setAuthedUser } from './authedUser';

const AUTHED_USER = 'Jéssica';

export function handleInitialData() {
  return (dispatch) => {
    return API.getInitialData()
      .then(({ categories, posts }) => {
        dispatch(receiveCategories(categories));
        dispatch(receivePosts(posts));
        dispatch(setAuthedUser(AUTHED_USER));
      });
  }
}