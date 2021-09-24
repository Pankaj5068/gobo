import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = "http://localhost:3031";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    //alert("No Network, Please Connect to Internet");
    toast.error("No Network, Please Connect to Internet");
  }
  return Promise.reject(error);
});

async function setJwt() {
  const jst = localStorage.getItem("token");
  axios.defaults.headers["admin_token"] = jst;
}

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};

export default http;
