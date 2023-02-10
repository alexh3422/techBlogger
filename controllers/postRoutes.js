const express = require("express");
const router = require("express").Router();
const { Users, Posts, Comments } = require("../models");

router.get("/", (req, res) => {
  Posts.findAll({
    include: [
      {
        model: Users,
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
  if (!req.session.userId) {
    res
      .status(400)
      .json({ message: "You must be logged in to create a post." });
    return;
  }
  Posts.create({
    title: req.body.title,
    content: req.body.content,
    userId: req.session.userId,
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  Posts.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//posts from session user

router.get("/users", (req, res) => {
  if (!req.session.userId) {
    res
      .status(400)

      .json({ message: "You must be logged in " });
    return;
  }
  Posts.findAll({
    where: {
      userId: req.session.userId,
    },
    include: [
      {
        model: Users,
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

module.exports = router;
