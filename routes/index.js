module.exports = function Router(app) {
    this.app = app
    require('./main')(app);
}