let user;

const setUser = (inputUser) => {
  if (localStorage.userSave) {
    user = JSON.parse(localStorage.getItem("userSave"));
  } else {
    user = inputUser;
    localStorage.userSave = JSON.stringify(user);
  }
};

const verificarUser = () => {
  if (localStorage.userSave)
    user = JSON.parse(localStorage.getItem("userSave"));
  if (user) {
    return true;
  }
  return false;
};

export { setUser, verificarUser};