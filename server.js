let express = require("express");
let htmlR = require("./routes/html");
let apiR = require("./routes/api");
const app = express();

let PORT = process.env.PORT || 8080;
// PLUS the following 
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



const http = require('http');
http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
});

server.listen(port,() => {
  console.log(`Server running at port `+port);
});
/* 
^^ creates a path to static front-end files: html, css & js.
notice how files are referenced in index.html: 
                       <script src="/js/index.js"></script>. 
this is because we have created a static path that routes
to the /public directory automatically.
*/

// require("./routes/api")(app);
// require("./routes/html")(app);
app.use("/api", apiR);  // /api/notes
app.use("/", htmlR);    // /notes or /
app.listen(PORT, function(){
    console.log("port listening on http://localhost:" + PORT);
})
