const express = require("express");
const validateForm = require("../controllers/validateForm");
const router = express.Router();
const pool = require("../db");
const bcrypt = require("bcrypt");

// This is the validation route that checks whether the data being sent is valid according to the schema in the validateForm controller
router.post("/login", async (req, res) => {
  validateForm(req, res);

  // Testing cookie
  console.log(req.session);

  const potentialLogin = await pool.query(
    "SELECT id, username, passhash FROM users u WHERE u.username=$1",
    [req.body.username]
  );

  if (potentialLogin.rowCount > 0) {
    const isSamePass = await bcrypt.compare(
      req.body.password,
      potentialLogin.rows[0].passhash
    );
    if (isSamePass) {
      // Login
      req.session.user = {
        username: req.body.username,
        id: potentialLogin.rows[0].id,
      };
      res.json({ loggedIn: true, username: req.body.username });

      console.log("logged in");
    } else {
      // Bad login due to wrong password
      res.json({ loggedIn: false, status: "Wrong username or password!" });
    }
  } else {
    // Bad login due to username not existing
    res.json({ loggedIn: false, status: "Wrong username or password!" });
  }
});

router.post("/signup", async (req, res) => {
  // This validates the signup form inputs
  validateForm(req, res);

  // Checks whether username is already taken
  const existingUser = await pool.query(
    "SELECT username FROM users WHERE username=$1",
    [req.body.username]
  );
  // console.log(existingUser);

  if (existingUser.rowCount === 0) {
    // Registers user since username is not taken
    const hashedPass = await bcrypt.hash(req.body.password, 10);
    const newUserQuery = await pool.query(
      "INSERT INTO users(username, passhash) values($1,$2) RETURNING id, username",
      [req.body.username, hashedPass]
    );

    console.log(newUserQuery);

    req.session.user = {
      username: req.body.username,
      id: newUserQuery.rows[0].id,
    };
    res.json({ loggedIn: true, username: req.body.username });
  } else {
    res.json({ loggedIn: false, status: "Username taken" });
  }
});

module.exports = router;
