const express = require('express')
const router = require('./routes/router.js')
const app = express()
const port = 3000

app.use(router)

app.listen(port, () => {
  console.log(`TaoToyota is now running at http://127.0.0.1:${port}/`)
})
