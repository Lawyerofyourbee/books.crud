import express from "express"
import "dotenv/config.js"
import booksRouter from './routes/booksRouter'
import usersRouter from './routes/usersRouter'
const pool = require('./config/db')
const PORT = process.env.PORT || 3000

const app = express()

pool.query('SELECT NOW()', (err, res) => {
    if(err) {
        console.error('Error connecting to the database');
    } else {
        console.log(`Connected to the database ${process.env.DB_NAME}`);
    }
})

app.use(booksRouter)
app.use(usersRouter)

app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`)
})