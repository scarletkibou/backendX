const express = require("express");
const router = express.Router();
const { Bank } = require("../models");

router.get("/", async (req, res) => {
  try {
    const banks = await Bank.findAll();
    res.json(banks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:code", async (req, res) => {
  try {
    const bank = await Bank.findByPk(req.params.code);
    if (bank) {
      res.json(bank);
    } else {
      res.status(404).json({ error: "Bank not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
