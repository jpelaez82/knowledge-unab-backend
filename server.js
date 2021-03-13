const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
//require('dotenv/config');

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Import Routes
const paperRoute = require('./routes/paper_routes');
app.use('/papers', paperRoute);


// ROUTES
app.get('/', (req, res) => {
    res.send('Knowledge UNAB Backend Home');
});

// CONNECT TO MONGODB
/* const url = "mongodb://localhost:27017/agroriego"; */
const mongourl = "mongodb+srv://misioneros:smreina2020@mongo-onepe-dymvq.mongodb.net/knowledge?retryWrites=true";

mongoose.connect(mongourl, { useNewUrlParser: true }, function(err) {
    if (err) {
        console.log('Error in MongoDB Connection');
    } else {
        console.log('MongoDB Connected');
    }
});

// LISTENING TO THE SERVER
app.listen(3000);

