const express = require('express');
// ...
const login = require('./routes/routes.login');
const user = require('./routes/user.routes');
const categories = require('./routes/categories.routes');
const post = require('./routes/posts.routes');

const app = express();

app.use(express.json());
app.use('/login', login);
app.use('/user', user);
app.use('/categories', categories);
app.use('/post', post);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
