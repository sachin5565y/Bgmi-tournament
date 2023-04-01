const mongoose = require('mongoose')  // Mongoose return promise 



const connectToMongo = () => { mongoose
  .connect(
    "mongodb://0.0.0.0:27017/bgmi",
   
  )
  .then(() => console.log("DB connection successful!"))
  .catch((e) => {
    console.log(`SomeThing went wrong with DataBase. and the error is =  ${e}`);
  });
}
module.exports = connectToMongo