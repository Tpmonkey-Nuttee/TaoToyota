const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/',(req,res)=>{
    const product = [{name:"toyota",price:"1,000,000",description:"taotoyota",image:"image/toyota.jpg"},
        {name:"honda",price:"1,200,000",description:"taohonda",image:"image/honda.png"},
        {name:"isuzu",price:"900,000",description:"taohonda",image:"image/isuzu.png"}]
    res.render('index.ejs',{products:product})
})

module.exports = router
  