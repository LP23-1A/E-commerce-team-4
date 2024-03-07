var AWS = require("aws-sdk");

AWS.config.update({ region: 'us-west-2'});

s3 = new AWS.s3({ apiVersion: "2006-03-01"});

s3.listBuckets(function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Buckets);
  }
});

// Load the AWS SDK for Node.js
// var AWS = require("aws-sdk");
// // Set the region
// AWS.config.update({ region: "Asia-Pacific" });

// // Create S3 service object
// s3 = new AWS.S3({ apiVersion: "2006-03-01" });

// // Call S3 to list the buckets
// s3.listBuckets(function (err, data) {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log("Success", data.Buckets);
//   }
// });