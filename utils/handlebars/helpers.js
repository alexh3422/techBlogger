const Handlebars = require("handlebars");

function registerHelpers() {
  Handlebars.registerHelper("sort", function (context, property, order) {
    if (order === "desc") {
      return context.sort(function (a, b) {
        if (a[property] > b[property]) {
          return -1;
        } else {
          return 1;
        }
      });
    } else {
      return context.sort(function (a, b) {
        if (a[property] < b[property]) {
          return -1;
        } else {
          return 1;
        }
      });
    }
  });
}

module.exports = {
  registerHelpers: registerHelpers,
};
