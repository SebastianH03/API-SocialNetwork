const mongoose = require("mongoose");
 
const connection = async() => {
    try{
        await mongoose.connect("mongodb://localhost:27017/my_socialNetwork");
        console.log("connected successfully");
    }catch(error){
        console.log(error);
        throw new Error("Database Connection Error");
    }
}

module.exports = {
    connection
}