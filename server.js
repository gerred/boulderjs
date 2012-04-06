var express = require('express'),
    stylus = require('stylus'),
    nib = require('nib'),
    public = __dirname + "/public";

var app = express.createServer();

function compile(str, path) {
    return stylus(str)
        .set('filename', path)
        .set('compress', true)
        .use(nib());
}

app.configure(function() {
    app.use(stylus.middleware({
        src: public,
        compile: compile
    }));
    app.use(express.static(public));
    app.set('view engine', 'jade');
    app.set('view options', {layout: false});
    app.use(express.logger());
})

var Router = require('./routes/index');
var router = new Router(app);

var port = process.env.PORT || 8080;

app.listen(port);

console.log("Server listening on port %d in %s mode",
    port,
    app.settings.env
);