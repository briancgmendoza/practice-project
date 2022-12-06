// const accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJqdGkiOiI2NjRhMGU4MS03M2E4LTQzYjItOGMxZS1lM2MyMTBiODhhN2UiLCJzdWIiOiJFTlQtRFFONTJTOTBLTDY0IiwiaXNzIjoiRW50cmVnbyBMb2dpc3RpY3MgUEgiLCJpYXQiOjE2NzAyOTMyOTMsImV4cCI6MTY3MDM3OTY5Mywicm9sZXMiOlsiUk9MRV9IVUJNX0FETUlOIl19.om0r1EutI_SQ09fogruZ_NoIMMEexNDUWHx8kFkYe0XgY-QdxwROgJe9zaatIrplVxIfGsWZRQFvLrg7AepSuQ";
export const setToken = (accessToken, refreshToken) => {
    window.localStorage.setItem('entregoTKN', accessToken);
    window.localStorage.setItem('entregTKNRefresh', refreshToken);

    return accessToken;
};

export const getToken = () => window.localStorage.getItem('entregoTKN');

export const getRefreshToken = () => window.localStorage.getItem('entregoTKNRefresh');

export const deleteToken = () => {
    return window.localStorage.clear();
};

export const backToLoginPage = () => {
    deleteToken();
    window.location.href = '/';
};