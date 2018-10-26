const express = require('express');
const router = express.Router();
const Entry = require('../models/index');
const seed = require("../seed")

router.get("/", (req, res, next) => {
    res.render("landingpage");
})

router.get("/entries/:id", (req, res, next) => {
    Entry.findOne({ where: { id: req.params.id } }).then((entry) => {
        res.render('individual', {
            entry: entry
        })
    })
})

router.get("/search", (req, res, next) => {
    res.render('search');
})

router.get("/all", (req, res, next) => {
    Entry.findAll().then((entries) => {
        res.render('index', {
            title: "The Compendium of Ghara",
            entries: entries,
        })
    })
})

router.get("/api", (req, res, next) => {
    Entry.findAll().then((entries) => {
        res.json(entries)
    })
})

router.get('/seed', (req, res, next) => {
    console.log('helelelelelhehelhle')
    Entry.bulkCreate(seed)
        .then((entries) => {
            res.json(entries)
        })
})

router.get('/add', (req, res) => {
    res.render('addpage', {
        title: "The Compendium of Ghara",
    });
});

router.post('/add', (req, res) => {
    Entry.create({
        category: req.body.category,
        title: req.body.title,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        race: req.body.race,
        class: req.body.class,
        alignment: req.body.alignment,
        strength: req.body.strength,
        intelligence: req.body.intelligence,
        charisma: req.body.charisma,
        dexterity: req.body.dexterity,
        constitution: req.body.constitution,
        wisdom: req.body.wisdom,
        feats: req.body.feats,
        staticTraits: req.body.staticTraits,
        dynamicTraits: req.body.dynamicTraits,
        biography: req.body.biography,
        goals: req.body.goals
    }).then(() => {
        res.render('landingpage', {
            title: "The Compendium of Ghara"
        })
    }).catch(function (err) {
        console.log(err)
    })
})

router.get('*', (req, res) => {
    res.send("Oops, nothing here")
})

module.exports = router