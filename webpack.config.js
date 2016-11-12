<<<<<<< HEAD

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
=======

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
>>>>>>> 1075867593ce3bcdc3c81965ff384918044b682a
