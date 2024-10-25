import {LOGIN, SIGNOUT} from './constants';

const initialState = {
  isLoggedIn: false,
  firstName: '',
  lastName: '',
  email: '',
  mobilenumber: '',
};

export const stylishNovaReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      const {firstName, lastName, email, mobilenumber} = action.payload;
      return {
        ...state,
        firstName: firstName,
        lastName: lastName,
        email: email,
        mobilenumber: mobilenumber,
        isLoggedIn: true,
      };
    case SIGNOUT:
      return {
        ...state,
        firstName: '',
        lastName: '',
        email: '',
        mobilenumber:'',
        isLoggedIn: false,
      };

    default:
      break;
  }
};
