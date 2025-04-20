const express = require('express')
const path = require('path')
const router = require('./routes/router')
const app = express()
const port = 3000

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))
app.use(router)
app.use(express.static(path.join(__dirname,'public')))

app.listen(port, (err) => {
  if(err){
    console.log('ERROR:', err.message)
  }
  console.log(`TaoToyota is now running at http://127.0.0.1:${port}/`)
})
