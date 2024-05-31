const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const nodemailer = require('nodemailer');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Replace with your email configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'wpnayanray@gmail.com',
        pass: 'MuN121Rak'
    }
});

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        // Broadcast message to all clients
        wss.clients.forEach((client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });

        // Send email notification
        const mailOptions = {
            from: 'wpnayanray@gmail.com',
            to: 'nayanroyjsr22@gmail.com',
            subject: 'New Chat Message',
            text: message
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Email sent: ' + info.response);
        });
    });

    ws.send('Welcome to the chat!');
});

const PORT = 3001; // Changed port number to 3001
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
