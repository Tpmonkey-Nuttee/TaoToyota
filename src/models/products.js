const sql3 = require('sqlite3')
const sqlite = sql3.verbose()
const DB = new sqlite.Database('./products.db', sql3.OPEN_READWRITE, connected);

function connected(err){
    if(err){
        console.log(err.message);
        return
    }
    console.log('Connected to SQlite DB')
}

let sql = `CREATE TABLE IF NOT EXISTS PRODUCTS(
    product_id INTEGER PRIMARY KEY,
    product_name TEXT NOT NULL,
    product_price INTEGER NOT NULL,
    product_description TEXT NOT NULL
)`;
DB.run(sql, [], (err)=>{
    if(err){
        console.log('error to create product table');
        return
    }
    console.log('CREATED TABLE')
});


module.exports = DB