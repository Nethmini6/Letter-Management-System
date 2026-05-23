const express = require("express");
const router = express.Router();

const Letter = require("../models/Letter");


// Add Letter
router.post("/add", async (req, res) => {

  try {

    const newLetter = new Letter(req.body);

    await newLetter.save();

    res.status(201).json({
      message: "Letter Added Successfully"
    });

  } catch (error) {

    res.status(500).json(error);

  }

});


// Get All Letters
router.get("/", async (req, res) => {

  try {

    const letters = await Letter.find();

    res.json(letters);

  } catch (error) {

    res.status(500).json(error);

  }

});

module.exports = router;