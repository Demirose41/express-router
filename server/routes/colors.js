const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json("Color 1");
  });
  
  router.post("/:personId/likes", (req, res) => {
    res.json("Color 2");
  });
  
  router.delete("/:personId", (req, res) => {
    res.json("Color 3");
  });
  
  router.get("/best-dressed/comments", (req, res) => {
    res.json("Color 4");
  });
  
  router.get("/people/:name/lookup", (req, res) => {
    res.json("Color 5");
  });
  
  module.exports = router;