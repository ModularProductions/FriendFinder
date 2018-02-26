var path = require("path");

module.exports = function(app) {
  'use strict';
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
    console.log(__dirname);
    console.log("home.html");
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
    console.log("survey.html");
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};