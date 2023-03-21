import  axios  from "axios";

export const LoginUser = async (value) =>  await axios.post('http://localhost:4000/login', value)