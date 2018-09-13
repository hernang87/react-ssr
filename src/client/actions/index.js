export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_CURRENT_USER = 'FETCH_CURRENT_USER';

export const fetchUsers = () => async (dispatch, getState, api) => {
  const payload = await api.get('/users');
  console.log(payload.data);
  dispatch({
    type: FETCH_USERS,
    payload
  });
}

export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const payload = await api.get('/current_user');

  dispatch({
    type: FETCH_CURRENT_USER,
    payload
  });
}