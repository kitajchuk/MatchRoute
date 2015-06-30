MatchRoute
==========

> Handles wildcard route matching against urls with !num and !slug condition testing.



## Installation
MatchRoute will build with its dependencies to `dist` when installed with `npm`.

```shell
# Dist located at node_modules/properjs-matchroute/dist/
npm install properjs-matchroute
```


## Usage
```javascript
var matchroute = new MatchRoute([
    // Known route
    "some/route",
    
    // Unknown route
    "another/:slug",
    
    // Unknown route, enforce Number on last uri
    "also/:slug/:num!num"
]);

// Test url against routes
matchroute.test( url );

// Compare a route against a url
matchroute.compare( route, url );

// Parse a url against routes config
matchroute.parse( url, routes );

// Get params property from .parse()
matchroute.params( url );

// Set routes config
matchroute.config( routes );

// Wildcard any route that is non-external to your domain
var matchroute = new MatchRoute( ["*"] );
```
