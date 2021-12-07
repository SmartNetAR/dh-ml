
const authRoutes = require('./authRoutes');
const productsRoutes = require('./productsRoutes');

const setRoutes = (app) => {

    app.use('/auth', authRoutes);

    app.use('/products', productsRoutes);

    app.get('/', (req, res) => {
        res.redirect('/products');
    });

    app.use('*', (req, res) => {
        res.render('404', {});
    })

};

module.exports = setRoutes;