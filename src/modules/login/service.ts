const API_URL = import.meta.env.VITE_REACT_APP_API_URL

export const login = async (body: object) => {
    const parseObj = JSON.stringify(body);
    return await fetch(`${API_URL}users/auth/login`, { method: 'POST', body: parseObj });
}

export const googleLogin = async (body: object) => {
    const parseObj = JSON.stringify(body);
    return await fetch(`${API_URL}hubm/users/auth/google`, { method: 'POST', body: parseObj });
}

export const refreshToken = async (body: object) => {
    const parseObj = JSON.stringify(body);
    await fetch(`${API_URL}users/auth/app/authenticate`, { method: 'POST', body: parseObj });
}
    