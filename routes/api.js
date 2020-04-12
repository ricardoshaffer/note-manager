let router = require("express").Router();
const notes = require("../database/db.json");
let tostoreage = require("../js/storage");
const fs = require('fs');
let path = require("path");


  router.get("/notes", function(req, res) {
    res.send(notes);
  });
    // get a note
  // see 15-HotRestaurant/Solved for more info

  router.post("/notes", function(req, res) {
      notes.push(tostoreage(req.body));
      res.json(true);
      const data = JSON.stringify(notes);
      enterNotes();
  })
  function enterNotes() {
    let data = JSON.stringify(notes,null,"/t")
    fs.writeFile(path.join(__dirname, notes), data, err => {
      if(err) throw err
  })};

// other apis here

// /api/notes/:id
module.exports = router;