const home = (req,res)=>{
    res.render('home',{message:null});
}
const addblogs = (req,res)=>{
    res.render('addblogs',{message:null});
}

const myblogs = (req,res)=>{
    res.render('myblogs',{message:null});
}


module.exports = {home,addblogs,myblogs};