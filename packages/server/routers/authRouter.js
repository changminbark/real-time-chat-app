const express = require("express");
const validateForm = require("../controllers/validateForm");
const router = express.Router();
const {
  handleLogin,
  attemptLogin,
  attemptRegister,
} = require("../controllers/authController");
const { rateLimiter } = require("../controllers/rateLimiter");

// LOGIN ROUTE
// This is the validation route that checks whether the data being sent is valid according to the schema in the validateForm controller
router
  .route("/login")
  // This checks whether it's already logged in (cookie session)
  .get(handleLogin)
  // This logs the user in if not already logged in
  .post(validateForm, rateLimiter(60, 10), attemptLogin);

// SIGNUP ROUTE
router.post("/signup", validateForm, rateLimiter(30, 4), attemptRegister);

module.exports = router;
