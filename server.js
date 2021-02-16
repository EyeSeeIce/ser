const express = require('express')
const cors = require('cors')
const app = express()
const firebaseConfig = {
    apiKey: "AIzaSyC3CbtNPYY3HVaEECHx8PgKb6Jpcrx92HI",
    authDomain: "myawsometodolist.firebaseapp.com",
    databaseURL: "https://myawsometodolist-default-rtdb.firebaseio.com",
    projectId: "myawsometodolist",
    storageBucket: "myawsometodolist.appspot.com",
    messagingSenderId: "523212344821",
    appId: "1:523212344821:web:5b8d84865275a43e75e4bc",
    measurementId: "G-2W9ZKNRZC4"
};
const firebase = require('firebase/app')
const database = require('firebase/database')
firebase.initializeApp(firebaseConfig)
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 6001

app.post('/api', function (req, res) {
    firebase.database().ref(`users/${req.body.id}`).on('value', snp => {
        res.send(snp.val())
    })
});


app.listen(6001, () => console.log(`Server has been started on ${PORT} port...`))