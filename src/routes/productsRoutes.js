
const express = require('express');
const { productList, lastVisitedProductList } = require('../model/productList');
const router = express.Router();


router.get('/', (req, res) => {
    const offers = productList.filter(product => product.isOffer);

    res.render('index', {
        offers,
        lastVisitedProductList
    });
});



module.exports = router;