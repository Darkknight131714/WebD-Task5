const express =  require("express")

const app = express()

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.get("/:var", (req, res) => {
    let variable = req.params.var;
    res.send(`Hello ${variable}`)
})

app.listen(3000)