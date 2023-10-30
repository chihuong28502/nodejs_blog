const express = require('express');
const path = require('path');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, 'public')));

const route = require('./routes/index');
const db = require('./config/db/index');

// connect db
db.connect();
//test
app.use(
    // a
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
// app.use(morgan("combined"));

// cấu hình handlebars
// asd
app.engine(
    'hbs',
    exphbs.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// routes init
route(app);
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
