const express = require('express');
const Paper = require('../models/Paper');
const router = express.Router();

// Get data from Mongo DB
router.get('/', async(req, res) => {
    try {
        const paper = await Paper.find();
        res.json(paper);
    } catch (err) {
        res.json({ message: err });
    }
});

// Get a specific data from Mongo DB
router.get('/:paperId', async(req, res) => {
    try {
        const paper = await Paper.findById(req.params.paperId);
        res.json(paper);    
    } catch (err) {
        res.json({ message: err });
    }     
});

// Insert Data into Mongo DB
router.post('/', async(req, res) => {
    const paper = new Paper({
        id: req.body.id,
        title: req.body.title,
        authors: req.body.authors,
        venue: req.body.venue,
        year: req.body.year,
        keywords: req.body.keywords,
        n_citation: req.body.n_citation,
        page_start: req.body.page_start,
        page_end: req.body.page_end,
        lang: req.body.lang,
        volume: req.body.volume,
        issue: req.body.issue,
        isbn: req.body.isbn,
        doi: req.body.doi,
        url: req.body.url,
        abstract: req.body.abstract
    });
    try {
        const savedPaper = await paper.save();
        res.json(savedPaper);
    } catch (err) {
        res.json({ message: err });
    } 
});

// Delete data from Mongo DB
router.delete('/:paperId', async(res, req) => {
    try {
        const removedPaper = await Paper.remove({ _id: req.params.paperId });
        res.json(removedPaper);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;