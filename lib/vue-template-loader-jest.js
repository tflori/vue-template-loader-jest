const compile = require('vue-template-loader/lib/modules/template-compiler');
const Builder = require('vue-template-loader/lib/builder/builder')

module.exports = {
    process(src, filename, config, options) {
        const compiled = compile(src, {
            filename,
            prettify: false,
        });

        const builder = new Builder();

        // Inject compiled render functions
        builder.addLine(compiled.code, compiled.map);

        // Start to write the exported function
        builder.enterBlock('module.exports = function (_exports) {', '}', () => {

            // Extract component options object and inject render functions
            builder.addLine(`
              var options = typeof _exports === 'function'
                ? _exports.options
                : _exports
              options.render = render
              options.staticRenderFns = staticRenderFns
            `)

            builder.addLine('return _exports')
        });

        return builder.generate();
    }
}
