var express = require('express');
var router = express.Router();
// var burger = require('../models/burger.js');
var models = require('../models');
var sequelizeConnection = models.sequelize;

// Create route for / root get request
router.get('/', function(req, res) {
    // Redirect to /burgers route
    res.redirect('/burgers');
});

// Create route for /burgers get request
router.get('/burgers', function(req, res) {

    // Select all burger entries from burgers db
    sequelizeConnection.sync()
    .then(function() {
        return models.burgers.findAll()
        .then(function(articles) {
            var burgerArray = [];
            for (var i = 0; i < articles.length; i++) {
                burgerArray.push(articles[i].dataValues);
            }
            // Render burger objects to index handlebar
            var burgerObj = {burger: burgerArray};
            res.render('index', burgerObj);
        });

    });

});

// Create route for /burgers/create post request
router.post('/burgers/create', function(req, res) {

    // Insert burger entry into burgers database
    sequelizeConnection.sync()
    .then(function() {
        return models.burgers.create({
            burger_name: req.body.name
        });
    })
    // Redirect to /burgers route to render udpate view
    .then(function() {
        res.redirect('/burgers');
    });

});

// Create route for /burgers/update put request
router.put('/burgers/update/:burgerId', function(req, res) {

    // Update devoured property to true
    sequelizeConnection.sync()
    .then(function() {
        models.burgers.update(
            {
                devoured: true
            },
            {
                where: { id: req.params.burgerId }
            }
        );
    })
    // Redirect to /burgers route to render udpate view
    .then(function() {
        res.redirect('/burgers');
    });
    
});

module.exports = router;