const express = require("express");
const router = require("express").Router();
const { User, Posts } = require("../../models");

router.get("/", (req, res) => {
  Posts.findAll({
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  Posts.create({
    title: req.body.title,
    content: req.body.content,
    userId: req.body.userId,
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
