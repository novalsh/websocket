const socketIO = require('socket.io');
const path = require('path');
const express = require('express');
const http = require('http');

const app = express();
const server = require('http').Server(app);
const io = socketIO(server);

app.use(express.static("public"));

app.listen(9000);
