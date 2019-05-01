//@ts-check
const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet')
const {order} = require('./dbLogic');
const {data} = require('./formatData');

const app = express();

app.use(helmet())
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
    extended: true
    }));

app.post('/order', async (req, res, next) => {
    
    res.status(200).send(req.body);
    return await next();
});

app.use('/order', async (req, res) => {
    // write to the DB here
    const formatMe = await data(req.body);
    const orderID = formatMe[0].Order_ID;
    console.log(`The order ID is ${formatMe[0].Order_ID}`);
   await order(orderID, formatMe[0]);
   console.log("The last bit of log data for formatted is", formatMe[0]);
   console.log(`The last bit of log data for unformatted is", ${JSON.stringify(req.body.order.products, null, 2)}, ${new Date().toLocaleTimeString()}`
   );

});


exports.Testing = functions.https.onRequest(app);
