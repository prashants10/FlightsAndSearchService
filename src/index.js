const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");

const ApiRoutes = require("./routes/index");
const { City, Airport } = require("./models/index");
const db = require("./models/index");

const setupAndStartServer = () => {
  // Creating express object
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", ApiRoutes);

  // app.post('/city',CityRepository.create)
  app.listen(PORT, async function () {
    console.log(`Server started at ${PORT}`);
    // console.log(city);
    // db.sequelize.sync({alter: true});

    // const city = await City.findByPk(2);
    // const data = await city.getAirports();
    // await city.addAirports({ name: "test" });
    // console.log(data);
    // const airports = await Airport.findAll({
    //   include: [{ model: City }],
    // });
    // const cities = await City.findAll({
    //   include: [{ model: Airport }],
    // });
    // console.log(cities);
    // console.log(airports);
  });
};

setupAndStartServer();
