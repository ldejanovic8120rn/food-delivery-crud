const express = require('express');
const { sequelize, Comments, Users, Restaurants } = require('./models');
const path = require('path');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const http = require('http');
const { Server } = require("socket.io");

const users = require('./routes/users_route');
const restaurants = require('./routes/restaurants_route');
const foods = require('./routes/foods_route');
const comments = require('./routes/comments_route');

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'https://food-delivery-gui.herokuapp.com',
        methods: ['GET', 'POST'],
        credentials: true
    },
    allowEIO3: true
});

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(express.json());
app.use(cors(corsOptions));

app.use('/admin', users);
app.use('/admin', restaurants);
app.use('/admin', foods);
app.use('/admin', comments);



function authSocket(comment, next) {
    if (comment[1].token == null) {
        next(new Error("Not authenticated"));
    } else {
        jwt.verify(comment[1].token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) {
                next(new Error(err));
            } else {
                comment[1].user = user;
                next();
            }
        });
    }
}

io.on('connection', socket => {
    socket.use(authSocket);

    socket.on('comment', comment => {
        Comments.create({
            user_id: comment.user.id,
            restaurant_id: comment.restaurant_id,
            rate: 10,
            content: comment.content,
            likes: 0,
            posted: new Date()
        })
            .then(row => {
                Comments.findOne({ where: { id: row.id }, include: ['user'] })
                    .then(cmt => io.emit('comment', JSON.stringify(cmt)))
            })
            .catch(err => res.status(500).json(err));
    });

    socket.on('error', err => socket.emit('error', err.message));
});



server.listen({ port: process.env.PORT || 8081 }, async () => {
    await sequelize.authenticate();
    console.log('Crud server started!');
});
