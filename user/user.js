function User(params) {
    this.name = params.name;
    this.email = params.email;
    this.avatar = params.avatar;
    this.url = params.url;
    this.twitter = params.twitter;

    return this;
}

module.exports = User;