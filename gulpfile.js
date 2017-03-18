var gulp = require("gulp");
var Builder = require("systemjs-builder");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");

var polyfillFiles = [
    "node_modules/core-js/client/shim.min.js",
    "node_modules/zone.js/dist/zone.js",
    "node_modules/systemjs/dist/system.src.js"
];

gulp.task("bundle:poly", () => {
    return gulp.src(polyfillFiles)
        .pipe(concat('polyfills.js'))
        .pipe(uglify())
        .pipe(gulp.dest('bundles'));
});

gulp.task("bundle:vendor", (cb) => {
    var builder = new Builder("./", "./systemjs.config.js");

    builder.bundle("vendor.js - [node_modules/@angular/**/*] - [node_modules/ng2-bootstrap/**/*]", "./bundles/vendor.js",
        { minify: true })
        .then(function () {
            cb();
        })
        .catch(function (err) {
            cb(err);
        });
});

gulp.task("bundle:app", (cb) => {
    var builder = new Builder("./", "./systemjs.config.js");

    builder.bundle("main.js - vendor.js", "./bundles/app.js",
        { minify: false })
        .then(function () {
            cb();
        })
        .catch(function (err) {
            cb(err);
        });
});

gulp.task("bundle:lazymodule", (cb) => {
    var builder = new Builder("./", "./systemjs.config.js");

    builder.bundle("app/lazy/lazy.module.js - main.js", "./bundles/lazy.js",
        { minify: true })
        .then(function () {
            cb();
        })
        .catch(function (err) {
            cb(err);
        });
});

gulp.task("bundle", ["bundle:poly", "bundle:vendor", "bundle:app", "bundle:lazymodule"]);