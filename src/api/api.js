import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "92e9b523-e1bd-49e0-bf4e-fb08cbcdec46"
    }
});

export const getUsersAPI = async (currentPage, pageSize) => {
    const response = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
    return response.data;
};

export const getProfileAPI = async userId => {
    const response = await instance.get(`profile/${userId}`);
    return response.data;
};

export const authMeAPI = async () => {
    const response = await instance.get('auth/me');
    return response.data;
};

export const followAPI = async userId => {
    const response = await instance.post(`follow/${userId}`);
    return response.data;
}

export const unfollowAPI = async userId => {
    const response = await instance.delete(`follow/${userId}`);
    return response.data;
}