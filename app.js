import express from 'express'
import recordRouter from './router/recordRouter.js'
import 'dotenv/config'
import connectMongoose from './util/connectMongoose.js'

const app = express()
const mongooseConnected = await connectMongoose()

const PORT = process.env.PORT

app.use(express.json())

app.use("/record", recordRouter)

app.use((req, res, next) => {
    const newError = new Error('Your endpoint are wrong')
    newError.status =  404
    next(newError)
})

app.listen(PORT, () => {
    console.log('Server läuft auf Port: ' + PORT)
})