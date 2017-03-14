var gulp = require("gulp");
var Builder = require("systemjs-builder");

gulp.task("bundle", (cb) => {
    var builder = new Builder("./", "./systemjs.config.js");

    builder.bundle("main.js - [app/**/*] - [main.js]", "./bundles/vendor.js",
        { minify: false })
        .then(function () {
            cb();
        })
        .catch(function (err) {
            cb(err);
        });
});