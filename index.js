const socketIO = require('socket.io');
const path = require('path');
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = require('http').Server(app);
const io = new Server(server);

app.use(express.static("public"));

io.on("connection", socket => {
    console.log("New client connected");
    socket.on("kirim-pesan", pesan => {
        socket.broadcast.emit("pesan-baru", pesan)
    });
});

server.listen(9000);
