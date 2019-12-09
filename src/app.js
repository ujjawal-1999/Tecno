const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const hbs = require('hbs');

mongoose.connect('mongodb://localhost:27017/Tecnoesis',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const router = require('./routers/router')

const app = express() 
app.use(express.json())

app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(bodyParser.json())

const publicDirectoryPath = path.join(__dirname,'../public')

app.set('view engine','hbs');
app.set('views',path.join(__dirname,'../template/views'));

app.use(express.static(publicDirectoryPath))

const port = process.env.PORT || 3000

app.use('/tecnoesis',router)

app.listen(port, () => {
    console.log('Server is up on port : '+ port)
})