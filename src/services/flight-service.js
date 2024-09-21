const { FlightRepository, AirplaneRepository } = require("../repository/index");
const { compareTime } = require("../utils/helper");

class FlightService {
  constructor() {
    this.airplaneRespository = new AirplaneRepository();
    this.flightRespository = new FlightRepository();
  }

  async createFlight(data) {
    try {
      console.log("payload", data);
      if (!compareTime(data.arrivalTime, data.departureTime)) {
        throw { error: "Arrival time cannot be less than departure time" };
      }
      const airplane = await this.airplaneRespository.getAirplane(
        data.airplaneId
      );
      data.totalSeats = airplane.capacity;
      const flight = await this.flightRespository.createFlight(data);
      return flight;
    } catch (err) {
      console.log("Something went wrong at service layer");
      throw { err };
    }
  }

  async getFlight(id) {
    try {
      const flight = await this.flightRespository.getFlight(id);
      return flight;
    } catch (err) {
      console.log("Something went wrong at service layer");
      throw { err };
    }
  }

  async getAllFlights(filter) {
    try {
      const flights = await this.flightRespository.getAllFlights(filter);
      return flights;
    } catch (err) {
      console.log("Something went wrong at service layer");
      throw { err };
    }
  }
}

module.exports = FlightService;
