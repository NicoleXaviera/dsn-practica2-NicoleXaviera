const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const cors = require('cors')

const routes = require('./routes')

const app = express()
app.set('port', process.env.PORT || 9000)
const dbOptions = {
    host: "crudnodejs.cqv1do4jd2wh.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "Tecsup2023",
    port: 3306,
    database: "library",
}

// import { createPool } from "mysql2/promise";

// export const pool = createPool({
//   host: "crudnodejs.cqv1do4jd2wh.us-east-2.rds.amazonaws.com",
//   user: "admin",
//   password: "Tecsup2023",
//   port: 3306,
//   database: "library",
// });

// middlewares -------------------------------------
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())
app.use(cors())

// routes -------------------------------------------
app.get('/', (req, res)=>{
    res.send('Welcome to my API')
})
app.use('/api', routes)

// server running -----------------------------------
app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get('port'))
})