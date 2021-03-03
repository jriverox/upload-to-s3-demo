# upload-to-s3-demo
## simple demonstration to upload a file to aws s3
This project is a simple demo, it simulates a aws lambda (see index.js), generate a small csv file and upload it to a aws S3 bucket.
Consider that if you want run local run npm start, but before you must run aws configure with a aws cli credential with s3 permission to write object.
For lambda case you must to provide a role with permission to the target s3 bucket.