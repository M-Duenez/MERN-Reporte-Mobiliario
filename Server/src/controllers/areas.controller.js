//import  {db}  from "../database.js";
import  {db}  from "../db.js";

export const getAreas = async (req, res) => {
    try {
        const [result] =  await db.query('SELECT * FROM areas');
        console.log(result)

        res.json(result)
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}; 

export const getAreaID = async (req, res) => {
    try {
        const id = req.params.id

        const [result] = await db.query('SELECT * FROM areas WHERE id = ?', [id])

        if (result.length === 0) 
            return res.status(404).json({msg: 'Area no Encontrada'})
        
        console.log(result[0])
        res.json(result); 
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}
export const postAreas = async (req, res) => {
    try {
        console.log(req.body);
        const { area} = req.body;
        const newarea = {
            area
        }
        
        await db.query('INSERT INTO areas set ?', [newarea]);
        res.json({msg:'creado'})
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}
export const putAreas = (req, res) =>{
    res.send('actualizado')
}; 
export const deleteAreas = async (req, res) =>{
    try {
        const id = req.params.id

        const [result] = await db.query('DELETE FROM areas WHERE id = ?', [id])

        if (result.affectedRows === 0) 
            return res.status(404).json({msg: 'Area no Encontrada'})
        
        return res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}; 