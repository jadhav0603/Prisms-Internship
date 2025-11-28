const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()


const loginRoute = require('./Routes/login')


app.use(express.json())


app.use(cors({
    origin: ["http://localhost:5173", "https://prisms-internship.onrender.com","https://prisms-internship-wygp.onrender.com"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true
}));


app.use('/',loginRoute)

app.listen(process.env.PORT || 5000,async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        try {
            console.log('server successfully connected to Database')
        } catch (error) {
            console.log(error)
        }
        
        console.log(`server successfully connected to ${process.env.PORT}`)
    } catch (error) {
        console.log(error)
    }
})