const express = require("express");
const {Server} = require("socket.io");
const helmet = require("helmet")

// Basically, this creates an express app/server, which is passed as an argument to the HTTP server, which is passed as an argument to the 
// socket.io server. Any requests that are sent to the server will ultimately end up reaching the express app
const app = express();

const server = require("http").createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        credentials: "true",
    }
});

// Middleware passed through the express.js server. Every request that goes through the express app has to go through any program
// specified in this app.use function. In this case, helmet is used for security and express.json parses any JSON coming through to
// the express server to be treated like a JavaScript object
app.use(helmet());
app.use(express.json());

// This is a basic route that responds with hi message
app.get('/', (req, res) => {
    res.json("hi");
})

// When the websocket receives a connection, this will be the callback
io.on("connect", socket => {});


server.listen(4000, () => {
    console.log("Server listening on port 4000")
});