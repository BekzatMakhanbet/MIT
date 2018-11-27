const express = require('express');
const db = require('mongoose');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
const PORT =process.env.PORT || 5000


db.connect('mongodb://admin:admin123@ds029381.mlab.com:29381/mit')



var schema=new db.Schema({
  id:Number,
  name:String,
  surname:String,
  email:String,
  course:Number,
  courseName:String,
  discount:Number
});

var ReqModel=db.model('ReqModel',schema);

var urlEncoder=bodyParser.urlencoded({extended:false});

var app=express();

app.set('view engine','ejs');

app.use(express.static('./public'));

app.get('/',function (req,res) {
  res.sendFile(__dirname+'/index.html')
});
app.get('/reg/:courseName',function (req,res) {
  res.render('register',{courseName:req.params.courseName});
})
app.post('/reg/:courseName',urlEncoder,function (req ,res) {
    var boolean=false;
    var data=[req.body.id,req.body.name,req.body.surname,req.body.email,req.body.course,req.params.courseName,0];
    email=req.body.email;
    text="You registered succesfully to "+req.params.courseName+" course";
    ReqModel.find({},function (err,results) {
      if (err) {
        throw err;
      }
      for (var i=0;i<results.length;i++) {
        console.log(i);
        if (results[i].name==req.body.name && results[i].surname==req.body.surname && results[i].courseName==req.params.courseName) {
          text="You are already registered to "+req.params.courseName+" course";
          var mailAccountUser = 'makhanbet.kyzylorda@gmail.com'
          var mailAccountPassword = 'kizilorda'

          var fromEmailAddress = mailAccountUser;
          var toEmailAddress = req.body.email;

          var transport = nodemailer.createTransport(smtpTransport({
              service: 'gmail',
              auth: {
                  user: mailAccountUser,
                  pass: mailAccountPassword
              }
          }))

          var mail = {
              from: fromEmailAddress,
              to: toEmailAddress,
              subject: "MIT REGISTRATION!",
              text: "Successfully registered!",
              html: "<b>Successfully registered!</b><p><a href=\"http://www.yahoo.com\">Click Here</a></p>"
          }

          transport.sendMail(mail, function(error, response){
              if(error){
                  console.log(error);
              }else{
                  console.log("Message sent: " + response.message);
              }

              transport.close();
          });
          boolean=true;
          console.log('has one');
          console.log(boolean);
        }
      }
    });
    console.log(boolean);
    if (boolean==false) {
      var itemOne=ReqModel({id:data[0],name:data[1],surname:data[2],email:data[3],course:data[4],courseName:data[5],discount:data[6]}).save(function (err) {
        if (err) {
          throw err;
        }

      });
    }
    res.sendFile(__dirname+'/success.html');
});
app.get('/teachers',function (req,res) {
  res.render('teachers');
})
app.get('/buy',function (req,res) {
  res.render('info');
});

app.get('/admin',function (req,res) {
  ReqModel.find({},function (err,data1) {
    if (err) {
      throw err;
    }
    res.render('admin',{results:data1});
  });
})

app.listen(PORT, ()=> console.log('Listeni ${PORT}'));
console.log("Created server");
