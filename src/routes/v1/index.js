const express = require("express");
const CityController = require("../../controllers/city-controller");
const FlightController = require("../../controllers/flight-controller");

const router = express.Router();

router.post("/city", CityController.create);
router.get("/city/:id", CityController.get);
router.get("/city", CityController.getAll);
router.delete("/city/:id", CityController.destroy);
router.patch("/city/:id", CityController.update);

router.get("/flight/:id", FlightController.get);
router.get("/flight", FlightController.getAll);
router.post("/flight", FlightController.create);

module.exports = router;
