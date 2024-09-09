export const validatePhone = phone => {
  if (/[a-zA-Z]/.test(phone)) {
    return false;
  } else {
    if (/[^\d\-+]/.test(phone)){
        return false;
    } else{
        return true;
    }
  }
};

export const validateOtp = otp => {
  return !/[!@#$*()_+\-=[\]{};':"\\|,.<>/?]/.test(otp) 
}
