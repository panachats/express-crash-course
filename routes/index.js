const express = require("express");
const router = express.Router();

const restaurants = require("../data");

router.get("/", (req, res) => {
  res.render("index", { restaurants });
});

module.exports = router;
