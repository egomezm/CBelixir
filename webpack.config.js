const elixir = require( "coldbox-elixir" );
const webpack = require("webpack");
/*
|--------------------------------------------------------------------------
| Elixir Asset Management
|--------------------------------------------------------------------------
|
| Elixir provides a clean, fluent API for defining some basic Gulp tasks
| for your ColdBox application. By default, we are compiling the Sass
| file for our application, as well as publishing vendor resources.
|
 */


module.exports = elixir( mix => {
	// Mix css
	mix.css([
			"/resources/assets/css/myStyles.css"
		],
		{
			entryDirectory: "",
			outputDirectory: "includes/css/",
			name: "mainBundle",
			devtool: 'none'
	});
	// Vendor Mix css
	mix.css([
			"/node_modules/bootstrap/dist/css/bootstrap.css",
			"/node_modules/datatables/media/css/jquery.dataTables.min.css",
			// "/node_modules/datatables.net-bs4/css/dataTables.bootstrap4.min.css"
		],
		{
			entryDirectory: "",
			outputDirectory: "includes/css/",
			name: "vendorBundle",
			devtool: 'none'
		});


	// Mix js
	mix.js([
		"resources/assets/js/myScripts.js"
	],
		{
			entryDirectory: "",
			outputDirectory: "includes/js/",
			name: "mainBundle",
			devtool: 'none'
		});
	// Vendor Mix js
	mix.js([
		// "node_modules/bootstrap/dist/js/bootstrap.js",
		"resources/assets/js/App.js"
	],
		{
			entryDirectory: "",
			outputDirectory: "includes/js/",
			name: "vendorBundle",
			devtool: 'none'
		});

// 	mix.sass( "App.scss" )
// 		//.copy( "node_modules/bootstrap-sass/assets/fonts", "includes/fonts" )
// 		.js(
// 			[
// 				"node_modules/jquery/dist/jquery.min.js"//,
// 				//"node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js"
// 			],
// 			{
// 				devtool: 'none',
// 				entryDirectory: "",
// 				outputDirectory: "includes/js/",
// 				name: "vendorBundle"
// 			}
// 		)
// 		// .css(
// 		// 	[
// 		// 		// "node_modules/jquery/dist/jquery.min.js"//,
// 		// 		"node_modules/bootstrap/dist/css/bootstrap-grid.min.css"
// 		// 	],
// 		// 	{
// 		// 		devtool: 'none',
// 		// 		entryDirectory: "",
// 		// 		outputDirectory: "includes/css/",
// 		// 		name: "vendorBundle"
// 		// 	}
// 		//);
} );


/*
var path = require('path');
var webpack = require('webpack');

module.exports = {
	mode: 'development',
	devtool: 'none',
	entry: {
		main: [
				"./resources/assets/js/myScripts.js"
			],
		vendor: [
				"./node_modules/jquery/dist/jquery.min.js"
			]
	},
	output: {
		path: path.resolve(__dirname, './includes/test/'),
		filename: '[name]Bundle.js'
		// libraryTarget: 'var',
		// library: 'EntryPoint'
	},
	plugins: [
		new webpack.ProvidePlugin(
			{
				$: 		'jquery',
				jQuery: 'jquery',
			}
		)
	]
};

*/

// Use the in you layout or views like this
// (in JS)
// #elixir( "css/myapp.css" )#
// (in HTML)
// <script src="#elixirPath( "js/app.js" )#"></script>