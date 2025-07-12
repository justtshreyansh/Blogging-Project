const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const Users = require('../models/Users');
const signup = (req,res)=>{
    res.render('signup');
}

const loginPage = (req,res)=>{
    res.render('login',{message:null});
}

const register = async (req,res)=>{
    try{
      const {name,email,password} = req.body;
      const userExisting = await Users.findOne({email});
      if(userExisting){
       return res.render('login',{message:"User already exists"})
      }
      const hashPassword = await bcrypt.hash(password,10);
      const newUser = new Users({name,email,password:hashPassword});
      await newUser.save();
     return res.render('login',{message:"User created successfullly"})

    }
    catch(e){
       return res.render('signup',{message:"Something went wrong.Please try again later"})
    }
}

const login = async (req,res)=>{
    try{
        const{email,password} = req.body;
        const userExisting = await Users.findOne({email});
        if(!userExisting){
            return res.render('login',{message:"User not registerd with us .Please Sign up first"})
        }
        const passwordMatch = await bcrypt.compare(password,userExisting.password);
        if(passwordMatch){
             return res.render('home',{message:null})
        }
        else{
            return res.render('login',{message:"Wrong password. Please try again"})
        }
    }
    catch(err){
         return res.render('login',{message:"User cannot be logged because of some error from server. please try again"})
    }
}

module.exports = {login,signup,register,loginPage};