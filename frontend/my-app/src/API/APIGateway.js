import axios from 'axios';
const API_URL = 'http://localhost:3004'

// Service-Account
export const registerAccount = (email, password, name, phoneNumber, address) => axios
    .post(`${API_URL}/accounts`, { email, password, name, phoneNumber, address });

export const loginAccount = (email, password) => axios.post(`${API_URL}/accounts/login`,
     { email, password });

export const getProfile = (idProfie) => axios.get(`${API_URL}/accounts/profile/${idProfie}`);

// Service-Order
export const ordersByProfile = (idProfile) => axios.get(`${API_URL}/orders/${idProfile}`);

export const createOrder = (idProfile) => axios.post(`${API_URL}/orders`);

export const changeStateOrder = (id, state) => axios.put(`${API_URL}/orders/${id}`, state);

export const addProductOrder = (id, product) => axios.put(`${API_URL}/orders/${id}`, product);

// Service-Store
export const storeByCity = (city) => axios.get(`${API_URL}/stores/${city}`);

export const getLogoStore = (id) => axios.get(`${API_URL}/stores/${id}`);

export const getProductsByStore = (id) => axios.get(`${API_URL}/stores/products/${id}`);

export const getImageProduct = (id) => axios.get(`${API_URL}/stores/products/${id}/image`);

// Services-Ranking
export const getRatingsByStore = (id) => axios.get(`${API_URL}/ratings/stores/${id}`);

export const createRating = (idStore, idOrder, numStars, comment) => axios
    .post(`${API_URL}/ratings`,{ idStore, idOrder, numStars, comment });