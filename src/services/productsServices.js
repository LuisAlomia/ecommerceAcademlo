import axios from "axios";

const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/products";

export const getByIdProduct = (id) => {
  return axios.get(`${URL}/${id}`).then((resp) => resp.data.data.product);
};

export const getByFilterProducts = () => {
  return axios
    .get(`${URL}/categories`)
    .then((resp) => resp.data.data.categories);
};
