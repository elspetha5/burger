var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },

    updateOne: function(condition, cb) {
        orm.updateOne("burgers", "devoured = 1", condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;