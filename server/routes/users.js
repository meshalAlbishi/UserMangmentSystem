const express = require('express');
const router = express.Router();

const services = require('../services/users');
const controller = require('../controller/users');


/**
 * @description root route
 * @method GET/
 */
router.get('/', services.homeRoutes);

/**
 * @description add users route
 * @method GET/add-user
 */
router.get('/add-user', services.add_user);

/**
 * @description update users route
 * @method GET/update-user
 */
router.get('/update-user', services.update_user);


// api 

// create 
router.post('/api/users', controller.create);

// get all || get by id
router.get('/api/users', controller.find);

// update 
router.put('/api/users/:id', controller.update);

// delete
router.delete('/api/users/:id', controller.delete);

module.exports = router;