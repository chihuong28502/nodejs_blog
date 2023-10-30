const Course = require('../models/Course');
const {
    mutipleMongooseToObject,
    mongooseToObject,
} = require('../../util/mongoose');
class SiteController {
    // GET /course/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('course/show', {
                    course: mongooseToObject(course),
                });
            })
            .catch(next);
    }
}
module.exports = new SiteController();
