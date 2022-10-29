const con = require("./conect")
const express = require("express")
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.get("/", (req, res)=>{
	con.query("select * from petugas", (err, result)=>{
		if(err){
			res.send("error")
		}else{
			res.send(result)
		}
	})
});

app.post("/", (req, res)=>{
	res.send(JSON.stringify(req.body))
	const data = req.body;
	/*con.query("insert into petugas set ?", data, (err,result)=>{
		if(err){
			res.send(`error ${String(err)}`)
		}else{
			res.send(result)
		}
	})*/
});

app.put("/", (req, res)=>{
	con.query("")
})

app.listen(6001, function(err){
	if(err){
		console.log("sistem error")
	}else{
		console.log("gass kuyyy......")
	}

});
