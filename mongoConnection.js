const mongoose = require('mongoose');

// Mongo Atlas URL Connection
const mongourl = "mongodb+srv://misioneros:smreina2020@mongo-onepe-dymvq.mongodb.net/knowledge?retryWrites=true";

mongoose.connect(mongourl, { useNewUrlParser: true }, function(err) {
    if (err) {
        console.log('Error in MongoDB Connection');
    } else {
        console.log('MongoDB Connected');
    }
});

module.exports = mongoose;