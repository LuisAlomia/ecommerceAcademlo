import axios from "axios";

const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/purchases";

export const getPurchase = (token) => {
  return axios
    .get(URL, { headers: { Authorization: `Bearer ${token}` } })
    .then((resp) => resp.data.data.purchases);
};

export const postPurchase = (data, token) => {
  return axios
    .post(URL, data, { headers: { Authorization: `Bearer ${token}` } })
    .then((resp) => resp);
};
