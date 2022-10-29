const mysql = require("mysql")
const con = mysql.createConnection({
        host : '192.168.1.30',
        user : 'root',
        password : 'root',
        database : 'crud'
});
/*
con.connect((err) => {
        if(err){
                console.log("gagal connect to database")
        }else{
                console.log("berhasil tersambung")
        }
});*/

module.exports=con;
