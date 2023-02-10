const Users = require("./Users");
const Posts = require("./Posts");
const Comments = require("./Comments");

Posts.belongsTo(Users, {
  onDelete: "CASCADE",
});

Users.hasMany(Posts, {
  onDelete: "CASCADE",
});

Comments.belongsTo(Users, {
  onDelete: "CASCADE",
});

Users.hasMany(Comments, {
  onDelete: "CASCADE",
});

Comments.belongsTo(Posts, {
  onDelete: "CASCADE",
});

Posts.hasMany(Comments, {
  onDelete: "CASCADE",
});




module.exports = { Users, Posts, Comments };
