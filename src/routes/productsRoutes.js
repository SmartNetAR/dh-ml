
const express = require('express');
const { productList } = require('../model/productList');
const router = express.Router();


router.get('/', (req, res) => {
    let products = productList;
    if (req.query.search) {
        products = products.filter(product => {
            return product.description.toLowerCase().includes(req.query.search.toLowerCase());
        });
    }

    res.render('products', {
        products
    });
});



module.exports = router;