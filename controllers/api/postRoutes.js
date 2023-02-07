const router = require('express').Router();
const { User, Posts  } = require('../../models');


// GET all posts 

router.get('/', (req, res) => {
    Posts.findAll({
        attributes: [
        'id',
        'title',
        'post_text',
        'created_at'
        ],
        include: [
        {
            model: User,
            attributes: ['username']
        }
        ]
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
        });
    });


    module.exports = router;