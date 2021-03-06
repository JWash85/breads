// DEPENDENCIES
const methodOverride = require('method-override')
const express = require("express");
const mongoose = require('mongoose')


// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;
const app = express()
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
  
)

// MIDDLEWARE
//middleware should be added above routes
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static('public'))

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to an Awesome App about Breads");
});

// Breads
const breadsController = require("./controllers/breads_controller.js");
app.use("/breads", breadsController);

// 404 Page
app.get('*', (req, res) => {
  res.send('404')
})

// LISTEN
app.listen(PORT, () => {
  console.log("nomming at port", PORT);
});
