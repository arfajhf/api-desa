require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const con = require('./conect')

const { PORT } = process.env

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    con.query('select * from petugas', (err, result) => {
        if (err) {
            res.send('error')
        } else {
            res.send(result)
        }
    })
})

app.post('/', (req, res) => {
    var { nama, password, role } = req.body
    con.query(
        'insert into petugas (`nama`, `password`, `role`) values (?, ?, ?)',
        [nama, password, role],
        (err, result) => {
            if (err) {
                res.send(`error ${String(err)}`)
            } else {
                res.send(result)
            }
        }
    )
})

app.put('/', (req, res) => {
    con.query('')
})

app.listen(PORT, function (err) {
    if (err) {
        console.log('[*] Gagal terkoneksi port:', PORT)
    } else {
        console.log('[*] Gass Kuyyy ... ')
        console.log('[*] Listening on port:', PORT)
    }
})
