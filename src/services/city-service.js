const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this.cityRepository = CityRepository;
  }

  async createCity(cityName) {
    try {
      const city = await this.cityRepository.createCity(cityName);
      return city;
    } catch (err) {
      console.log("Something went wrong at service layer");
      throw { err };
    }
  }

  async updateCity(cityId, cityName) {
    try {
      const city = await this.cityRepository.updateCity(cityId, cityName);
      return city;
    } catch (err) {
      console.log("Something went wrong at service layer");
      throw { err };
    }
  }

  async deleteCity(cityId) {
    try {
      const response = await this.cityRepository.deleteCity(cityId);
      return response;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await this.cityRepository.getCity(cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw { error };
    }
  }

  async getAllCities(filter) {
    try {
      const cities = await this.cityRepository.getAllCities(filter);
      return cities;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw { error };
    }
  }
}

module.exports = CityService;
