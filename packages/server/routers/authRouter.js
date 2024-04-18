const express = require("express");
const validateForm = require("../controllers/validateForm");
const router = express.Router();

// This is the validation route that checks whether the data being sent is valid according to the schema in the validateForm controller
router.post("/login", (req, res) => {
  validateForm(req, res);
});

router.post("/signup", (req, res) => {
  validateForm(req, res);
});

module.exports = router;
