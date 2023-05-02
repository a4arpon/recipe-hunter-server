const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

const data = require('./data.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send(data)
    console.log("Hello World")
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})