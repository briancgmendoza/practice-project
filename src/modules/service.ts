import request from '../utils/api';

export const getProfile = (id: string) => request(`hubm/users/profile/${id}`);

export const register = (body: object) => {
    return request('users/account/signup', { method: 'POST', body });  
};

export const login = (body: object) => 
    request('users/auth/login', { method: 'POST', body });

export const googleLogin = (body: object) => 
    request('hubm/users/auth/google', { method: 'POST', body });

export const refreshToken = (body: object) => 
    request('users/auth/app/authenticate', { method: 'POST', body });
