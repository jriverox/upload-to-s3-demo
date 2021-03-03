
const { generate } = require('./csv-generator');
const { uploadFile } = require('./s3-util');
const { dateToString } = require('./date-util');

exports.handler = async (event, context) => {
 try {
     const csv = generate();
     console.log(csv);
     const country = 'pe';
     const campaing = '202104';
     const dateStr = dateToString(new Date());
     const filename = `bsp-product-catalog-${country}-${campaing}-${dateStr}.csv`;
     await uploadFile(csv, 'requests', 'pe', filename);
     return {
         statusCode: 200,
         body: 'ok'
     }
 } catch (error) {
     console.error(error);
     throw error;
 }
}