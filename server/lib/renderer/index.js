module.exports.Renderer  = Renderer  = require('./renderer');
module.exports.Resolver  = Resolver  = require('./phantom-page-resolver');
module.exports.Generator = Generator = require('./filename-generator');

module.exports = function (options) {
    var resolver = new Resolver();
    var generator = new Generator(require('node-uuid'));
    var renderer = new Renderer(resolver, generator);

    resolver
        .setOptions(options.phantom)
    ;

    generator
        .setLinkTemplate(options.renderer.linkTemplate)
        .setOutputDirectory(options.renderer.outputDirectory)
    ;

    renderer
        .setFormat(options.renderer.format)
        .setQuality(options.renderer.quality)
    ;

    return renderer;
};