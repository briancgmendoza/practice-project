export const setToken = (accessToken: any, refreshToken: any) => {
  window.localStorage.setItem('entregoTKN', accessToken);
  window.localStorage.setItem('entregoTKNRefresh', refreshToken);

  return accessToken;
};

export const getToken = () => window.localStorage.getItem('entregoTKN');

export const getRefreshToken = () =>
  window.localStorage.getItem('entregoTKNRefresh');

export const deleteToken = () => {
  return window.localStorage.clear();
  // return window.localStorage.removeItem("entregoTKN");
};

export const backToLoginPage = () => {
  deleteToken();
  window.location.href = '/';
};
