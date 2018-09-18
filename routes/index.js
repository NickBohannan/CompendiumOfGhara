const express = require('express');
const router = express.Router();
const Entry = require('../models/index');
const seed = require("../seed")

router.get("/", (req, res, next) => {
    res.render("landingpage");
})

router.get("/entries/:ident", (req, res, next) => {
    Entry.findOne({ where: { id: req.params.ident } }).then((entry) => {
        res.render('individual', {
            entry: entry
        })
    })
})

router.get("/all", (req, res, next) => {
    Entry.findAll().then((entries) => {
        res.render('index', {
            title: "The Compendium of Ghara",
            entries: entries
        })
    })
})

router.get("/api", (req, res, next) => {
    res.json(Entry)
})

router.get('/seed', (req, res, next) => {
    console.log('helelelelelhehelhle')
    Entry.bulkCreate(seed)
        .then((entries) => {
            res.json(entries)
        })
})

router.get('/add', (req, res) => {
    res.render('addpage');
});

module.exports = router