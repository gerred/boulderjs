var express = require('express'),
    stylus = require('stylus'),
    nib = require('nib'),
    public = __dirname + '/public',
    stylesheets = __dirname + '/assets/css';

var app = module.exports = express();

function compile(str, path) {
    return stylus(str)
        .set('filename', path)
        .set('compress', true)
        .use(nib());
}

app.configure(function() {
    app.use(stylus.middleware({
        src: stylesheets,
        dest: public,
        compile: compile
    }));
    app.use(express.static(public));
    app.set('view engine', 'jade');
    app.use(express.logger());
})

var Router = require('./routes/index');
new Router(app);

var port = process.env.PORT || 8080;

app.listen(port);

console.log('Server listening on port %d in %s mode',
    port,
    app.settings.env
);

var http = require('http')
