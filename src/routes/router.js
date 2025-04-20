const express = require('express')
const router = express.Router()
const path = require('path')
const product = [{name:"toyota",price:"1,000,000",description:"taotoyota",image:"image/toyota.jpg"},
    {name:"honda",price:"1,200,000",description:"taohonda",image:"image/honda.png"},
    {name:"isuzu",price:"900,000",description:"taohonda",image:"image/isuzu.png"}]

router.get('/',(req,res)=>{
    res.render('index.ejs',{products:product})
})

router.get('/addform',(req,res)=>{
    res.render('add_product.ejs')
})

router.get('/edit',(req,res)=>{
    res.render('edit_product.ejs',{products:product})
})

router.post('/insert',(req,res)=>{
    console.log(req.body);
    res.render('add_product.ejs')
})

module.exports = router
  