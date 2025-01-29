const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// Get all events
router.get('/', async (req, res) => {
    try {
        const events = await Event.find().populate('volunteers', 'name email');
        res.json(events);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Create new event
router.post('/', async (req, res) => {
    try {
        const { title, description, date, location, category, maxVolunteers, image } = req.body;
        
        const event = new Event({
            title,
            description,
            date,
            location,
            category,
            maxVolunteers,
            image
        });

        await event.save();
        res.status(201).json(event);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Register for event
router.post('/:eventId/volunteer', async (req, res) => {
    try {
        const { userId } = req.body;
        const event = await Event.findById(req.params.eventId);
        
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        if (event.volunteers.length >= event.maxVolunteers) {
            return res.status(400).json({ message: 'Event is full' });
        }

        if (event.volunteers.includes(userId)) {
            return res.status(400).json({ message: 'Already registered' });
        }

        event.volunteers.push(userId);
        await event.save();
        
        res.json(event);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
