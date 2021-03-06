//const mongoose = require('mongoose');
const db = require('../mongoConnection');

const PaperSchema = db.Schema({
    id: { type: String, required: false },
    title: { type: String },
    authors: { type: Array },
    venue: { type: Array },
    year: { type: Number },
    keywords: { type: Array },
    n_citation: { type: Number },
    page_start: { type: String },
    page_end: { type: String },
    lang: { type: String },
    volume: { type: String },
    issue: { type: String },
    isbn: { type: String},
    doi: { type: String },
    url: { type: Array },
    abstract: { type:String }
});

module.exports = db.model('Paper', PaperSchema);