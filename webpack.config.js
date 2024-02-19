const path = require("path");
module.exports = {
  mode: "production",
  entry: "./nonograms/src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./nonograms/dist"),
  },
};
