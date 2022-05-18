//jshint esversion:6

// Get all the required libraries
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js")

const app = express();
app.set('view engine','ejs'); // set app view engine to EJS

const items =[];
const workItems = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// Client side
app.get("/", function(req, res){

  let day = date.getDay();

  res.render("list", {listTitle: day, newListItems: items}); //Rrender file called list and pass variable values to the file

})

app.get("/work", function(req, res){

  let day = date();

  res.render("list", {listTitle: "Work List", newListItems: workItems}); //Rrender file called list and pass variable values to the file

})

app.post("/",function(req, res){

  let item = req.body.newItem;

  if(req.body.list === "Work"){
    workItems.push(item);
    res.redirect("/work");
  }
  else{
    items.push(item);
    res.redirect("/");
  }
})

//Server listening to the client
app.listen(3000, function(){
  console.log("Server started on port 3000");
})
