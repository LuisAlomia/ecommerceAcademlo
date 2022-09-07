import axios from "axios";

URL = "https://ecommerce-api-react.herokuapp.com/api/v1/cart";

export const getCart = async (token) => {
  const resp = await axios.get(URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return resp.data.data.cart.products;
};

export const postCart = (product, token) => {
  return axios
    .post(URL, product, { headers: { Authorization: `Bearer ${token}` } })
    .then((resp) => resp.data);
};

export const deleteCart = async (id, token) => {
  const resp = await axios.delete(`${URL}/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return resp;
};
