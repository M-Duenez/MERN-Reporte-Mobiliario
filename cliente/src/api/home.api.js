import axios from "axios";

export const getUsers = async () => await axios.get('http://localhost:4000/users');