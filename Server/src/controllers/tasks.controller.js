//import  {db}  from "../database.js";
import  {db}  from "../db.js";

export const getTasks = async (req, res) => {
    const [rows] =  await db.query('SELECT * FROM areas');
    console.log(rows)

    res.send('hola mundo')
}; 

export const getTaskID = (req, res) => res.send('Un resultado'); 

export const postTasks = (req, res) => {
    res.send('creado')
}
export const putTasks = (req, res) =>{
    res.send('actualizado')
}; 
export const deleteTasks = (req, res) =>{
    res.send('eliminado')
}; 