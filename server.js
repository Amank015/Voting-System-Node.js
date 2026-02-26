const express = require("express")

const app = express()
require('dotenv').config()
const db = require("./db")

const bodyparser = require("body-parser")
app.use(bodyparser.json())//req.body

const PORT = process.env.PORT || 3000



const userRoutes = require("./routes/userRoutes")
const candidateRoute = require("./routes/candidateRoutes")
app.use("/user",userRoutes)
app.use("/candidate",candidateRoute)

app.listen(PORT,()=>
{
    console.log("Server is live");
    
})