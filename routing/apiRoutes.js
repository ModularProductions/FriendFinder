var friendData = require("../data/friends");
var defaultFriends = friendData.slice();

module.exports = function(app) {
  'use strict';
  app.get("/api/data", function(req, res) {
    res.json(friendData);
    console.log("friendData JSON sent");
  });

  app.post("/data/friends", function(req, res) {
    console.log("friend data received =", req.body);
    var user = req.body;
    friendData.forEach(function(ele) {
      ele.totalDifference = 0;
      for (var i = 0; i < 10; i++) {
        ele.totalDifference += Math.abs(parseFloat(ele.scores[i]) - parseFloat(user.scores[i]));
      }
    })
    friendData.sort(function (a, b) {
      return a.totalDifference - b.totalDifference;
    });
    console.log("match =", friendData[0]);
    friendData.push(user);
    res.json(friendData[0]);
  });

  app.get("/data/clear", function(req, res) {
    friendData = defaultFriends.slice();
    console.log("Friend array reset to default.");
    res.end();
  });
};