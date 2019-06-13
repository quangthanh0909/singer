const express = require('express');
const app = express();
const path = require('path');
const singer = require('./data/Singer');
// app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set('view engine','ejs');
app.set("views",path.join(__dirname,"/views"));
app.get('/',(req,res,next) => {
  const singers = singer.getSinger();
  res.render("home",{singers});
  console.log(singers);
  
})
app.get('/addsinger',(req,res,next) => {
  res.render("addSinger")
  
})
app.post('/addsinger',(req,res,next) => {
  console.log((req.body));
  singer.newSinger(req.body.name,req.body.link,req.body.avatar);
  res.redirect('..');
})


app.listen(3000,() => {
  console.log('Server is running');
})