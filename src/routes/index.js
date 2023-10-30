const newsRouter = require('./news');
const coursesRouter = require('./courses');
const sitesRouter = require('./site');
function route(app) {
    app.use('/courses', coursesRouter);
    app.use('/news', newsRouter);
    app.use('/', sitesRouter);
}

module.exports = route;
