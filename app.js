const admin = require('firebase-admin');
const serviceAccount = require('./ServiceAccountKey.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
// function to check for existing records, and to write to DB if record already exists
const order = async (orderID, payload) => {
    try {
        // Connecting to DB
        const db = admin.firestore();
        // Querying DB for specific ID
        const dataRequest = await db.collection('orders').doc(orderID).get();
        // Method to check if record exists
        const resultExists = dataRequest.exists;
        // If it doesn't exist
        if (!resultExists) {
            //Write record with object
            await db.collection('orders').doc(orderID).set(payload);
            //query database for record
            const reqWritten = await db.collection('orders').doc(orderID).get();
            // grab it
            const getWritten = await reqWritten.data();
            // print it to the console
            return `The written data is ${JSON.stringify(getWritten,null, 2)}`
        } else {
            //If the data exist, print this string
            return `The data ${JSON.stringify(payload,null, 2)} already exists lulz`
        }
    } catch (err) {
        console.log("The error is", err)
    }
}

// Writing data to a NoSQL DB
(async () => {

    console.log(await order('223252', {
        'first': 'Alan',
        'middle': 'Mathison',
        'last': 'Turing',
        'born': 1912
    }))

})()