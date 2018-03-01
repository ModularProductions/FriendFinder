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
    friendData.forEach(function(ele) {
      ele.totalDifference = 0;
      for (var i = 0; i < 5; i++) {
        ele.totalDifference += Math.abs(parseFloat(ele.scores[i]) - parseFloat(user.scores[i]));
      }
    })
    console.log(friendData.sort(function (a, b) {
      return a.totalDifference - b.totalDifference;
    }));
    friendData.sort(function (a, b) {
      return a.totalDifference - b.totalDifference;
    });
    console.log("match =", friendData[0]);
    res.json(friendData[0]);
  });

  app.post("/data/friends", function() {
    res.json()
  })

  app.post("/data/clear", function() {
    friendData = [];
    console.log("Friend array emptied!");
  });
};