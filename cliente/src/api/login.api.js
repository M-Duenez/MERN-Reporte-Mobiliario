import  axios  from "axios";

export const LoignUser = async (value) =>  await axios.post('http://localhost:4000/login', value)