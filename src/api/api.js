import axios from "axios";

axios.defaults.baseURL = "https://classibazaar.com.au/";

const login = (data) => {
  return axios.post(`api/v2/authenticate`, data);
};
const socialLogin = (data) => {
  console.log(data, "datatest");
  return axios.post(`api/v2/social_authenticate`, data);
};
// const register = (data) => {
//   return axios.post(`http://staging.classibazaar.com.au/api/v2/signup`, data);
// };

const register = (data) => {
  return axios.post(`http://localhost/projects/admin-bus/api/register`, data);
};

export { login, register, socialLogin };
export { axios };
