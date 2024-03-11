const express = require('express');
const app = express();
const port = 3000; // Chọn một cổng, ví dụ: 3000

// Định nghĩa route cho trang chủ
app.get('/', (req, res) => {
    res.send('Hello, this is your Express server!');
});

// Lắng nghe các kết nối đến cổng đã chọn
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
