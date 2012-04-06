var User = require('./user');
function UserCollection(app) {
    if (!app || !app.db) throw new Error("must have an app with a store")
    this.db = app.db;
}

UserCollection.prototype.create = function(params) {
    return new User(this.db.insert(params));
}

UserCollection.prototype.count = function(params) {
    return this.db.findAll().length;
}

UserCollection.prototype.findAll = function() {
    return this.db.findAll();
}

module.exports = UserCollection;