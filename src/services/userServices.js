import axios from "axios";

const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/users";

export const loginServices = (data) => {
  return axios.post(`${URL}/login`, data).then((resp) => resp.data.data);
};

export const registerServices = (data) => {
  return axios.post(URL, data).then((resp) => resp.data.data);
};
