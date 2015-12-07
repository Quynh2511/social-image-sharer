var Generator = function (uuid) {
    this.uuid = uuid;
};

Generator.prototype.setOptions = function (options) {
    this.options = options;
    return this;
};

Generator.prototype.setLinkTemplate = function (linkTemplate) {
    this.linkTemplate = linkTemplate;
    return this;
};

Generator.prototype.setOutputDirectory = function (outputDirectory) {
    this.outputDirectory = outputDirectory;
    return this;
};

Generator.prototype.generate = function (extension) {
    var uuidName        = this.uuid.v4() + '.' + extension;
    var linkTemplate    = this.linkTemplate;
    var outputDirectory = this.outputDirectory;

    return {
        uuid     : uuidName,
        link     : linkTemplate.replace('%FILE%', uuidName),
        physical : outputDirectory + '/' + uuidName
    }
};

module.exports = Generator;