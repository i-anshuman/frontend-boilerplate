const path = require('path');

module.exports = {
  devtool: "none",
  entry: {
    main: "./src/index.js"
    // more entry points here
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      }
    ]
  }
};
