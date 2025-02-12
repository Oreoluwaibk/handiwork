import axios from "axios"

export const host = "http://192.168.1.100:5000";

export const updateUserProfile = async (data) => {
    const response = await axios.put(`${host}/user/update_profile`, data);

    return Promise.resolve(response);
}

export const updateUserType = async () => {
    const response = await axios.put(`${host}/user/update_usertype`, {});

    return Promise.resolve(response);
}
