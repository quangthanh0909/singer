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

app.get('/removesinger',(req,res) => {
  singer.removeSingerById(req.query.id);
  res.redirect('..');
})

app.get('/updatesinger',(req,res) => {
  let updateSinger = singer.getSingerbyId(req.query.id);
  res.render('updateSinger',{updateSinger});
  // res.redirect('..');
})
app.post('/updatesinger',(req,res) => {
  let data=req.body;
  console.log(data);
  
  singer.updateSinger(data.id,data.name,data.link,data.avatar);
  res.redirect('..');
})

app.get('*',(req,res) => {
  res.render('error');
})
app.listen(3000,() => {
  console.log('Server is running');
})