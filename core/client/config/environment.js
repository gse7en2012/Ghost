/* jshint node: true */
/* jscs:disable disallowEmptyBlocks */

module.exports = function (environment) {
    var ENV = {
        modulePrefix: 'ghost',
        environment: environment,
        baseURL: '/',
        locationType: 'trailing-history',
        EmberENV: {
            FEATURES: {
                // Here you can enable experimental features on an ember canary build
                // e.g. 'with-controller': true
            }
        },

        APP: {
              // Here you can pass flags/options to your application instance
              // when it is created
        },

        'simple-auth': {
            authenticationRoute: 'signin',
            routeAfterAuthentication: 'posts',
            authorizer: 'simple-auth-authorizer:oauth2-bearer',

            localStorageKey: '<overriden by initializers/simple-auth-env>'
        },

        'simple-auth-oauth2': {
            refreshAccessTokens: true,

            serverTokenEndpoint: '<overriden by initializers/simple-auth-env>',
            serverTokenRevocationEndpoint: '<overriden by initializers/simple-auth-env>'
        },

        resizeServiceDefaults: {
            debounceTimeout: 100,
            heightSensitive: false,
            widthSensitive: true,
            injectionFactories: []
        }
    };

    if (environment === 'development') {
        // ENV.APP.LOG_RESOLVER = true;
        ENV.APP.LOG_ACTIVE_GENERATION = true;
        ENV.APP.LOG_TRANSITIONS = true;
        ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
        ENV.APP.LOG_VIEW_LOOKUPS = true;
    }

    if (environment === 'test') {
        // Testem prefers this...
        ENV.baseURL = '/';
        ENV.locationType = 'none';

        // keep test console output quieter
        ENV.APP.LOG_ACTIVE_GENERATION = false;
        ENV.APP.LOG_VIEW_LOOKUPS = false;

        ENV.APP.rootElement = '#ember-testing';

        ENV['simple-auth'] = {
            store: 'simple-auth-session-store:ephemeral'
        };
    }

    return ENV;
};
