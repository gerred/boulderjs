function MemoryStore() {
    this.store = [];
}

MemoryStore.prototype.insert = function(object) {
    this.store.push(object);
    return object;
}

MemoryStore.prototype.findAll = function() {
    return this.store;
}

module.exports = MemoryStore;