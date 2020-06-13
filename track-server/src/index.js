//these top two require statements are so that the models are executed/created at least one time
//the rest of the time the models are called, it's done so using the new syntax of const Model = mongoose.model('Model')
require('./models/User')
require('./models/Track')

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config()

const authRoutes = require('./routes/authRoutes')
const trackRoutes = require('./routes/trackRoutes')
const requireAuth = require('./middlewares/requireAuth')

const app = express()

app.use(bodyParser.json())
app.use(authRoutes)
app.use(trackRoutes)

mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true
})

mongoose.connection.on('connected', ()=> {
    console.log('connected to MongoDB Instance')
})

mongoose.connection.on('error', (err)=> {
    console.error('error connecting to mongo:', err)
})

app.get('/', requireAuth, (req, res) => {
    res.send(`your email is ${req.user.email}`)
})

app.listen(3000, ()=> {
    console.log('now listening on port 3000')
})