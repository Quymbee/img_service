const fs = require('fs');
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
  accessKeyId: process.env.ID,
  secretAccessKey: process.env.SECRET,
});

const uploadFile = (fileName) => {
  const fileContent = fs.readFileSync(fileName);

  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key: 'cat.jpg', //file you want to save in S3
    Body: fileContent,
  };

  s3.upload(params, function (err, data) {
    if (err) {
      throw err;
    }

    console.log(`file uploaded successfully. ${data.Location}`);
  });
};

uploadFile('cat.jpg');
