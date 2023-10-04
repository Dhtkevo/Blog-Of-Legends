const express = require('express');

const router = express.Router();

const User = require('../models/User');

const bcrypt = require('bcryptjs');

let jwt = require('jsonwebtoken');



router.get('/', async (req, res, next) => {
    let allUsers = await User.find();
    res.json(allUsers);
});

router.get('/:id', async (req, res) => {
    //Get specific user from database
    try {
        let user = await User.findById(req.params.id).exec();
        res.json(user);
    } catch (error) {
        console.log(error);
        res.json({ message: error.message });
    }
});

// Register
router.post("/register", async (req, res) => {

    try {
        const { username, password } = req.body;

        if (!(username && password)) {
            res.status(400).send("All input is required");
        }

        const oldUser = await User.findOne({ username });

        if (oldUser) {
            return res.status(409).send("User Already Exist. Please Login");
        }

        encryptedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            username,
            password: encryptedPassword,
        });

        const token = jwt.sign(
            { user_id: user._id, username },
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h",
            }
        );

        user.token = token;

        res.status(201).json(user);
    } catch (err) {
        res.json({ messsage: err.message });
    }

});

// Login
router.post("/login", async (req, res) => {
    // Our login logic starts here
    try {
        // Get user input
        const { username, password } = req.body;

        // Validate user input
        if (!(username && password)) {
            res.status(400).send("All input is required");
        }
        // Validate if user exist in our database
        const user = await User.findOne({ username });

        if (user && (await bcrypt.compare(password, user.password))) {
            // Create token
            const token = jwt.sign(
                { user_id: user._id, username },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            );

            // save user token
            user.token = token;

            // user
            res.status(200).json(user);
        }
        res.status(400).send("Invalid Credentials");
    } catch (err) {
        console.log(err);
    }
    // Our register logic ends here
});

router.post('/new', async (req, res) => {
    // Get required information from form
    // Create new user to databse with info
    try {
        await User.create({ username: req.body.username, password: req.body.password });
        res.redirect('/');
    } catch (error) {
        res.json({ message: error.message });
    }
});

router.patch('/:id', async (req, res) => {
    try {
        await User.findOneAndUpdate({ _id: req.params.id }, {
            username: req.body.username,
            password: req.body.password,
        });
        res.json({ message: "User Updated Sucessfully!" });
    } catch (error) {
        res.json({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: "User deleted sucessfully!" });
    } catch (error) {
        res.json({ message: error.message });
    }
});

module.exports = router;
