//import  {db}  from "../database.js";
import  {db}  from "../db.js";

export const getPosts = async (req, res) => {
    const [rows] =  await db.query('SELECT * FROM areas');
    console.log(rows)

    res.send('hola mundo')
}; 

export const postPosts = (req, res) => {
    res.send('creado')
}
export const putPosts = (req, res) =>{
    res.send('actualizado')
}; 
export const deletePosts = (req, res) =>{
    res.send('eliminado')
}; 
export const getPostID = (req, res) => res.send('Un resultado'); 