const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');

const connectDB = require('./server/database/connection');

const app = express();

dotenv.config({ path: 'config.env' });

// log requests
app.use(morgan('tiny'));

// mongodb connection
connectDB();

// use body parser midleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// use view enigne EJS
app.set('view engine', 'ejs');
// app.set('views', path.resolve(__dirname, "views/ejs"));


// load public file(css, js, img)
app.use('/css', express.static(path.resolve(__dirname, 'public/css')));
app.use('/js', express.static(path.resolve(__dirname, 'public/js')));
app.use('/img', express.static(path.resolve(__dirname, 'public/img')));


// load routers
app.use('/', require('./server/routes/users'));



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("server running"));
