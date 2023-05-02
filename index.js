const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

const data = require('./data.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send(data)
});
// chef Filter By id
app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const selectedData = data.find(n => n._id === id);
    res.send(selectedData)
})
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})