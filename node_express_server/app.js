const express = require('express'),
    mongoose = require('mongoose'),
    configDB = require('./database/dataBase')

mongoose.Promise = global.Promise;
mongoose.connect(configDB.dataBase, {useNewUrlParser: true, useUnifiedTopology: true}).then( 
    () => {console.log('DataBase is connected')},
    (err) => {console.log('Database connection error...\n' + err)});

const app = express();
const host = '127.0.1.1';
const port = process.env.PORT || 7000;

app.get('/home', (req, res) => {
    res.status(200).type('text/plain');
    res.send('Home page');
});

app.get('/about', (req, res) => {
    res.status(200).type('text/plain');
    res.send('About page');
});

app.post('/api/admin', (req, res) => {
    res.status(200).type('text/plain');
    res.send('Create admin request');
});

app.post('/api/user', (req, res) => {
    res.status(200).type('text/plain');
    res.send('Create user request');
});

app.use((req, res, next) => {
    res.status(404).type('text/plain');
    res.send('Not found');
});

const server = app.listen(port, host, function () {
    console.log(`Server listens http://${host}:${port}`);
});
