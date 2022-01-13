const mongoose = require('mongoose');
const db = "mongodb+srv://jash:pass@cluster0.ur3z8.mongodb.net/Data?retryWrites=true&w=majority"     

const connectDB = async () => {
    try {
      await mongoose.connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      });
      console.log('Mongodb Connected ....');
    } catch (err) {
      console.log(err.message);
      process.exit(1);
    }
  };
  
  module.exports = connectDB;
  