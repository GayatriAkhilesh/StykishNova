import {LOGIN, SIGNOUT, UPDATEPROFILE} from './constants';

export const login = data => ({
  type: LOGIN,
  payload: {
    userId: data.userId,
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    mobilenumber: data.mobilenumber,
    profileImage: data.profileImage,
  },
});

export const signout = data => ({
  type: SIGNOUT,
  payload: {},
});

export const updateProfile = data => ({
  type: UPDATEPROFILE,
  payload:{
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    mobilenumber: data.mobilenumber,
    profileImage: data.profileImage,
  }
})
