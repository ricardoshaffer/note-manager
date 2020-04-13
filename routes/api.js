let router = require("express").Router();
const notes = require("../database/db.json");
let tostoreage = require("../js/storage");
const fs = require('fs');
let path = require("path");

// ===========================
// DELETES ITEM FROM DATABASE
// ===========================
router.delete("/notes/:id", function(req, res) {
  deleteID = notes.filter(params.id);
  res.json(true);
  deleteNote();
  })
  function deleteNote() {
    let data = JSON.stringify(deleteID,'',"\t")
    fs.writeFile(path.join(__dirname, notes), data, err => {
      if(err) throw err
  })};

//==============================
// PULLS DATA FROM THE DATABASE
//==============================
  router.get("/notes", function(req, res) {
    res.send(notes);
    console.log("THE FOLLOWING NOTE HAVE BEEN PULLED: " + notes.body);
  });
  
//==============================
// SAVES DATA FROM THE DATABASE
//==============================
  router.post("/notes", function(req, res) {
      notes.push(tostoreage(req.body));
      res.json(true);
      const data = JSON.stringify(notes);
      enterNotes();
      console.log("THE FOLLOWING NOTE HAS BEEN SAVED: " + req.body[0]);
  })
  function enterNotes() {
    let data = JSON.stringify(notes,'',"/t")
    fs.writeFile(path.join(__dirname, notes), data, err => {
      if(err) throw err
  })};
module.exports = router;