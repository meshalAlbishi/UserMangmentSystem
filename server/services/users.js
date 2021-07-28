const axios = require('axios');

exports.homeRoutes = async (req, res) => {

    try {
        // make get request to '/api/users'
        let response = await axios.get('http://localhost:5000/api/users');

        // render the page with data
        res.render('index', { users: response.data });

    } catch (error) {
        res.status(400).send(err);
    }

};

exports.add_user = (req, res) => {
    res.render('add_user');
};

exports.update_user = async (req, res) => {
    try {
        // make get request to '/api/users'
        let response = await axios.get('http://localhost:5000/api/users', {
            params: {
                id: req.query.id
            }
        });

        // render the page with data
        res.render('update_user', { user: response.data });

    } catch (error) {
        res.status(400).send(err);
    }

    // res.render('update_user');
};