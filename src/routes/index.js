
const { productList, lastVisitedProductList } = require('../model/productList');
const authRoutes = require('./authRoutes');
const apiRoutes = require('../api/routes');
const productsRoutes = require('./productsRoutes');

const setRoutes = (app) => {

    app.use('/api', apiRoutes);

    app.use('/auth', authRoutes);

    app.use('/products', productsRoutes);

    app.get('/', (req, res) => {
        const offers = productList.filter(product => product.isOffer);

        res.render('index', {
            offers,
            lastVisitedProductList
        });
    });

    app.use('*', (req, res) => {
        res.render('404', {});
    })

};

module.exports = setRoutes;