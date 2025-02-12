import axios from "axios"

export const host = "http://192.168.1.100:5000";

export const getAllCategories = async () => {
    const response = await axios.get(`${host}/category`);

    return Promise.resolve(response);
}//

export const getOneCategories = async (id) => {
    const response = await axios.get(`${host}/category/${id}`);

    return Promise.resolve(response);
}

export const sendSupport = async (data) => {
    const response = await axios.post(`${host}/support`, data);

    return Promise.resolve(response);
}

