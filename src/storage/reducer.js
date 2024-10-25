import {LOGIN, SIGNOUT, UPDATEPROFILE} from './constants';

const initialState = {
  isLoggedIn: false,
  userId: '',
  firstName: '',
  lastName: '',
  email: '',
  mobilenumber: '',
  profileimage: '',
};
export const stylishNovaReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        userId: action.payload.userId,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        mobilenumber: action.payload.mobilenumber,
        profileimage: action.payload.profileimage,
        isLoggedIn: true,
      };
    case SIGNOUT:
      return {
        ...state,
        userId: '',
        firstName: '',
        lastName: '',
        email: '',
        mobilenumber: '',
        profileimage: '',
        isLoggedIn: false,
      };
    case UPDATEPROFILE:
      return {
        ...state,

        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        mobilenumber: action.payload.mobilenumber,
        profileimage: action.payload.profileimage,
      };

    default:
      return state;
  }
};
