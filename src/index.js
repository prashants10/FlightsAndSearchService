const express = require("express");

const {PORT} = require("./config/serverConfig");

const setupAndStartServer = () => {
  // Creating express object
  const app = express();

  app.listen(PORT, function () { 
    console.log(`Server started at ${PORT}`);
  });
};

setupAndStartServer();
