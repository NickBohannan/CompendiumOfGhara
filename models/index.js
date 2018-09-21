const Sequelize = require('sequelize')

let db

if (process.env.HOME == "/Users/nickbohannan") {
    // the application is executed on Heroku ... use the postgres database
    db = new Sequelize('postgres://localhost:5432/Compendium_of_Ghara')
} else {
    db = new Sequelize(process.env.DATABASE_URL)
}

const Entry = db.define("entry", {
    category: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    slug: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    title: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    firstName: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    lastName: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    imageurl: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    race: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    class: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    alignment: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    strength: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    intelligence: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    charisma: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    dexterity: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    constitution: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    wisdom: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    feats: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    staticTraits: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    dynamicTraits: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    biography: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    goals: {
        type: Sequelize.TEXT,
        allowNull: true
    },
})

module.exports = Entry