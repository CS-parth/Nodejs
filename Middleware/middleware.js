module.export = reqFilter = (req,res,next)=>{
    console.log('reqFilter');
    if(!req.query.age){
        res.send("please provide age");
    }else if(req.query.age < 18){
        res.send("You can not access this page");
    }else{
        next();
    }
 // We have to use next otherwise The page wont load 
}