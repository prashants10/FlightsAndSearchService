const { Flight } = require("../models/index");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

class FlightRepository {
  #createFilter(data) {
    let filter = {};
    if (data.arrivalAirportId) {
      filter.arrivalAirportId = data.arrivalAirportId;
    }
    if (data.departureAirportId) {
      filter.departureAirportId = data.departureAirportId;
    }
    if (data.departureDate) {
      let startingTime = new Date(data.departureDate);
      let endingTime = new Date(startingTime.getTime() + 24 * 60 * 60 * 1000);
      Object.assign(filter, {
        departureTime: {
          [Op.gte]: startingTime,
          [Op.lte]: endingTime,
        },
      });
    }
    if (data.minPrice && data.maxPrice) {
      Object.assign(filter, {
        price: {
          [Op.gte]: data.minPrice,
          [Op.lte]: data.maxPrice,
        },
      });
    }

    if (data.minPrice && !data.maxPrice) {
      Object.assign(filter, {
        price: { [Op.gte]: data.minPrice },
      });
    }

    if (data.minPrice && !data.maxPrice) {
      Object.assign(filter, {
        price: { [Op.lte]: data.maxPrice },
      });
    }
    return filter;
  }
  async createFlight(data) {
    try {
      const flight = await Flight.create(data);
      return flight;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async getFlight(id) {
    try {
      const flight = await Flight.findByPk(id);
      return flight;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async getAllFlights(filter) {
    try {
      let filterObject = this.#createFilter(filter);
      console.log("filterObject", filterObject);
      const flights = await Flight.findAll({
        where: filterObject,
      });
      return flights;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }
}

module.exports = FlightRepository;
