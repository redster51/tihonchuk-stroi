const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Project = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    dateOfBuilding: {
        type: String
    },
    photos: {
        type: Array
    }
}, {collection: 'Project'})