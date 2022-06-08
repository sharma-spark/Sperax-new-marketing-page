const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/sperax-token-stats-api',
        createProxyMiddleware({
            target: 'https://app.sperax.io',
            changeOrigin: true,
            logLevel:"debug"
        })
    );

    app.use(
        '/staking-api',
        createProxyMiddleware({
            target: 'https://app.sperax.io',
            changeOrigin: true,
            logLevel:"debug"
        })
    );
};