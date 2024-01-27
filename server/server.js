
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

const app = express();
// const PORT = process.env.PORT || 3001;  
// This is the only declaration you need

const corsoptions= {
    origin:
        process.env.NODE_ENV === "production"
        ? process.env.CLIENT
        : "http://localhost:3001"
}

dotenv.config();

// Enable CORS for all routes
app.use(cors(corsoptions));

app.use(bodyParser.json());

app.post('/contact', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASSWORD,
            },
            authMethod: 'PLAIN',
        });
        
        
        // Composing the email
        const mailOptions = {
            from: email, // the sender's email
            to: 'odeh.ahmad67gt@gmail.com', // my email for receiving
            subject: subject || 'New Contact Form my Portfolio',
            text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        };

        // to Send the email
        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
});


app.listen(3001, () => {
    console.log(`Server is running on port ${3001}`);
});
