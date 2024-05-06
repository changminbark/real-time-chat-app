const redisClient = require("../redis");

// rateLimiter is a function which has its parameters passed into the asynchronous function defined in the block (scope)
module.exports.rateLimiter =
  (secondsLimit, limitAmount) => async (req, res, next) => {
    // This will obtain the user's IP but only the first 2 characters for demo purposes
    const ip = req.connection.remoteAddress.slice(0, 4);

    // We can think of the redis server as a huge JSON object that is a database (keys and values)
    // The following multiple redis queries will return a promise, which will be arrays as seen in the console.log response
    // multi() allows for multiple redis commands, incr(ip) adds to the value of the key "ip", expire() makes
    // sure the key/value expires after a certain amount of seconds, and exec() runs all of the redis queries
    const [response] = await redisClient
      .multi()
      .incr(ip)
      .expire(ip, secondsLimit)
      .exec();
    // console.log(response[1]);
    if (response[1] > limitAmount)
      res.json({
        loggedIn: false,
        status: "Slow down! Try again in a minute",
      });
    else next();
  };
