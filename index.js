const express = require("express");
const app = express();
app.get("/",function(req,res){
    // console.log('主機名稱',req.hostname);
    // console.log('通訊協定',req.protocol);
    // console.log('路徑',req.path);
    // console.log('使用者代理',req.get('user-agent'));
    // console.log('偏好語言',req.get('accept-language'));
    const lang = req.get('accept-language');
    if(lang.startsWith('en')){ 
        res.send("Hello home page");
    }else{
        res.send("你好這是首頁");
    }
    res.send("Hello home page");
});
app.get("/getData",function(req,res){
    res.send("這是就是你要的資料");
});
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});