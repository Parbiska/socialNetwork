import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "71ae5471-7b1e-41d2-b9a9-2a6abf27e06a"
    }
});

export const usersAPI = {
    getUsers (currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`);
    },
    follow (userId) {
        return instance.post(`follow/${userId}`);
    },
    
    unfollow (userId) {
        return instance.delete(`follow/${userId}`);
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },

    updateStatus(status) {
        return instance.put('profile/status', { status });
    },

    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile)
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },

    saveProfile(profile) {
        return instance.put('profile', profile);
    }
};

export const authAPI = {
    me() {
        return instance.get('auth/me')
    },
    
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, { email, password, rememberMe, captcha });
    },

    logout() {
        return instance.delete(`auth/login`);
    },
};

export const securityAPI = {
    getCaptcha() {
        return instance.get('security/get-captcha-url');
    },
};