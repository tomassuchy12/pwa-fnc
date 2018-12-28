import Register from './auth/register.js';
import * as _ from 'lodash';

const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

export const register = functions.https.onRequest((req, res) => {
    res.header('Access-Control-Allow-Methods', 'POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') {
        res.send(200);
        return;
    }
    const allowedFields = [
        'firstMame',
        'lastName',
        'email',
        'password',
    ];
    const body = req.body;

    let missingRequired = null;
    ['firstName', 'lastName', 'email', 'password'].forEach(key => {
        if (!body[key]) {
            missingRequired = key;
        }
    });
    if (missingRequired) {
        res.status(400).send({ message: `Missing ${missingRequired}.` });
        return;
    }

    Register(_.pick(body, allowedFields).then(() => {
        res.status(204).end();
    })
        .catch(err => {
            console.error('Error při registraci', err);
            res.status(500).send({ message: 'Unknown Error' });
        }));
};
