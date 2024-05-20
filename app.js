// app.js
// imports the Express.js
const express = require('express');
// calling express() named app variable
const app = express();

//  setting middleware (app.use....) to serve static files from the 'frontend' directory.
// express.static function is a built-in middleware provided by Express to serve static files
app.use(express.static('frontend'));

// Rest of your app.js code...

// defining the body-parser
const bodyParser = require('body-parser');
// explanation is in the reademe
const cors = require('cors');
const dotenv = require('dotenv');

// Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env

// using body-parser in json formed
app.use(bodyParser.json());
app.use(cors());

// Middleware
// app.use('/student', () => {
//     console.log('Middleware Running');
// });

// Routes
// app.get('/', (req, res) => {
//     res.send('Hi student');
// });


// app.get('/student', (req, res) => {
//     res.send('Student');
// });

// coonecting DB with config
const connectDB = require('./config/db');
// Load Config
dotenv.config({path: './config/config.env'})
// declaring the db
connectDB();

// defining the routes
app.use('/', require('./routes/studentRout'));
app.use('/', require('./routes/teacherRout'));

app.listen(3001);
