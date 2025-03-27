const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('What the fuck')
})

app.listen(port, () => {
  console.log(`TaoToyota app listening on port ${port}`)
})
