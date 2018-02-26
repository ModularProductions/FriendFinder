var friendData = require("../data/friends");

module.exports = function(app) {
  'use strict';
  app.get("/api/data", function(req, res) {
    res.json(friendData);
    console.log("friendData JSON");
  });

  app.post("/data", function(req, res) {
    console.log("friend data received =", req.body);
    var user = req.body;
    forEach(friendData, function() {
      this.totalDifference = 0;
      for (var i = 0; i < 26; i++) {
        this.compatibility += Math.abs(this.scores[i] - user.scores[i]);
      }
    })
    friendData.sort(function (a, b) {
      return a.totalDifference - b.totalDifference;
    });

  });

  app.post("/data/clear", function() {
    // Empty out the arrays of data
    friendData = [];
    console.log("Friend array emptied!");
  });
};