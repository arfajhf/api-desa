require('dotenv').config()

const mysql = require('mysql')

const { MYSQL_HOST, MYSQL_DBNAME, MYSQL_USER, MYSQL_PASSWORD } = process.env

const con = mysql.createConnection({
    host: MYSQL_HOST,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DBNAME,
})

con.connect((err) =>
    console.log(
        `[*] ${
            err ? 'Gagal' : 'Berhasil'
        } terhubung ke database: ${MYSQL_DBNAME}`
    )
)

module.exports = con
