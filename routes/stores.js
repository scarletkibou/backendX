const express = require("express");
const router = express.Router();
const { Store } = require("../models");

router.get("/", async (req, res) => {
  try {
    const stores = await Store.findAll();
    res.json(stores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:serial", async (req, res) => {
  try {
    const store = await Store.findByPk(req.params.serial);
    if (store) {
      res.json(store);
    } else {
      res.status(404).json({ error: "Store not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;
