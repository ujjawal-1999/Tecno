const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const hbs = require('hbs');

mongoose.connect('mongodb://localhost:27017/Tecnoesis',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const router = require('./routers/router');
const caRouter = require('./routers/caRoute');
const paymentRoute = require('./routers/paymentRoute');
const workshopRoute = require('./routers/workshopRoute');

const app = express() 
app.use(express.json())

app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(bodyParser.json())

const publicDirectoryPath = path.join(__dirname,'../public');
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.set('view engine','hbs');
app.set('views',path.join(__dirname,'../template/views'));

app.use(express.static(publicDirectoryPath))

const port = process.env.PORT || 3000;

app.use('/tecnoesis',router);
app.use('/ca', caRouter);
app.use('/payment',paymentRoute);
app.use('/workshop', workshopRoute);

app.get('/form/*', (req,res)=>{
    res.sendFile(path.join(__dirname,'/../public/form/index.html'));
})

app.get('/*',(req,res)=>{
    // res.redirect('/404/');
    res.sendFile(path.join(__dirname,'/../public/404/index.html'));
});

app.listen(port, () => {
    console.log('Server is up on port : '+ port)
})