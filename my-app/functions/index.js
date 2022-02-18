const functions = require('firebase-functions');
const app = require('express')();
const auth = require('./util/auth');

const {
    getReservation,
    getTaxForm,
    Uploadfiles,
} = require('./APIs/TaxOnline')

const {
    loginUser,
    signUpUser,
    uploadProfilePhoto,
    getUserDetail,
    updateUserDetails
} = require('./APIs/users')

// Tax Online
app.get('/TaxOnline:TaxOnlineid', auth, getReservation);
app.post('/TaxOnline:TaxOnlineid',auth, getTaxForm);
app.post('/TaxOnline:TaxOnlineid',auth, Uploadfiles);

// Users
app.post('/login', loginUser);
app.post('/signup', signUpUser);
app.post('/user/image', auth ,uploadProfilePhoto);
app.post('/user', auth ,updateUserDetails);
app.get('/user', auth, getUserDetail);

exports.api = functions.https.onRequest(app);