const router = require("express").Router();
const { Users, Posts } = require("../models");
const bcrypt = require("bcrypt");
router.get("/", (req, res) => {
  Users.findAll()
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.send("logged out");
});

router.get("/:id", (req, res) => {
  Users.findOne({
    where: {
      id: req.params.id,
    },
    attributes: { exclude: ["password"] },
    include: [Posts],
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/login", (req, res) => {
  Users.findOne({
    where: {
      username: req.body.username,
    },
  })
    .then((userData) => {
      if (!userData) {
        return res.status(401).json({ msg: "incorrect email or password" });
      } else {
        if (bcrypt.compareSync(req.body.password, userData.password)) {
          req.session.userId = userData.id;
          req.session.userUsername = userData.username;
          return res.json(userData);
        } else {
          return res.status(401).json({ msg: "incorrect email or password" });
        }
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "Try Again!", err });
    });
});

router.post("/signup", (req, res) => {
  Users.findOne({
    where: {
      username: req.body.username,
    },
  }).then((userData) => {
    if (userData) {
      alert = "username already exists";
      return res.status(401).json({ msg: "username already exists" });
    } else {
      Users.create({
        username: req.body.username,
        password: req.body.password,
      }).catch((err) => {
        console.log(err);
        res.status(500).json({ msg: "error", err });
      });
      res.status(200).json({ msg: "password was successfully created" });
    }
  });
});

router.delete("/:id", (req, res) => {
  Users.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
