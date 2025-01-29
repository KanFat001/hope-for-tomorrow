const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    image: String,
    category: {
        type: String,
        enum: ['education', 'health', 'environment', 'community'],
        required: true
    },
    volunteers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    maxVolunteers: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['upcoming', 'ongoing', 'completed'],
        default: 'upcoming'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Event', eventSchema);
