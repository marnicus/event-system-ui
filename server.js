
const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const mockData = require('./mockData.js');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(bodyParser.json());
app.get('/api/events', (req, res) => {
    res.send(mockData.getEvents);
});
app.listen(port, () => console.log(`Listening on port ${port}`));