const mongoose = require('mongoose')

const connectDB = async() => {
    const connection = await mongoose.connect(process.env.MONGO_URL);

    console.log(`MongoDB Connected: ${connection.connection.host}`.blue.underline.bold)
}

module.exports = connectDB;