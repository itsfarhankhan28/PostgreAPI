const POOL = require('pg').Pool

const pool = new POOL({
    user:"farhanapi",
    password:"farhankhan",
    host:"localhost",
    port:5432,
    database:"pgserver"
})

module.exports = pool