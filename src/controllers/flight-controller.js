const { FlightService } = require("../services/index");

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const flight = await flightService.createFlight(req.body);
    res.status(201).json({
      data: flight,
      success: true,
      err: {},
      message: "Successfully created a flight",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      data: {},
      success: false,
      err: err,
      message: "Not able to create flight",
    });
  }
};

const get = async (req, res) => {
  try {
    const flight = await flightService.getFlight(req.params.id);
    res.status(200).json({
      data: flight,
      success: true,
      err: {},
      message: "Successfully fetched a flight",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      data: {},
      success: false,
      err: err,
      message: "Not able to fetch flight",
    });
  }
};

const getAll = async (req, res) => {
  try {
    const flights = await flightService.getAllFlights(req.query);
    res.status(200).json({
      data: flights,
      success: true,
      err: {},
      message: "Successfully fetched flights",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      data: {},
      success: false,
      err: err,
      message: "Not able to fetch flights",
    });
  }
};

module.exports = {
  create,
  get,
  getAll,
};
