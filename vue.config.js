module.exports = {
	devServer: {
		overlay: false,
		disableHostCheck: true,
		port: 3000,
	},
	transpileDependencies: ['vuetify'],
	pages: {
		index: {
			// entry for the page
			entry: 'src/main.js',
			// the source template
			template: 'public/index.html',
			// output as dist/index.html
			filename: 'index.html',
			// when using title option,
			// template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
			title: '코주부',
			// chunks to include on this page, by default includes
			// extracted common chunks and vendor chunks.
			chunks: ['chunk-vendors', 'chunk-common', 'index'],
		},
	},
};
