const app =  require('./app')

const mongoose = require("mongoose");

const DB = "mongodb://localhost:27017/e-com-app";

mongoose.connect(DB).then(() => console.log("Db connection successful"));


const port = 4000

const server = app.listen(port,()=>{
    console.log(`App running on port ${port}`);
})