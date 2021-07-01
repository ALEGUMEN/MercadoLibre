const express = require('express');
const  app = express();
const path = require("path");   

const publicPath = path.resolve(__dirname, './public');  
app.use(express.static(publicPath)); 



app.listen(process.env.PORT || 3000, function() {
    console.log('Servidor funcionando en el puerto 3000');
});


app.get("/", function(req,res){
    let htmlArchivo = path.resolve(__dirname, './Views/home.html')
    res.sendFile(htmlArchivo);
})

app.get("/register", function(req,res){
    let htmlArchivo = path.resolve(__dirname, './Views/register.html')
    res.sendFile(htmlArchivo);
})

app.get("/login", function(req,res){
    let htmlArchivo = path.resolve(__dirname, './Views/login.html')
    res.sendFile(htmlArchivo);
})

