var NullSharer = require('./adapters/null');

var Manager = function (adapters) {
    this.adapters = adapters;
    this.adapters.null = new NullSharer();
};

Manager.prototype.sharer = function (adapter) {
    return this.adapters[adapter] ||  this.adapters.null;
};

module.exports = Manager;