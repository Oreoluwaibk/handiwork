import axios from "axios"

export const host = "http://192.168.1.100:5000"

export const registerUser = async (data) => {
    const response = await axios.post(`${host}/auth/register`, data);

    return Promise.resolve(response);
}

export const loginUser = async (data) => {
    const response = await axios.post(`${host}/auth/login`, data);

    return Promise.resolve(response);
}

export const forgotpassword = async (data) => {
    const response = await axios.post(`${host}/auth/forgot-password`, data);

    return Promise.resolve(response);
}

export const resetpassword = async (data, token) => {
    const response = await axios.post(`${host}/auth/reset-password/${token}`, data);

    return Promise.resolve(response);
}

export const getnotification = async (data) => {
    const response = await axios.get(`${host}/notification`, data);

    return Promise.resolve(response);
}

