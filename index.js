const connectDB = require('./src/db/connect')
const express = require('express')
const app = express()
const tasks = require('./src/routes/tasks')
const notFound = require('./src/middlewares/not-found')
const handleErrorMiddleware = require('./src/middlewares/handle-error')
require('dotenv').config()
//middlewares
app.use(express.json())
//routes
app.use('/api/v1/tasks',tasks)
app.use(notFound)
app.use(handleErrorMiddleware)
const port = 3000
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port ,console.log(`Server listening on port ${port}`))
    } catch (error) {
        console.log(error);
    }
}

start()


