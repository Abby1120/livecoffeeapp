// This file handles connection logic to the MongoDB database

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://abby123:abby123@coffeelist-zuagm.mongodb.net/test?retryWrites=true&w=majority/RoastManager', {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log("Connected to MongoDB successfully :)");
}).catch((e) => {
    console.log("Error while attempting to connect to MongoDB");
    console.log(e);
});

// To prevent deprectation warnings (from MongoDB native driver)
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);


module.exports = {
    mongoose
};