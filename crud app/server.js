const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const countController = require('./controllers/countController');

mongoose.connect('mongodb://steph:password123@ds125001.mlab.com:25001/tutorial', () => console.log('connected!'));

const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.put('/increase', countController.increaseCount)

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, './index.html')
// )});

app.listen(PORT, () => console.log('listening on...', PORT));