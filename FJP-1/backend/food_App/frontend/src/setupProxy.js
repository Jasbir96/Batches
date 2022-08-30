const { createProxyMiddleware } =
    require('http-proxy-middleware');

module.exports = function (app) {
    app.use("/api",
        createProxyMiddleware({
            // server ke home page ka link
            target: 'https://cultapp18.herokuapp.com/',
            changeOrigin: true,
        })
    );
};
