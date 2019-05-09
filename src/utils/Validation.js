export const isValidMobileNumber = str => {
  const mobileNumber = /^[0-9]*$/;
  if (!str || str.trim().length !== 10 || !mobileNumber.test(str)) {
    return false;
  } else {
    return true;
  }
};

export const isValidEmail = userEmail => {
  const email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.test(userEmail)) {
    console.log("failed");
    return true;
  } else {
    return false;
  }
};
