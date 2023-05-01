const express = require('express');
const app = express();
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.status(200).send("Hello world!");
});

app.get('/ping', (req, res) => {
    res.status(200).send(`pong: TimeNow : ${new Date().toUTCString()}`);
});

app.listen(port, function () {
    console.log(`Example app listening at http://localhost:${port}`);
});