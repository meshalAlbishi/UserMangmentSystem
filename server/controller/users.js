var Userdb = require('../model/User');

// create and save new user
exports.create = async (req, res) => {
    // validate requst
    if (!req.body) {
        return res.status(400).send({ message: "Content Can't be empty" });
    }

    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    });

    try {

        // let data = await user.save(user);
        // res.status(201).send(data);

        await user.save(user);
        res.status(201).redirect('/add-user');

    } catch (error) {

        res.status(500).send({
            message: error.message || 'Somthing went wrong while create account'
        });

    }
}

// get all users || get singal user
exports.find = async (req, res) => {
    try {
        let users;

        if (req.query.id) {
            // get specific user with id
            let id = req.query.id;

            users = await Userdb.findById(id);
            if (users === null) {
                return res.status(404).json({ message: `User with ID ${id} Not Found!` });
            }
        }

        else {
            // get all users    
            users = await Userdb.find();

            if (users.length === 0) {
                return res.status(200).send({ "message": "No Users found in the system" });
            }
        }


        res.status(200).send(users);

    } catch (error) {

        res.status(500).send({
            message: error.message || 'Somthing went wrong while get user(s)'
        });
    }
}

// update user by userID
exports.update = async (req, res) => {
    // validate requst
    if (!req.body) {
        return res.status(400).send({ message: "Content Can't be empty" });
    }

    try {

        let id = req.params.id;
        let user = await Userdb.findByIdAndUpdate(id, req.body, { useFindAndModifyfalse: false });

        if (user === null) {
            return res.status(404).json({ message: `User with ID ${id} Not Found!` });
        }


        user.status = req.body.status;

        res.send(user);

    } catch (error) {
        return res.status(500).json({ error: "500 Server Error while try update user" });
    }

}

// delete user by userID
exports.delete = async (req, res) => {

    try {
        let id = req.params.id;
        let user = await Userdb.findByIdAndDelete(id);

        if (user === null) {
            return res.status(404).json({ message: `User with ID ${id} Not Found!` });
        }

        res.send({ message: `User with ID ${id} deleted` });
    } catch (error) {
        return res.status(500).json({ error: "500 Server Error while try delete user" });
    }
}

