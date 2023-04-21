const express = require('express')
const router = express.Router()
const { Posts } = require('../models')
const { validateToken } = require('../middlewares/Authmiddleware')



router.get("/", async (req, res) => {
    const listOfPosts = await Posts.findAll()
    res.json(listOfPosts)
});

router.post("/", validateToken, async (req, res) => {
    const post = req.body
    await Posts.create(post)
    res.json(post)

})

module.exports = router