var pathJoin = require("path").join;

module.exports = {
  extends: [
    pathJoin(__dirname, "eslint-react.js"),
    "plugin:@next/next/recommended",
  ],
};
