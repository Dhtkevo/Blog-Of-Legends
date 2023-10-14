const express = require('express');
const router = express.Router();

const Post = require('../models/Post');


router.get('/', async (req, res, next) => {
  let publishedPosts = await Post.find();
  res.json(publishedPosts);

});

router.get('/:id', async (req, res) => {
  //Get specific post from database
  try {
    let post = await Post.findById(req.params.id).populate('user_id').exec();
    res.json(post);
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }

});

router.post('/new', async (req, res) => {
  // Get required information from form
  // Create new post to databse with info
  try {
    await Post.create({ title: req.body.title, text: req.body.text, published: req.body.published, user_id: req.body.user_id });
    res.redirect('/posts');
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    await Post.findOneAndUpdate({ _id: req.params.id }, {
      title: req.body.title,
      text: req.body.text,
      published: req.body.published
    });
    res.json({ message: "Post Updated Sucessfully!" });
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: "Post deleted sucessfully!" });
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
