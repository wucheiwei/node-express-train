const express = require("express");
const app = express();
app.get("/",function(req,res){
    const lang = req.get('accept-language');
    if(lang.startsWith('en')){ 
        res.send("Hello home page");
    }else{
        res.send("你好這是首頁");
    }
    res.send("Hello home page");
});
app.get("/getData",function(req,res){
    const name = req.query.city;
    if (name == 'taipei') {
        res.send("人口:250萬")
    } else if (name == 'hsinchu') {
        res.send("人口:100萬")
    } else {
        res.send("沒有資料");
    }
});
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});