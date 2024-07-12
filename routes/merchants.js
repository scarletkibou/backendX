const express = require("express");
const router = express.Router();
const { Merchant } = require("../models");

router.get("/", async (req, res) => {
  try {
    const merchants = await Merchant.findAll();
    res.json(merchants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const merchant = await Merchant.findByPk(req.params.id);
    if (merchant) {
      res.json(merchant);
    } else {
      res.status(404).json({ error: "Merchant not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
