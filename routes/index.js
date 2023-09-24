const express = require('express');
const router = express.Router();

const auth = require("./auth");

router.get("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});

module.exports = router;
