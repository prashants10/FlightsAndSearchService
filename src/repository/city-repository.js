const { City } = require("../models/index");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

class CityRepository {
  static async createCity(name) {
    try {
      const city = await City.create({
        name,
      });
      return city;
    } catch (err) {
      console.log("Something went wrong in the repository layer");
      throw { err };
    }
  }

  static async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (err) {
      console.log("Something went wrong in the repository layer");
      throw { err };
    }
  }

  static async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (err) {
      console.log("Something went wrong in the repository layer");
      throw { err };
    }
  }

  static async getAllCities(filter) {
    try {
      console.log(filter.name)
      if (filter.name) {
        const cities = await City.findAll({
          where: {
            "name": {
              [Op.startsWith]: filter.name,
            },
          },
        });
        console.log(cities);
        return cities;
      }
      const cities = await City.findAll();
      return cities;
    } catch (err) {
      console.log("Something went wrong in the repository layer");
      throw { err };
    }
  }

  static async updateCity(cityId, cityName) {
    try {
      const city = await City.findByPk(cityId);
      city.name = cityName;
      await city.save();
      return city;
    } catch (err) {
      console.log("Something went wrong in the repository layer");
      throw { err };
    }
  }
}

module.exports = CityRepository;
