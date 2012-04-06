var UserCollection = require('../user/user_collection')
var User = require('../user/user')
var MemoryStore = require('../stores/memory_store')
describe('UserCollection', function() {
    it('should allow creation of an empty collection without an error', function() {
        var app = {db: new MemoryStore()};
        var userCollection = new UserCollection(app);
        userCollection.count().should.equal(0);
    })

    describe("#create", function() {
        it('should allow users to be added', function() {
            var app = {db: new MemoryStore()}
            var userCollection = new UserCollection(app);
            userCollection.count().should.equal(0);
            userCollection.create({name: 'mittens'});
            userCollection.count().should.equal(1);
        })

        it('should return an object of type person', function() {
            var app = {db: new MemoryStore()}
            var userCollection = new UserCollection(app);
            var user = userCollection.create({name: 'mittens'});
            (user instanceof User).should.be.true
        })
    });

    describe("#findAll", function() {
        it('should return a list of persons', function() {
            var app = {db: new MemoryStore()}
            var userCollection = new UserCollection(app);
            var user1 = {name: 'mittens'}
            var user2 = {name: 'foo'}
            userCollection.create(user1)
            userCollection.create(user2)
            userCollection.count().should.equal(2);
        });
    });

})