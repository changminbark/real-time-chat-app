// Redis here is a class
const Redis = require("ioredis");

// This instance of the Redis class/client will be what communicates with the redis server
const redisClient = new Redis();

module.exports = redisClient;
