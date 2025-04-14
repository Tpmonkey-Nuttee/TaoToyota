const express = require('express')
const router = require('./routes/router.js')
const app = express()
const port = 3000

app.use(router)

app.listen(port, () => {
  console.log(`TaoToyota app listening on port ${port}`)
})
