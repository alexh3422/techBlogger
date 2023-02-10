const express = require("express");
const router = express.Router();
const { Posts, Users, Comments } = require("../models");

router.get("/", (req, res) => {
  if (!req.session.userId) {
    res.redirect("/login");
  } else {
    Posts.findAll({
      include: [
        {
          model: Users,
          attributes: ["username"],
        },
        {
          model: Comments,
          attributes: ["comment_text"],
        },
      ],
    }).then((PostData) => {
      
      const hbsPost = PostData.map((Post) => Post.toJSON());
      
      

      res.render("home", {
        allPosts: hbsPost.reverse(),
      });
    });
  }
});

router.get("/profile", (req, res) => {
  if (!req.session.userId) {
    res.redirect("/login");
  } else {
    Posts.findAll({
      where: {
        userId: req.session.userId,
      },
      include: [Users],
    }).then((PostData) => {
      
      const hbsPost = PostData.map((Post) => Post.toJSON());
      
      
      res.render("profile", {
        myPosts: hbsPost.reverse(),
      });
    });
  }
});

router.get("/login", (req, res) => {
  res.render("login");
});
router.get("/signup", (req, res) => {
  res.render("signup");
});
router.get("/profile", (req, res) => {
  if (!req.session.userId) {
    res.redirect("/login");
  } else {
    res.render("profile");
  }
});

module.exports = router;
