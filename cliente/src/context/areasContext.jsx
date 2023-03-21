import { createContext, useContext, useState } from "react"
import { getAreasRequest, DeleteArea, CrearArea } from '../api/areas.api'
import { getUsers } from '../api/home.api'
import { LoginUser } from '../api/login.api'
import  axios  from "axios";



export const AreaContext = createContext()

export const useAreas = () => {
    const context = useContext(AreaContext)
   
    if (!context) {
        throw new Error('useArea es utilizado con AreaContextProvider');
    }
    return context;
}

export const AreaContextProvider = ({ children }) => {
    
    const [areas, setareas] = useState([])
    const [users, setusers] = useState([])
    const [login, setlogin] = useState({login : false, username : "miguel"})

    async function loadAreas() {
        const resp = await getAreasRequest()
        setareas(resp.data)
    }
    async function loadUsers() {
        const resp = await getUsers()
        setusers(resp.data)
    }

    const Delete = async (id) => {
        try {
            const resp = await DeleteArea(id)
            setareas(areas.filter(area => area.id !== id))
            console.log(resp)
        } catch (error) {
            console.log(error);
        }
    }
    const Crear = async (value) => {
        try {
            const response = await CrearArea(value)
            console.log(response)
        } catch (error) {
            console.error(error)
        }
    }
    const Login = async (value) =>{
        try {
            const resp = await LoginUser(value)
            //const resp = await axios.post('http://localhost:4000/login', value)
            console.log(resp.data)
            if (resp.data.msg === 'correcto') {
                setlogin(true, resp.data.result[0])
                return resp.data //console.log(resp.data.result[0])
            }
            else{
                setlogin(false)
                return resp.data
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        < AreaContext.Provider value={{ users, areas, login, loadUsers, loadAreas, Delete, Crear, Login }}> 
            {children}
        </AreaContext.Provider >
    )
}