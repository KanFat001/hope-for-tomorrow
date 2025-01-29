const express = require('express');
const router = express.Router();
const Donation = require('../models/Donation');

// Get all donations
router.get('/', async (req, res) => {
    try {
        const donations = await Donation.find().populate('donor', 'name email');
        res.json(donations);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Create new donation
router.post('/', async (req, res) => {
    try {
        const { amount, campaign, message, donorId } = req.body;
        
        const donation = new Donation({
            donor: donorId,
            amount,
            campaign,
            message
        });

        await donation.save();
        res.status(201).json(donation);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Get user's donations
router.get('/user/:userId', async (req, res) => {
    try {
        const donations = await Donation.find({ donor: req.params.userId });
        res.json(donations);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
