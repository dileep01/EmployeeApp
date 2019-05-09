export const isValidPassword = str => {
  if (str.trim().length < 6) {
    return false;
  } else {
    return true;
  }
};

export const isValidEmail = userEmail => {
  const email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.test(userEmail)) {
    return true;
  } else {
    return false;
  }
};
