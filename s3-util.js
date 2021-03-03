const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    region: 'us-east-1',
  });
  
exports.uploadFile = async (content, path, country, filename) => {
    const fileKey = `${path}/${country}/${filename}`;
    const params = {
        ACL: 'public-read',
        Bucket: 'bsp-products-catalog',
        Key: fileKey,
        Body: content,
        ContentType: 'text/csv;charset=utf-8',
      };
      await s3.putObject(params).promise();
    
}