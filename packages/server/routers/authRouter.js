const express = require("express");
const validateForm = require("../controllers/validateForm");
const router = express.Router();
const {
  handleLogin,
  attemptLogin,
  attemptRegister,
} = require("../controllers/authController");

// LOGIN ROUTE
// This is the validation route that checks whether the data being sent is valid according to the schema in the validateForm controller
router
  .route("/login")
  // This checks whether it's already logged in (cookie session)
  .get(handleLogin)
  // This logs the user in if not already logged in
  .post(validateForm, attemptLogin);

// SIGNUP ROUTE
router.post("/signup", validateForm, attemptRegister);

module.exports = router;
