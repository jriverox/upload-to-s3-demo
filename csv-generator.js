const { parse } = require('json2csv');
const data = require('./data-sample.json');

exports.generate = () => {
    const fields = ['id', 'name.first', 'name.last'];
    const options = { fields };
    return parse(data, options);
}