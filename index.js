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
        let data = {pop:300, name:"台北市"};
        res.send(data);
    } else if (name == 'hsinchu') {
        res.send({pop:40, name:"新竹市"});
    } else {
        res.redirect("https://www.google.com/search?q="+name);
    }
});
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});