const express = require('express');
const cors = require('cors');

const Connectdb = require('./config/db');
const app = express();
const morgan = require('morgan');
const user_auth = require('./routes/users');
const jobs = require('./routes/analyzer');

Connectdb();

app.use(cors());
app.use(morgan('dev'));

app.use(express.json({ extended: false }));
app.use('/user', user_auth);
app.use('/jobs', jobs);

const PORT = process.env.PORT || 80 ;

app.listen(PORT, () => {
  console.log(`Hey! listening to you on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send({ msg: 'Hello' });
});