const express = require('express');
// ...
const login = require('./routes/routes.login');
const user = require('./routes/user.routes');

const app = express();

app.use(express.json());
app.use('/login', login);
app.use('/user', user);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
