const { createProxyMiddleware } =
    require('http-proxy-middleware');

module.exports = function (app) {
    app.use("/api",
        createProxyMiddleware({
            // server ke home page ka link
            target: 'http://localhost:3000',
            changeOrigin: true,
        })
    );
};
