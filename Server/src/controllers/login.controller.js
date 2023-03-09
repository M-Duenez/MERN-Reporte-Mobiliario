import { db } from "../db.js";
import helpers from "../lib/helpers.js";


export const LoginUser = async (req, res) => {
    try {
        const {username, password} = req.body;
        console.log(req.body)
        if (username !== "")  {

            /*const [result] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
            result.forEach(async user =>{
                const valid = await helpers.matchPassword(password, user.password)
                console.log(valid);
                return res.json(valid)
            })*/
            if (password !== "") {
                const [result] =  await db.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password]);
                console.log(result)
                if (result.length !== 0) {
                    return res.json({msg: 'correcto', result})
                }

                return res.json({'msg': 'usuario incorrecto'})
            }
            return res.json({'msg' : 'La contraseña dede ser correcta'})
        }
        return res.json({'msg' : 'El USERNAME debe de ser valido'})
        
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}; 