const express = require('express')
const app = express()
const port = 3000
const dataFile = require("./utils/data")
app.use(express.json())
let users = dataFile.defaultData;
app.use('/students',require("./routers/students"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})