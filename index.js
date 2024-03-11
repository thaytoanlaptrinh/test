const express = require('express');
const { createServer } = require('http');
const os = require('os');

const app = express();

const server = createServer(app);
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

server.listen(port, () => {
    const ifaces = os.networkInterfaces();
    let ipv6Address;

    // Lặp qua tất cả các interface để tìm IPv6
    Object.keys(ifaces).forEach((ifname) => {
        ifaces[ifname].forEach((iface) => {
            if (iface.family === 'IPv6' && !iface.internal) {
                ipv6Address = iface.address;
            }
        });
    });

    console.log(`Server listening on http://[${ipv6Address}]:${port}`);
});
