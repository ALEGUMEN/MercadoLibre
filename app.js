const express = require('express');
const app = express();
app.use(express.static('public'));


app.listen(3000, ()=>{
    console.log('Servidor funcionando en el puerto 3000');
});

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/register.html', (req, res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/login.html', (req, res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get("/public/images/logo-mercado-liebre.svg", (req, res)=>{
    res.sendFile(__dirname + "/public/images/logo-mercado-liebre.svg");
});

app.get("/public/images/img-cafetera-moulinex.jpg", (req, res)=>{
    res.sendFile(__dirname + "/public/images/img-cafetera-moulinex.jpg");
});

app.get("/public/images/img-home-banner.jpg", (req, res)=>{
    res.sendFile(__dirname + "/public/images/img-home-banner.jpg");
});

app.get("/public/images/img-macbook-pro-2019.jpg", (req, res)=>{
    res.sendFile(__dirname + "/public/images/img-macbook-pro-2019.jpg");
});

app.get("/public/images/img-samsung-galaxy-s10.jpg", (req, res)=>{
    res.sendFile(__dirname + "/public/images/img-samsung-galaxy-s10.jpg");
});

app.get("/public/images/img-tv-samsung-smart.jpg", (req, res)=>{
    res.sendFile(__dirname + "/public/images/img-tv-samsung-smart.jpg");
});

app.get("/public/images/img-tv-samsung-smart.jpg", (res, req)=>{
    res.sendFile(__dirname + "/public/images/img-tv-samsung-smart.jpg");
});