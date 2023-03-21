import { db } from "../db.js";

export const getUsers = async (req, res) => {
    try {
        const [result] =  await db.query('SELECT users.id, users.fullname, areas.area FROM users inner join areas on areas.id = users.fk_area WHERE username <> "admin" ORDER BY areas.area');
        console.log(result)

        res.json(result)
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
};