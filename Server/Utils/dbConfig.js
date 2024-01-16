const mongoose = require("mongoose");

const connnectToMongoDB = async ()=>{
    try {
        const conn =  await mongoose.connect('mongodb://127.0.0.1:27017/ProductManagmentSystem', {
      
    });
        console.log(`Connected to MongoDB : ${conn,mongoose.connection.host}`);
    } catch (error) {
        console.error("Failed to connect into database",error)
    }
}

module.exports = connnectToMongoDB;