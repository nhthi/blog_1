const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;

// http logger
app.use(morgan('combined'));

//template engine

app.engine('hbs', handlebars.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.use(express.static(path.join(__dirname, 'public')));

const route = require('./routes');

route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
