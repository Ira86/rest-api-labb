const mongoose = require('mongoose');

// coonecting with db using asyng await
const connectDB = async () => {
    try {
        // coonection with mongo uri
        const conn = await mongoose.connect(process.env.MONGO_URI, {
        // using some parameter to avoid the error
        // useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
        });
        // checking the connection
        console.log(`Mongo DB Connected: ${conn.connection.host}`);
        // if error
    } catch(err) {
        console.log(err);
        // stop the process
        process.exit(1);
    }
}
// exporting the module nemed connectDB
module.exports = connectDB;
