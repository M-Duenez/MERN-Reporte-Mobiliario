import axios from 'axios'

export const getAreasRequest = async () => await axios.get('http://localhost:4000/areas')

export const CrearArea = async (area) => await axios.post('http://localhost:4000/areas', area)

export const DeleteArea = async (id) => await axios.delete(`http://localhost:4000/areas/${id}`)