const express = require('express');
const app = express();
const port = 3000;
const router = require('./router');

app.use(express.json());

app.use('/user/', router);
app.use('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => console.log(`The server is running at PORT ${port}`));
