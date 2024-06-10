import {pool} from "../db.js";

export const users = async (req, res) => {
    const {username, password} = req.body;
    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
    const values = [username, password];
    try {
        const [result] = await pool.query(query, values);
        res.status(201).json({
            status: 'success',
            data: result[0]
        });
    } catch (error) {
        console.error(`Error logging in: ${error}`);
        return res.status(500).json({
            status: 'error',
            message: 'Internal Server Error'
        });
    }
}

