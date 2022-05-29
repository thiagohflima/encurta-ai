const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
const routesOfLinks = require('./routes/link');
const routesOfUsers = require('./routes/user');
const routesToRedirect = require('./routes/redirect');

const app = express();
const port = 5000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/link', routesOfLinks);
app.use('/user', routesOfUsers);
app.use('/r/', routesToRedirect);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

sequelize.sync().then(() => {
  console.log('DB connected');
});
