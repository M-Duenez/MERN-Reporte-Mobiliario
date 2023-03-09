import { createContext, useContext, useState } from "react"
import { getAreasRequest, DeleteArea, CrearArea } from '../api/areas.api'
import { LoignUser } from '../api/login.api'
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
    const [login, setlogin] = useState({login : false, username : "miguel"})

    async function loadAreas() {
        const resp = await getAreasRequest()
        console.log(resp.data)
        setareas(resp.data)
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
            const resp = await LoignUser(value)
            //const resp = await axios.post('http://localhost:4000/login', value)
            console.log(resp.data)
            if (resp.data.msg === 'correcto') {
                setlogin(true)
                return console.log(resp.data.result[0])
            }
            else{
                setlogin(false)
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        < AreaContext.Provider value={{ areas, login, loadAreas, Delete, Crear, Login }}> 
            {children}
        </AreaContext.Provider >
    )
}