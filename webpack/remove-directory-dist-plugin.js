const exec = require('child_process').exec;

class RemoveDirectoryDistPlugin {

	constructor(options) {
		this.options = options;
	}

	apply(compiler) {

		compiler.plugin('compile', () => {
			exec(`rm -r ${this.options.path}`, function() {
				console.log('Finish')
			})
		})

	}

}

module.exports = RemoveDirectoryDistPlugin;