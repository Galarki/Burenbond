import {pool} from '../db.js';

export const getMessages = async (req, res) => {
    const query = 'SELECT * FROM messages';

    try {
        const result = await pool.query(query);
        res.status(201).json({
            status: 'success',
            data: result[0]
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Internal Server Error'

        });
    }
}
export const createMessage = async (req, res) => {
    const {firstname, name, email, message} = req.body;

    const query = 'INSERT INTO messages (voornaam, achternaam, email, bericht) VALUES (?, ?, ?, ?)';
    const values = [firstname, name, email, message];
    try {
        const [result] = await pool.query(query, values);
        res.status(201).json({
            status: 'success',
            data: {
                id: result.insertId
            }
        });
    } catch (error) {
        console.error(`Error creating cat: ${error}`);
        return res.status(500).json({
            error: 'error',
            message: 'Internal Server Error'
        });
    }
}