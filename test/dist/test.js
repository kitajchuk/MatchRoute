/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./test/test.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./MatchRoute.js":
/*!***********************!*\
  !*** ./MatchRoute.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MatchRoute; });\n/* harmony import */ var paramalama__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! paramalama */ \"./node_modules/paramalama/paramalama.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar rHTTPs = /^http[s]?:\\/\\/.*?\\//;\nvar rTrails = /^\\/|\\/$/g;\nvar rHashQuery = /#.*$|\\?.*$/g;\nvar rWild = /^:/;\nvar rWilders = {\n  num: /^[0-9]+$/,\n  slug: /^[A-Za-z]+[A-Za-z0-9-_.]*$/\n};\n\nvar MatchRoute = /*#__PURE__*/function () {\n  function MatchRoute(routes) {\n    _classCallCheck(this, MatchRoute);\n\n    this._routes = routes ? this._cleanRoutes(routes) : [];\n  }\n\n  _createClass(MatchRoute, [{\n    key: \"getRoutes\",\n    value: function getRoutes() {\n      return this._routes;\n    }\n  }, {\n    key: \"config\",\n    value: function config(routes) {\n      routes = typeof routes === \"string\" ? [routes] : routes;\n      this._routes = this._routes.concat(this._cleanRoutes(routes));\n      return this;\n    }\n  }, {\n    key: \"test\",\n    value: function test(url) {\n      return this.parse(url, this._routes).matched;\n    }\n  }, {\n    key: \"params\",\n    value: function params(url) {\n      return this.parse(url, this._routes).params;\n    }\n  }, {\n    key: \"compare\",\n    value: function compare(route, url) {\n      return this.parse(url, [route]);\n    }\n  }, {\n    key: \"parse\",\n    value: function parse(url, routes) {\n      var route = this._cleanRoute(url);\n\n      var uris = route.split(\"/\");\n      var uLen = uris.length;\n      var iLen = routes.length;\n      var segMatches, isStar, params, match, ruris, regex, cond, ret;\n\n      for (var i = 0; i < iLen; i++) {\n        // Flag \"*\" route\n        isStar = routes[i] === \"*\"; // Start fresh each iteration\n        // Only one matched route allowed\n\n        ret = {\n          matched: false,\n          route: null,\n          uri: [],\n          params: {},\n          query: Object(paramalama__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(url)\n        };\n        ruris = routes[i].split(\"/\"); // Handle route === \"/\"\n\n        if (route === \"/\" && routes[i] === \"/\") {\n          ret.matched = true;\n          ret.route = routes[i];\n          ret.uri = \"/\";\n          break;\n        } // If the actual url doesn't match the route in segment length,\n        // it cannot possibly be considered for matching so just skip it\n\n\n        if (ruris.length !== uris.length && !isStar) {\n          continue;\n        }\n\n        segMatches = 0;\n\n        for (var j = 0; j < uLen; j++) {\n          // Matched a variable uri segment\n          if (rWild.test(ruris[j])) {\n            // Try to split on conditions\n            params = ruris[j].split(\"!\"); // The variable segment\n\n            match = params[0]; // The match condition\n\n            cond = params[1]; // With conditions\n\n            if (cond) {\n              // We support this condition\n              if (rWilders[cond]) {\n                regex = rWilders[cond];\n              } // Test against the condition\n\n\n              if (regex && regex.test(uris[j])) {\n                segMatches++; // Add the match to the config data\n\n                ret.params[match.replace(rWild, \"\")] = uris[j];\n                ret.uri.push(uris[j]);\n              } // No conditions, anything goes\n\n            } else {\n              segMatches++; // Add the match to the config data\n\n              ret.params[match.replace(rWild, \"\")] = uris[j];\n              ret.uri.push(uris[j]);\n            } // Defined segment always goes\n\n          } else {\n            if (uris[j] === ruris[j]) {\n              segMatches++;\n              ret.uri.push(uris[j]);\n            }\n          }\n        } // Handle a uri segment match OR \"*\" wildcard everything\n\n\n        if (segMatches === uris.length || isStar) {\n          ret.matched = true;\n          ret.route = routes[i];\n          ret.uri = isStar ? route : ret.uri.join(\"/\");\n          break;\n        }\n      }\n\n      return ret;\n    }\n  }, {\n    key: \"_cleanRoute\",\n    value: function _cleanRoute(route) {\n      if (route !== \"/\") {\n        route = route.replace(rHTTPs, \"\");\n        route = route.replace(rTrails, \"\");\n        route = route.replace(rHashQuery, \"\");\n        route = route.replace(rTrails, \"\");\n      }\n\n      if (route === \"\") {\n        route = \"/\";\n      }\n\n      return route;\n    }\n  }, {\n    key: \"_cleanRoutes\",\n    value: function _cleanRoutes(routes) {\n      for (var i = routes.length; i--;) {\n        routes[i] = this._cleanRoute(routes[i]);\n      }\n\n      return routes;\n    }\n  }]);\n\n  return MatchRoute;\n}();\n\n\n\n//# sourceURL=webpack:///./MatchRoute.js?");

/***/ }),

/***/ "./node_modules/paramalama/paramalama.js":
/*!***********************************************!*\
  !*** ./node_modules/paramalama/paramalama.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (str) {\n  var query = decodeURIComponent(str).match(/[#|?].*$/g);\n  var ret = {};\n\n  if (query) {\n    query = query[0].replace(/^\\?|^#|^\\/|\\/$|\\[|\\]/g, \"\");\n    query = query.split(\"&\");\n\n    for (var i = query.length; i--;) {\n      var pair = query[i].split(\"=\");\n      var key = pair[0];\n      var val = pair[1];\n\n      if (ret[key]) {\n        // #2 https://github.com/kitajchuk/paramalama/issues/2\n        // This supposedly will work as of ECMA-262\n        // This works since we are not passing objects across frame boundaries\n        // and we are not considering Array-like objects. This WILL be an Array.\n        if ({}.toString.call(ret[key]) !== \"[object Array]\") {\n          ret[key] = [ret[key]];\n        }\n\n        ret[key].push(val);\n      } else {\n        ret[key] = val;\n      }\n    }\n  }\n\n  return ret;\n});\n\n//# sourceURL=webpack:///./node_modules/paramalama/paramalama.js?");

/***/ }),

/***/ "./test/test.js":
/*!**********************!*\
  !*** ./test/test.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MatchRoute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../MatchRoute */ \"./MatchRoute.js\");\n\nvar routes = [// Known route\n\"some/route\", // Unknown route\n\"another/:slug\", // Enforce Number on last URI segment\n\"also/:slug/:num!num\"];\nvar matcher = new _MatchRoute__WEBPACK_IMPORTED_MODULE_0__[\"default\"](routes); // Test url against routes\n\nconsole.log(\"test\", matcher.test(\"http://localhost:9999/some/route\")); // Compare a route against a url\n\nconsole.log(\"compare\", matcher.compare(\"some/:slug\", \"http://localhost:9999/some/route\")); // Parse a url against routes config\n\nconsole.log(\"parse\", matcher.parse(\"http://localhost:9999/some/route\", routes)); // Get params property from .parse()\n\nconsole.log(\"params\", matcher.params(\"http://localhost:9999/another/thing\")); // Set routes config after initialization\n// Wildcard any route that is non-external to your domain\n\nmatcher.config([\"*\"]);\n\n//# sourceURL=webpack:///./test/test.js?");

/***/ })

/******/ });