import paramalama from "paramalama";



const rHTTPs = /^http[s]?:\/\/.*?\//;
const rTrails = /^\/|\/$/g;
const rHashQuery = /#.*$|\?.*$/g;
const rWild = /^:/;
const rWilders = {
    num: /^[0-9]+$/,
    slug: /^[A-Za-z]+[A-Za-z0-9-_.]*$/,
};



export default class MatchRoute {
    constructor ( routes ) {
        this._routes = routes ? this._cleanRoutes( routes ) : [];
    }


    getRoutes () {
        return this._routes;
    }


    config ( routes ) {
        routes = ( typeof routes === "string" ) ? [ routes ] : routes;

        this._routes = this._routes.concat( this._cleanRoutes( routes ) );

        return this;
    }


    test ( url ) {
        return this.parse( url, this._routes ).matched;
    }


    params ( url ) {
        return this.parse( url, this._routes ).params;
    }


    compare ( route, url ) {
        return this.parse( url, [route] );
    }


    parse ( url, routes ) {
        const route = this._cleanRoute( url );
        const uris = route.split( "/" );
        const uLen = uris.length;
        const iLen = routes.length;
        let segMatches,
            isStar,
            params,
            match,
            ruris,
            regex,
            cond,
            ret;

        for ( let i = 0; i < iLen; i++ ) {
            // Flag "*" route
            isStar = (routes[ i ] === "*");

            // Start fresh each iteration
            // Only one matched route allowed
            ret = {
                matched: false,
                route: null,
                uri: [],
                params: {},
                query: paramalama( url ),
            };

            ruris = routes[ i ].split( "/" );

            // Handle route === "/"
            if ( route === "/" && routes[ i ] === "/" ) {
                ret.matched = true;
                ret.route = routes[ i ];
                ret.uri = "/";

                break;
            }

            // If the actual url doesn't match the route in segment length,
            // it cannot possibly be considered for matching so just skip it
            if ( ruris.length !== uris.length && !isStar ) {
                continue;
            }

            segMatches = 0;

            for ( let j = 0; j < uLen; j++ ) {
                // Matched a variable uri segment
                if ( rWild.test( ruris[ j ] ) ) {
                    // Try to split on conditions
                    params = ruris[ j ].split( "!" );

                    // The variable segment
                    match = params[ 0 ];

                    // The match condition
                    cond = params[ 1 ];

                    // With conditions
                    if ( cond ) {
                        // We support this condition
                        if ( rWilders[ cond ] ) {
                            regex = rWilders[ cond ];
                        }

                        // Test against the condition
                        if ( regex && regex.test( uris[ j ] ) ) {
                            segMatches++;

                            // Add the match to the config data
                            ret.params[ match.replace( rWild, "" ) ] = uris[ j ];
                            ret.uri.push( uris[ j ] );
                        }

                    // No conditions, anything goes
                    } else {
                        segMatches++;

                        // Add the match to the config data
                        ret.params[ match.replace( rWild, "" ) ] = uris[ j ];
                        ret.uri.push( uris[ j ] );
                    }

                // Defined segment always goes
                } else {
                    if ( uris[ j ] === ruris[ j ] ) {
                        segMatches++;

                        ret.uri.push( uris[ j ] );
                    }
                }
            }

            // Handle a uri segment match OR "*" wildcard everything
            if ( segMatches === uris.length || isStar ) {
                ret.matched = true;
                ret.route = routes[ i ];
                ret.uri = ( isStar ) ? route : ret.uri.join( "/" );

                break;
            }
        }

        return ret;
    }


    _cleanRoute ( route ) {
        if ( route !== "/" ) {
            route = route.replace( rHTTPs, "" );
            route = route.replace( rTrails, "" );
            route = route.replace( rHashQuery, "" );
            route = route.replace( rTrails, "" );
        }

        if ( route === "" ) {
            route = "/";
        }

        return route;
    }


    _cleanRoutes ( routes ) {
        for ( let i = routes.length; i--; ) {
            routes[ i ] = this._cleanRoute( routes[ i ] );
        }

        return routes;
    }
}
