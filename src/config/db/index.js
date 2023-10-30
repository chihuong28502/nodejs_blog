const mongoose = require('mongoose');
const url = 'mongodb://0.0.0.0:27017';
async function connect() {
    try {
        mongoose.connect(`${url}/f8_education_dev`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('connect success');
    } catch (error) {
        console.error('connect fail');
    }
}
module.exports = { connect };
