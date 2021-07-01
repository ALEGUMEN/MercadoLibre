const express = require('express');
const app = express();
app.use(express.static('public'));


app.listen(process.env.PORT || 3000, function() {
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

