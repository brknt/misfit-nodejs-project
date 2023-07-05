const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');




const pageRoute = require('./routes/pageRoute');
const userRoute = require('./routes/userRoute');
const trainingRoute = require('./routes/trainingRoute');
const {checkToken} = require('./middlewares/authMiddleware');




const app = express();

//CONNECT MONGODB
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('Database connection successful');
    
}).catch((err)=>{
    console.log(`Database connection failed error = ${err}`);
    
})


//TEMPLATE ENGINE
app.set('view engine', 'ejs');




//MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride('_method',{
    methods: ['POST','GET']
}));



//ROUTES
app.use("*", checkToken);
app.use('/', pageRoute.routes);
app.use('/users', userRoute.routes);
app.use('/trainings', trainingRoute.routes);




const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`App started on PORT ${PORT}`);
})