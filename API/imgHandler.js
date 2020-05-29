'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk');

const fs = require('fs');
const AWS = require('aws-sdk');

const s3 = new AWS.S3;
const dynamoDb = new AWS.DynamoDB.DocumentClient();

const bucket = process.env.BUCKET;
const table = process.env.IMG_TABLE;

const postImg = (event, context, callback) => {
    const requestBody = JSON.parse(event.body);
}




/*
const uploadFile = (fileName) => {
    const fileContent = fs.readFileSync(fileName);

    const params = {
        Bucket: BUCKET_NAME,
        Key: 'cat.jpg', //file you want to save in S3
        Body: fileContent,
    };

    s3.upload(params, function(err, data) {
        if(err){
            throw err;
        }

        console.log(`file uploaded successfully. ${data.Location}`);
    });
};

uploadFile('cat.jpg');
*/