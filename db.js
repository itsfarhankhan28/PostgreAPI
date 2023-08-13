const POOL = require('pg').Pool

const pool = new POOL({
    user:"farhanapi",
    password:"0IH3a5zBak3uy592MpU89fle1UhpiCeJ",
    host:"dpg-cjccs77db61s73dvam9g-a",
    port:5432,
    database:"pgserver_w352"
})

module.exports = pool