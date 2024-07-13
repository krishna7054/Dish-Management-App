const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const dishesRouter = require('./routes/dishes'); 

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
      methods: ['GET', 'PATCH'],
      allowedHeaders: ['Content-Type'],
      credentials: true
    }
  });
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb+srv://21it3038:WDHbRTNejWX1uisv@cluster0.b8vudo6.mongodb.net/database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use('/api/dishes', dishesRouter(io)); // Pass the io instance to the router

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
