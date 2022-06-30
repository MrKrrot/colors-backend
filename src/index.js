const api = require('./api/colors.json')
const express = require('express')
const cors = require('cors')
const app = express()
const dotenv = require('dotenv')
const morgan = require('morgan')

//* Init configs
dotenv.config()
const PORT = process.env.PORT || 5000

//* Middlewares
app.use(cors())
app.use(morgan('tiny'))

//* Routes
app.get('/v1/colors', (req, res) => res.json(api))

//* Turning on the server
app.listen(PORT)

console.log(`Server listening on port ${PORT}`)