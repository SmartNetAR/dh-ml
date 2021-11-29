
const authRoutes = require('./authRoutes');

const setRoutes = (app) => {

    app.use('/auth', authRoutes);

    app.get('/', (req, res) => {
        res.render('index', {});
    });

    app.use('*', (req, res) => {
        res.render('404', {});
    })

};

module.exports = setRoutes;