const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/sperax-token-stats-api',
        createProxyMiddleware({
            target: 'https://staging-app.sperax.io',
            changeOrigin: true,
            logLevel:"debug"
        })
    );

    app.use(
        '/staking-api',
        createProxyMiddleware({
            target: 'https://staging-app.sperax.io',
            changeOrigin: true,
            logLevel:"debug"
        })
    );
    app.use(
        '/twitter-api',
        createProxyMiddleware({
            target: 'https://api.twitter.com',
            changeOrigin: true,
            logLevel:"debug",
            pathRewrite: {
                '^/twitter-api': '',
            },
        })
    );
};