
const mongoose = require('mongoose')

const connectionString = "mongodb+srv://PLACEHOLDER:PLACEHOLDERD@cluster0.czgrzdd.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority&appName=Cluster0"


const connectDB = (url) => {

    return mongoose.connect(connectionString, {

        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,

    })

}



module.exports = connectDB
