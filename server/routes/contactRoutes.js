const express = require("express");
const router = express.Router();

const { saveMessage } = require("../controllers/contactController");

router.post("/contact", saveMessage);

module.exports = router;