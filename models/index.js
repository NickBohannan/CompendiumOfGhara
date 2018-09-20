const Sequelize = require('sequelize')
const db = new Sequelize("postgres://jisqkijhgjfopt:9cbfda68e47740cf055639be760ae7c1743b2c0c47f996dc090f412b35171533@ec2-54-225-97-112.compute-1.amazonaws.com:5432/df90u7r67d1g9c")

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

Entry.sync();

module.exports = Entry