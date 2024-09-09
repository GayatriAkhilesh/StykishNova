export const validateEmail = email => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(email)) {
    return true;
  } else {
    return false;
  }
};

export const validatePhoneNumber = phonenumber => {
  const phoneNumberRegex = /^\d{10}$/; 

  if (phoneNumberRegex.test(phonenumber)) {
    return true;
  } else {
    return false;
  }
};
