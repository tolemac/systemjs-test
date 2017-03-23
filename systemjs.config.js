/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    bundles: {
      'bundles/vendor.js': [
        "node_modules/*",
        "vendor.js"
      ],
      'bundles/lazy.js': [
        "app/lazy/*"
      ],
      'bundles/app.js': [
        "main.js",
        "app/*"
      ]
    },
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/',
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',
      'vendor': "./vendor.js",
      'angular': "./angular.js",

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

       // other libraries
      'rxjs': 'npm:rxjs',

      "ng2-bootstrap": "npm:ng2-bootstrap/bundles/ng2-bootstrap.umd.min.js",

      // typescript helpers
      "tslib": "npm:tslib/tslib.js",
      // Loaders
      "css": "npm:systemjs-plugin-css/css.js",
      "text": "npm:systemjs-plugin-text/text.js",

      // Más librerías
      "tolefocus": "./node_modules/tolefocus/dist/bundles/tolefocus.bundle.umd.js",
      "moment": "npm:moment",
      "jquery": "npm:jquery/dist/jquery.js",
      "autonumeric": "npm:autonumeric/autoNumeric.js",
      "bootstrap": "npm:bootstrap/dist/css/bootstrap.css",
      "select2": "npm:select2",
      "select2-bootstrap-theme": "npm:select2-bootstrap-theme",
      "toastr": "npm:toastr"
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      'bundles/vendor.js': {
        format: "system"
      },
      'bundles/app.js': {
        format: "system"
      },
      app: {
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js',
        main: "Rx.js"
      },
      bootstrap: {
        defaultExtension: "css"
      },
      moment: {
        main: "min/moment-with-locales.js", defaultExtension: "js"
      }
    },
    meta: {
      "*.css": { loader: "css" },
      "*.html": { loader: "text" },
      "autonumeric": {
        globals: {
          "$": "jquery"
        }
      }
    }
  });
})(this);
