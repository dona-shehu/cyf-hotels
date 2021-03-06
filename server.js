const express = require("express");
const app = express();

app.use(express.json())
let port = process.env.PORT || 9999;
const { Pool } = require("pg")

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    } 
})

//run this comands in terminal
//export DATABASE_URL=postgres://codeyourfuture:donashehu@localhost:5432/cyf_hotels?sslmode=disable
// PORT=9999 npm run start

app.get("/hotels", function (req, res) {
    pool.query('SELECT * FROM hotels')
        .then((result) => res.json(result.rows))
        .catch((error) => {
            console.error(error);
            res.status(500).json(error);
        });
});
app.get("/customers", function (req, res) {
    pool.query('SELECT * FROM customers')
        .then((result) => res.json(result.rows))
        .catch((error) => {
            console.error(error);
            res.status(500).json(error);
        });
});
app.get("/bookings", function (req, res) {
    pool.query('SELECT * FROM bookings')
        .then((result) => res.json(result.rows))
        .catch((error) => {
            console.error(error);
            res.status(500).json(error);
        });
});


app.listen(port, function () {
    console.log(`The server is listening on port ${port}`);
});
