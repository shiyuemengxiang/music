const express=require('express');
const app=new express();
//静态服务
// app.use(express.static('./www'));
// app.get('/',(req,res)=>{
//     res.send("你好!")
// })

app.use(express.static("./www"));


app.listen(3000,()=>{
    console.log('server runing on 127.0.0.1:3000')
})