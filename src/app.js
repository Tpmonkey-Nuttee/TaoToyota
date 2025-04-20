const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.set('views',path.join(__dirname,'views'))
app.use(express.static(path.join(__dirname,'public')))

app.listen(port, () => {
  console.log(`TaoToyota is now running at http://127.0.0.1:${port}/`)
})
