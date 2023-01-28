//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
let ejs = require("ejs");

const app = express();

// variable
const items = ["eatFood", "washcar", "feedTom"];

app.set("view engine", "ejs"); // for expressing the view eng
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  //-> Here we can design the logic for the programme

  // This is conentional method
  // console.log(__dirname);
  // console.log(__dirname + "/index.html");
  // res.sendFile(__dirname + "/index.html");

  // const date = new Date;
  // const day=date.getDay();
  // let dayString = ""
  // if(day==0 || day==6){
  //   dayString = "weekend"
  // res.render('list',{kindDay:dayString});
  // }
  // else {
  //   dayString = "weekday"
  //   res.render('list',{kindDay:dayString});
  // }

  // // moudule 3  js date format

  var options = { day: "numeric", weekday: "long", month: "long" };
  var today = new Date();
  // console.log(today.toLocaleDateString("en-US")); // 9/17/2016
  const currentDay = today.toLocaleDateString("en-US", options);
  res.render("list", { kindDay: currentDay, listItems: items });
});
// end

app.post("/", function (req, res) {
  item = req.body.listItem;
  items.push(item);

  res.redirect("/");
});

// // root route vala smj aaya aur post kasie kam karta vo bhi smj aaya
// Home vala home vali request ka dhyand usko farak nhi padta vo sirf uska dekhege
// app.post("/home" , function(req, res){
//   item = req.body.listItem
//   console.log(item);

//  })

app.listen(3000, function () {
  console.log("Server started on port 3000.");
});
