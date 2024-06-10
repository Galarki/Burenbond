import {pool} from '../db.js';

export const getEvents = async (req, res) => {
    const query = 'SELECT * FROM evenementen';

    try {
        const [result] = await pool.query(query);
        res.status(201).json({
            status: 'success',
            data: result
        });
    } catch (error) {
        console.error(`Error fetching events: ${error}`);
        return res.status(500).json({
            status: 'error',
            message: 'Internal Server Error'

        });
    }
}

export const getEvent = async (req, res) => {
    const {id} = req.params;
    const query = 'SELECT * FROM evenementen WHERE id = ?';
    const values = [id];

    try {
        const [result] = await pool.query(query, values);
        if (result.length === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'Event not found'
            });
        }
        res.status(201).json({
            status: 'success',
            data: result[0]
        });
    } catch (error) {
        console.error(`Error fetching event: ${error}`);
        return res.status(500).json({
            status: 'error',
            message: 'Internal Server Error'
        });
    }
}

export const createEvent = async (req, res) => {
    const {titel, korte_tekst, lange_tekst, locatie, datum, tijdstip_begin, tijdstip_einde} = req.body;
    const query = 'INSERT INTO evenement (titel, korte_tekst, lange_tekst, locatie, datum, tijdstip_begin, tijdstip_einde) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const values = [titel, korte_tekst, lange_tekst, locatie, datum, tijdstip_begin, tijdstip_einde];
    try {
        const [result] = await pool.query(query, values);
        res.status(201).json({
            status: 'success',
            data: {
                id: result.insertId
            }
        });
    } catch (error) {
        console.error(`Error creating event: ${error}`);
        return res.status(500).json({
            status: 'error',
            message: 'Internal Server Error'
        });
    }
}

export const deleteEvent = async (req, res) => {
    const {id} = req.params;
    const query = 'DELETE FROM evenementen WHERE id = ?';
    const values = [id];

    try {
        const [result] = await pool.query(query, values);
        if (result.affectedRows === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'Event not found'
            });
        }
        res.status(201).json({
            status: 'success',
            message: 'Event deleted'
        });
    } catch (error) {
        console.error(`Error deleting event: ${error}`);
        return res.status(500).json({
            status: 'error',
            message: 'Internal Server Error'
        });
    }
}