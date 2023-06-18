const express = require('express');
const dotenv = require('dotenv').config();

const pageRoute = require('./routes/pageRoute');
const userRoute = require('./routes/userRoute');



const app = express();

//TEMPLATE ENGINE
app.set('view engine', 'ejs');


//MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());



app.use('/', pageRoute.routes);
app.use('/users', userRoute.routes);




const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`App started on PORT ${PORT}`);
})