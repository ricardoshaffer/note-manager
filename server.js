let express = require("express");
let htmlR = require("./routes/html");
let apiR = require("./routes/api");
const app = express();
//==============================
// CREATES THE SERVER ENVIRONMENT FOR LOCAL & WEB
//==============================
let PORT = process.env.PORT || 8080;
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//==============================
// ROUTES STATIC TO THE PROPER ROUTE
//==============================
app.use("/api", apiR);  // /api/notes
app.use("/", htmlR);    // /notes or /
app.listen(PORT, function(){
    console.log("port listening on http://localhost:" + PORT);
})
