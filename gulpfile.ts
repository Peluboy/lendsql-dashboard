const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return src("index.css").pipe(sass()).pipe(dest("css"));
}

function watchTask() {
  watch(["index.scss"]);
}

// const path = require("path");

// module.exports = {
//   entry: "./src/index.js",
//   output: {
//     filename: "bundle.js",
//     path: path.resolve(__dirname, "dist"),
//   },
//   module: {
//     rules: [
//       {
//         test: /\.scss$/,
//         use: [
//           "style-loader", // creates style nodes from JS strings
//           "css-loader", // translates CSS into CommonJS
//           "sass-loader", // compiles Sass to CSS
//         ],
//       },
//     ],
//   },
// };
