import {pool} from '../db.js';

export const getMessages = async (req, res) => {
    const query = 'SELECT * FROM messages';

    try {
        const [result] = await pool.query(query);
        res.status(201).json({
            status: 'success',
            data: result
        });
    } catch (error) {
        console.error(`Error fetching messages: ${error}`);
        return res.status(500).json({
            status: 'error',
            message: 'Internal Server Error'

        });
    }
}
export const getMessage = async (req, res) => {
    const {id} = req.params;
    const query = 'SELECT * FROM messages WHERE id = ?';
    const values = [id];

    try {
        const [result] = await pool.query(query, values);
        if (result.length === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'Message not found'
            });
        }
        res.status(201).json({
            status: 'success',
            data: result[0]
        });
    } catch (error) {
        console.error(`Error fetching message: ${error}`);
        return res.status(500).json({
            status: 'error',
            message: 'Internal Server Error'
        });
    }

}

export const createMessage = async (req, res) => {
    const {firstname, name, email, message} = req.body;
    const date = new Date();
    const query = 'INSERT INTO messages (voornaam, achternaam, email, bericht, datum) VALUES (?, ?, ?, ?, ?)';
    const values = [firstname, name, email, message, date];
    try {
        const [result] = await pool.query(query, values);
        res.status(201).json({
            status: 'success',
            data: {
                id: result.insertId
            }
        });
    } catch (error) {
        console.error(`Error creating message: ${error}`);
        return res.status(500).json({
            error: 'error',
            message: 'Internal Server Error'
        });
    }
}

export const deleteMessage = async (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM messages WHERE ID = ?';
    const values = [id];

    try {
        const [result] = await pool.query(query, values);
        if (result.affectedRows === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'Message not found'
            });
        }
        res.status(200).json({
            status: 'success',
            data: 'Message deleted successfully'
        });
    } catch (error) {
        console.error(`Error deleting message: ${error}`);
        return res.status(500).json({
            status: 'error',
            message: 'Internal Server Error'
        });
    }
}

