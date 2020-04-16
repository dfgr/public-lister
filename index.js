const express = require("express")
const app = express()
app.use(express.static('public'))
app.listen(3000)
app.get("*" , function(req, res){
	res.redirect("/")
})
console.log("server ok kanka")
