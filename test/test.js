import MatchRoute from "../MatchRoute";

const routes = [
    // Known route
    "some/route",

    // Unknown route
    "another/:slug",

    // Enforce Number on last URI segment
    "also/:slug/:num!num"
];

const matcher = new MatchRoute( routes );

// Test url against routes
console.log( "test", matcher.test( "http://localhost:9999/some/route" ) );

// Compare a route against a url
console.log( "compare", matcher.compare( "some/:slug", "http://localhost:9999/some/route" ) );

// Parse a url against routes config
console.log( "parse", matcher.parse( "http://localhost:9999/some/route", routes ) );

// Get params property from .parse()
console.log( "params", matcher.params( "http://localhost:9999/another/thing" ) );

// Set routes config after initialization
// Wildcard any route that is non-external to your domain
matcher.config( ["*"] );
