const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const Location = require("../models/Location");

/**
 * @route   GET api/locations
 * @desc    Get All locations
 * @access  Public
 */

router.get("/:user_id", async (req, res) => {
  try {
    const locations = await Location.find({ user_id: req.params.user_id });
    if (!locations) throw Error("No locations");
    res.status(200).json(locations);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

/**
 * @route   GET api/locations
 * @desc    Get One location
 * @access  Public
 */

router.get("/:user_id/:place_id", async (req, res) => {
  try {
    const location = await Location.findOne({
      user_id: req.params.user_id,
      place_id: req.params.place_id,
    });
    if (!location) res.status(200).json({ saved: false, id: null });
    else res.status(200).json({ saved: true, id: location._id });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});
/**
 * @route   POST api/locations
 * @desc    Create An location
 * @access  Private
 */

router.post("/", auth, async (req, res) => {
  try {
    const newLocation = new Location({
      user_id: req.body.user_id,
      place_id: req.body.place_id,
      image: req.body.image,
      name: req.body.name,
    });

    const checkLocation = await Location.findOne({
      user_id: newLocation.user_id,
      place_id: newLocation.place_id,
    });
    if (checkLocation) throw Error("Location already saved");

    const location = await newLocation.save();
    if (!location) throw Error("Something went wrong saving the location");

    res.status(200).json(location);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

/**
 * @route   DELETE api/locations/:id
 * @desc    Delete A location
 * @access  Private
 */

router.delete("/:id", auth, async (req, res) => {
  try {
    const location = await Location.findById(req.params.id);
    if (!location) throw Error("No location found");

    const removed = await location.remove();
    if (!removed)
      throw Error("Something went wrong while trying to delete the location");

    res.status(200).json({ success: true });
  } catch (e) {
    res.status(400).json({ msg: e.message, success: false });
  }
});

module.exports = router;
