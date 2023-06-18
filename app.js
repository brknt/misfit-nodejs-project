const express = require('express');
const dotenv = require('dotenv').config();



const app = express();

//TEMPLATE ENGINE
app.set('view engine', 'ejs');


//MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.use('/gallery',(req, res)=>{
    res.render('gallery');
    
})


app.use('/',(req, res)=>{
    res.render('index');
    
})




const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`App started on PORT ${PORT}`);
})