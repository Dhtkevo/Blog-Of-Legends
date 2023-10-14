const express = require('express');
const router = express.Router();

const Comment = require('../models/Comment');


router.get('/', async (req, res, next) => {
    let allComments = await Comment.find();
    res.json(allComments);

});

router.get('/:id', async (req, res) => {
    //Get specific comment from database
    try {
        let comment = await Comment.findById(req.params.id).exec();
        res.json(comment);
    } catch (error) {
        console.log(error);
        res.json({ message: error.message });
    }

});

router.post('/new', async (req, res) => {
    // Get required information from form
    // Create new comment to database with info
    try {
        const comment = await Comment.create({ author_name: req.body.author_name, text: req.body.text, post_id: req.body.post_id });
        res.json(comment);
    } catch (error) {
        res.json({ message: error.message });
    }
});

router.patch('/:id', async (req, res) => {
    try {
        await Comment.findOneAndUpdate({ _id: req.params.id }, {
            text: req.body.text,
        });
        res.json({ message: "Comment Updated Sucessfully!" });
    } catch (error) {
        res.json({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Comment.findByIdAndDelete(req.params.id);
        res.json({ message: "Comment deleted sucessfully!" });
    } catch (error) {
        res.json({ message: error.message });
    }
});

module.exports = router;
