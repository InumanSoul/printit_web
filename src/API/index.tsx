import axios from "axios";
import { url, apiHeaders } from "../config";

const user = JSON.parse(localStorage.getItem("user") || "{}");

export const doLogin = (form: any) => {
  axios
  .post(url.apiUrl + "login", form)
  .then((res) => {
    localStorage.setItem("app_token", res.data.success.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));
    return 'Logged in!';
  })
  .catch((error) => {
    console.log(error);
    return error;
  });
}


export const getItems = async() => {
  let empresa = {'Empresa': user.empresa_id};
  apiHeaders.headers = {...apiHeaders.headers, ...empresa}

  const res = await axios.get(url.apiUrl + "items", apiHeaders);
  return res.data;
}

export const getSales = async(link:string) => {
  let empresa = {'Empresa': user.empresa_id};
  apiHeaders.headers = {...apiHeaders.headers, ...empresa}
  if (link === '') {
    const res = await axios.get(url.apiUrl + "sales", apiHeaders);
    return res.data;
  }
  if (link !== '') {
    const res = await axios.get(link, apiHeaders);
    return res.data;
  }
  const res = await axios.get(link, apiHeaders);
  return res.data;
}