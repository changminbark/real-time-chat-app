const express = require("express");
const { Server } = require("socket.io");
const helmet = require("helmet");
const cors = require("cors");
const authRouter = require("./routers/authRouter");
const session = require("express-session");
require("dotenv").config();

// Basically, this creates an express app/server, which is passed as an argument to the HTTP server, which is passed as an argument to the
// socket.io server. Any requests that are sent to the server will ultimately end up reaching the express app
const app = express();

const server = require("http").createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: "true",
  },
});

// Middleware is anything run between the beginning and end of the request/response cycle.
// Middleware passed through the express.js server. Every request that goes through the express app has to go through any program
// specified in this app.use function. In this case, helmet is used for security and express.json parses any JSON coming through to
// the express server to be treated like a JavaScript object.  The cors helps the frontend and backend to communicate securely and allows cookies.
app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());

// This middleware is related to creating sessions and using cookies to store session data. There is a code in the cookie and sending
// a request to the server, express-session detects this code and gets the user information from the code. The code should be randomized.
// The cookie name "sid" stands for session id. It does not save the session for no reason. It only saves when there are changes.
// The saveUnitialized makes sure that there is no cookie when the user is not logged in.
// The secure property of the cookie makes sure it is set through https, but testing is in http so the production allows you to test the
// cookie even in development.
// The sameSite property determines whether the cookie will be communicated through different domains or not. If it is set to none, it is
// required for secure to be true.
// The cookie is pretty much the "key" to a value in a dictionary, which is the req.session values. Express-session saves that dictionary
// every time a response is sent.
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    credentials: true,
    name: "sid",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.ENVIRONMENT === "production" ? "true" : "auto",
      httpOnly: true,
      expires: 1000 * 60 * 60 * 24 * 7,
      sameSite: process.env.ENVIRONMENT === "production" ? "none" : "lax",
    },
  })
);

// This is the middleware for authenticating/validating the user's login and signup
app.use("/auth", authRouter);

// This is a basic route that responds with hi message
// app.get('/', (req, res) => {
//     res.json("hi");
// })

// When the websocket receives a connection, this will be the callback
io.on("connect", (socket) => {});

server.listen(4000, () => {
  console.log("Server listening on port 4000");
});
