const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');

app.use(cors())
app.use(express.json())


const database = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'online_store'
})


app.get('/products', (req, res) => {
    database.query('SELECT * FROM product WHERE product_id;', (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})


app.get('/products/filterBy=ASCPrice', (req, res) => {
    database.query('SELECT * FROM product ORDER BY price ASC;', (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.get('/products/filterBy=DESCPrice', (req, res) => {
    database.query('SELECT * FROM product ORDER BY price DESC;', (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})



app.listen(5500, () => {
    console.log('your server is running on port 5500')
})