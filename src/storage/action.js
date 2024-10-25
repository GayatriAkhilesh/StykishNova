import {LOGIN, SIGNOUT} from './constants';

export const login = data => ({
  type: LOGIN,
  payload: {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    mobilenumber: data.mobilenumber,
  },
});

export const signout = data => ({
  type: SIGNOUT,
  payload: {},
});
