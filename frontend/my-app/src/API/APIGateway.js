import axios from 'axios';
const API_URL = 'http://localhost:3004'

// Service-Account
export const registerAccount = (email, password, name, phoneNumber, address) => axios
    .post(`${API_URL}/accounts`, { email, password, name, phoneNumber, address });

export const loginAccount = (email, password) => axios.post(`${API_URL}/accounts/login`,
     { email, password });

export const getProfile = (idProfile) => axios.get(`${API_URL}/accounts/profile/${idProfile}`);

export const updateProfile = (idProfile, data) => axios.put(`${API_URL}/accounts/profile/${idProfile}`, data);

// Service-Order
export const getOrdersByIds = (ids) => axios.post(`${API_URL}/orders/byIds`, { ids });

export const ordersByProfile = (idProfile) => axios.get(`${API_URL}/orders/${idProfile}`);

export const createOrder = (idProfile, productList, totalPrice, idStore) => axios.post(`${API_URL}/orders`, { idProfile, productList, totalPrice, idStore }); //se entrega product list de id de productos -nelson

export const changeStateOrder = (id, state) => axios.put(`${API_URL}/orders/${id}`, state);

export const addProductOrder = (id, product) => axios.put(`${API_URL}/orders/${id}`, product);

// Service-Store
export const getStoreById = (id) => axios.get(`${API_URL}/stores/${id}`);

export const storeByCity = (city) => axios.get(`${API_URL}/stores/${city}`);

export const getLogoStore = (id) => axios.get(`${API_URL}/stores/${id}`);

export const getProductById = (id) => axios.get(`${API_URL}/stores/product/${id}`);

export const getProductsByStore = (id) => axios.get(`${API_URL}/stores/product/${id}`);

export const getImageProduct = (id) => axios.get(`${API_URL}/stores/product/${id}/image`);

// Services-Ranking
export const getRatingsByStore = (id) => axios.get(`${API_URL}/ratings/stores/${id}`);

export const createRating = (idStore, idOrder, numStars, comment) => axios
    .post(`${API_URL}/ratings`,{ idStore, idOrder, numStars, comment });