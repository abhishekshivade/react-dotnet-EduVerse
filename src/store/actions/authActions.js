import { LOGIN_SUCCESS, LOGOUT } from '../types/authTypes';

// Action to handle login
export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

// Action to handle logout
export const logout = () => ({
  type: LOGOUT,
});
