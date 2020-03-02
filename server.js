const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
var cors = require('cors');

// Create the server
const app = express();

//Connect to DB
connectDB();

app.use(cors());

app.use(express.json({ extended: false }));

//routes
app.use('/questions', require('./routes/questions'));
app.use('/category', require('./routes/category'));
app.use('/test60', require('./routes/test60'));

//static
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Mixing it up on port ${PORT}`);
});
