import axios from "axios"

export const host = "http://192.168.1.100:5000";

export const getVendorNearby = async () => {
    const response = await axios.get(`${host}/vendor/nearby`);

    return Promise.resolve(response);
}

export const getVendorDetails = async (id) => {
    const response = await axios.get(`${host}/vendor/${id}`);

    return Promise.resolve(response);
}
