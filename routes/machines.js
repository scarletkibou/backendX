const express = require("express");
const router = express.Router();
const { Machine } = require("../models");

router.get("/", async (req, res) => {
  try {
    const machines = await Machine.findAll();
    res.json(machines);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const machine = await Machine.findByPk(req.params.id);
    if (machine) {
      res.json(machine);
    } else {
      res.status(404).json({ error: "Machine not found" });
    } 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Define the route for inserting data into the machine table
router.post("/add", async (req, res) => {
  try {
    const machine = await Machine.create(req.body);
    res.status(201).json(machine);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
