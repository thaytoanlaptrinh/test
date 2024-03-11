const express = require('express');
const httpProxy = require('http-proxy');

const app = express();
const proxy = httpProxy.createProxyServer({});

app.get('/', (req, res) => {
    // Chuyển hướng yêu cầu đến máy chủ khác với cổng 9663
    proxy.web(req, res, { target: 'http://localhost:9663/' });
});

const server = app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
