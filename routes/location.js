const express = require("express");

const locationController = require("../controllers/location");

const router = express.Router();

router.post('/', locationController.addLocation);

module.exports = router;