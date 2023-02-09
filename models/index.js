const User = require('./Users');
const Posts = require('./Posts');

Posts.belongsTo (User, {
   onDelete : 'CASCADE'

});

User.hasMany (Posts
);






module.exports = { User, Posts};


