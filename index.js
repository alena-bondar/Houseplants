const express = require('express')
const app = express()
const port = 3000

const fs = require('fs')

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
})
app.get('/catalog', (req, res) => {
    let fileContent = fs.readFileSync('src/script/catalog/products.json');
    let products = JSON.parse(fileContent);
    res.render('catalog', {
        products: products
    });
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})