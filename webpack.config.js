
var path = require("path");

var DIST_DIR =path.resolve(__dirname,"dist");
var SRC_DIR =path.resolve(__dirname,"src");


var config = {
  entry: SRC_DIR + "\\screens\\main\\index.js",
  output: {
     path:DIST_DIR + "\\app",
     filename:"bundle.js",
     publicPath: "\\app\\ "
 },
 module:{
   loaders:[
     {
       test:/\.js?/, // tell webpackwhich file should you look at
       include :SRC_DIR,
       loader : "babel-loader",
       query :{
         presets : ["react","es2015","stage-2"]
       }
     }
   ]
 }
};

module.exports = config;
