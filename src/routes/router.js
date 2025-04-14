const express = require('express')
const router = express.Router()
const path = require('path')
const index_page = path.join(__dirname,'../index.html')
const products_page1 = path.join(__dirname,'../products1.html')
const products_page2 = path.join(__dirname,'../products2.html')

router.get('/', (req, res) => {
    res.status(200)
    res.type('text/html')
    res.sendFile(index_page)
})
  
router.get('/products/:id',(req,res) => {
    res.status(200)
    res.type('text/html')
    const products_id = req.params.id
    if(products_id === "1"){
        res.sendFile(products_page1)
    }else if(products_id === "2"){
        res.sendFile(products_page2)
    }else{
        res.redirect('/')
    }

})

module.exports = router
  