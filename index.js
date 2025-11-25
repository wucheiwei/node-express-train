const express = require("express");
const app = express();
app.get("/",function(req,res){
    res.send("Hello home page");
});
app.get("/getData",function(req,res){
    res.send("這是就是你要的資料");
});
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});