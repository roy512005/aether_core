const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Admin = require('./models/Admin');
const ContactInfo = require('./models/ContactInfo');
const Project = require('./models/Project');
const Testimonial = require('./models/Testimonial');

dotenv.config();

const importData = async () => {
    try {
        await Admin.deleteMany();
        await ContactInfo.deleteMany();
        await Project.deleteMany();
        await Testimonial.deleteMany();

        await Admin.create({
            email: 'admin@cybertech.com',
            password: 'cybertech@54321',
        });

        await ContactInfo.create({
            email: 'contact@cybertech.com',
            phone: '+1 (555) 012-3456',
            address: '123 Cyber Street, Tech City, TC 90210',
            linkedin: 'https://linkedin.com',
            twitter: 'https://twitter.com',
            instagram: 'https://instagram.com',
        });

        await Project.insertMany([
            { title: 'SmartPay', category: 'App Development', image: 'linear-gradient(45deg, #00f3ff, #bc13fe)' },
            { title: 'EcoTrack', category: 'Web Development', image: 'linear-gradient(45deg, #00ff9d, #00f3ff)' },
            { title: 'NeonDash', category: 'UI/UX Design', image: 'linear-gradient(45deg, #bc13fe, #ff0055)' },
            { title: 'CyberSecurity AI', category: 'Security', image: 'linear-gradient(45deg, #ff0055, #ffcc00)' },
            { title: 'CloudSync', category: 'Cloud Computing', image: 'linear-gradient(45deg, #00f3ff, #0055ff)' },
        ]);

        await Testimonial.insertMany([
            { name: 'Alice Johnson', role: 'CEO, TechStart', message: 'CyberTech transformed our business with their innovative solutions.', avatar: '' },
            { name: 'David Lee', role: 'Founder, Appify', message: 'Incredible attention to detail and futuristic design.', avatar: '' },
            { name: 'Sarah Connor', role: 'CTO, Skynet', message: 'The best AI integration services we have ever used.', avatar: '' },
            { name: 'Michael Chen', role: 'Director, FutureVision', message: 'Their team is professional, fast, and creative.', avatar: '' },
            { name: 'Emily Davis', role: 'Manager, GreenTech', message: 'Highly recommended for any web development needs.', avatar: '' },
        ]);

        console.log('Data Imported!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

const runSeeder = async () => {
    await connectDB();
    await importData();
};

runSeeder();
