const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const Users = require('./models/Users');
const { login, signup, register, loginPage } = require('./controllers/userController');
const router = require('./Routes');
const session = require('express-session');

const app = express(); 

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


 

app.use(session({
  secret:"dummy key",
  resave:true,
  saveUninitialized:true
}))

app.use('/', router);


mongoose.connect("mongodb+srv://justtshreyansh:Hustler%4007@cluster0.m4xwkww.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("Something went wrong:", err));


app.listen(3000, () => {
  console.log("Server has started at port 3000");
});
