const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())
app.use(express.json())

const mysql = require('mysql');
const database = mysql.createConnection({

})

app.get('/products', (req, res) => {
    database.query('SELECT * FROM product;', (err, result) => {
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