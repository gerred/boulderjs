var server = require('../server');
var Browser = require('zombie'),
browser = new Browser();

describe('loads home page', function() {
    it("Loads the index", function(done) {
        browser.visit("http://localhost:8080", function() {
            browser.text("h1").should.include("boulder.js");
            browser.text("title").should.include("Boulder.js");
            browser.text('.welcome').should.include("Hack Night");
            done();
       }) 
    });
});