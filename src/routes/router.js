const express = require('express')
const router = express.Router()
const DB = require('../models/products')

router.get('/',(req,res)=>{
    let product = []
    const sql = `SELECT * FROM PRODUCTS`
    try{
        DB.all(sql, [], (err, rows)=>{
            if(err){
                throw err;
            }
            rows.forEach(row=>{
                product.push({name: row.product_name, price: row.product_price, description: row.product_description, image: row.product_imagepath})
            })
            res.render('index.ejs',{products:product})
        })
    }catch(err){
        console.log(err.message)
        res.status(467)
    }
    // res.render('index.ejs',{products:product})
})

router.get('/addform',(req,res)=>{
    res.render('add_product.ejs')
})

router.get('/edit',(req,res)=>{
    let product = []
    const sql = `SELECT * FROM PRODUCTS`
    try{
        DB.all(sql, [], (err, rows)=>{
            if(err){
                throw err;
            }
            rows.forEach(row=>{
                product.push({name: row.product_name, price: row.product_price, description: row.product_description, image: row.product_imagepath})
            })
            res.render('edit_product.ejs',{products:product})
        })
    }catch(err){
        console.log(err.message)
        res.status(467)
    }
    // res.render('edit_product.ejs',{products:product})
})

router.post('/insert',(req,res)=>{
    let product = []
    const sql = `INSERT INTO PRODUCTS(product_name, product_price, product_description) VALUES (? , ? , ?)`
    let newID
    try{
        DB.run(sql, [req.body.name, req.body.price, req.body.description], function(err){
            if(err) throw err;
            newID = this.lastID; //auto increment ID
            res.status(201);
            res.render('add_product.ejs')
        })
    }catch(err){
        console.log(err.message)
        res.status(467)
        res.render('fail_to_up')
    }
    // console.log(req.body);
    // res.render('add_product.ejs')
})






module.exports = router
  