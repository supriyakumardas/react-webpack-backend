const mongoose = require('mongoose');
require('dotenv').config();

// const mongoDB_url = process.env.MONGO_URL;

const username = 'evcharge360';
const password = 'Charge@360'; 

// URL-encode the password
const encodedPassword = encodeURIComponent(password);

const mongoDB_url = `mongodb+srv://${username}:${encodedPassword}@cluster0.k36ykzw.mongodb.net/ev_db`;



const connectDB=async()=>{
    try {
       const con = await mongoose.connect(mongoDB_url,); 
       console.log(`Connection successful at host ${con.connection.host}`) 
    } catch (error) {
        console.log(error,"###########################")
    }
}
 module.exports = connectDB;
