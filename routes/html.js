let path = require("path");
let router = require("express").Router();

router.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
    // send  notes file
    // 15-HotRestaurant/Solved for more info
});
  module.exports = router;