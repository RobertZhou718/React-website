const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');

const app = express();

const {
    signup,
    login,
  } = require('./apis/user');

// users routes
app.post('/signup', signup);
app.post('/login', login);

exports.api = functions.https.onRequest(app);

//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
