require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');
const Event = require('./models/Event');
const Donation = require('./models/Donation');

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const seedDatabase = async () => {
    try {
        // Clear existing data
        await User.deleteMany();
        await Event.deleteMany();
        await Donation.deleteMany();

        // Create admin user
        const admin = await User.create({
            name: 'Admin User',
            email: 'admin@hopefortomorrow.org',
            password: 'admin123',
            role: 'admin'
        });

        // Create regular users
        const user1 = await User.create({
            name: 'John Doe',
            email: 'john@example.com',
            password: 'password123'
        });

        const user2 = await User.create({
            name: 'Jane Smith',
            email: 'jane@example.com',
            password: 'password123'
        });

        // Create events
        const events = await Event.create([
            {
                title: 'Community Education Workshop',
                description: 'Teaching basic computer skills to underprivileged children',
                date: new Date('2024-02-15'),
                location: 'Community Center, Downtown',
                category: 'education',
                maxVolunteers: 10,
                image: 'images/events/education-workshop.jpg'
            },
            {
                title: 'Health Camp',
                description: 'Free medical checkup and consultation for elderly',
                date: new Date('2024-02-20'),
                location: 'City Hospital',
                category: 'health',
                maxVolunteers: 15,
                image: 'images/events/health-camp.jpg'
            },
            {
                title: 'Tree Planting Drive',
                description: 'Join us in making our city greener',
                date: new Date('2024-03-01'),
                location: 'City Park',
                category: 'environment',
                maxVolunteers: 20,
                image: 'images/events/tree-planting.jpg'
            }
        ]);

        // Create donations
        await Donation.create([
            {
                donor: user1._id,
                amount: 100,
                campaign: 'Education Fund',
                message: 'Happy to help!',
                paymentStatus: 'completed'
            },
            {
                donor: user2._id,
                amount: 250,
                campaign: 'Healthcare Initiative',
                message: 'Keep up the good work',
                paymentStatus: 'completed'
            }
        ]);

        console.log('Database seeded successfully');
        process.exit(0);
    } catch (err) {
        console.error('Error seeding database:', err);
        process.exit(1);
    }
};

seedDatabase();
