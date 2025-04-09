const express = require("express")
const cors = require("cors")
const env = require("dotenv")

env.config()

const app = express()
app.use(cors())
app.use(express.json())

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port - http://localhost:${process.env.PORT}`)
})