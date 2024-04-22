const express = require("express");
const validateForm = require("../controllers/validateForm");
const router = express.Router();
const pool = require("../db");
const bcrypt = require("bcrypt");

// This is the validation route that checks whether the data being sent is valid according to the schema in the validateForm controller
router.post("/login", (req, res) => {
  validateForm(req, res);
});

router.post("/signup", async (req, res) => {
  // This validates the signup form inputs
  validateForm(req, res);

  // Checks whether username is already taken
  const existingUser = await pool.query(
    "SELECT username from users WHERE username=$1",
    [req.body.username]
  );

  if (existingUser.rowCount === 0) {
    // Registers user since username is not taken
    const hashedPass = await bcrypt.hash(req.body.password, 10);
    const newUserQuery = await pool.query(
      "INSERT INTO users(username, passhash) values($1,$2) RETURNING id, username",
      [req.body.username, hashedPass]
    );
    req.session.user = {
      username: req.body.username,
      id: newUserQuery.rows[0].id,
    };
    res.json({ loggedIn: true, username });
  } else {
    res.json({ loggedIn: false, status: "Username taken" });
  }
});

module.exports = router;
