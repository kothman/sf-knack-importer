const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: './src/index.js',
    output: {
	filename: 'app.js',
	path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    devtool: 'source-map',
    optimization: {
	splitChunks: {
	    cacheGroups: {
		styles: {
		    name: 'styles',
		    test: /\.s?css$/,
		    chunks: 'all',
		    enforce: true
		}
	    }
	}
    },
    module: {
	rules: [
	    {
		test: /\.pug$/,
		loader: 'pug-plain-loader'
	    }, {
		test: /\.vue$/,
		loader: 'vue-loader',
	    }, {
		test: /\.scss$/,
		use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
	    }, {
		test: /\.html$/,
		use: {
		    loader: 'file-loader',
		    options: { name: '[name].[ext]' }
		}
	    }, {
		test: /\.js$/,
		exclude: /node_modules/,
		use: {
		    loader: 'babel-loader',
		    options: {
			presets: [
			    ['@babel/preset-env',
			    {
				'targets': { 'esmodules': true },
				'modules': ['commonjs']
			    }]
			],
			plugins: ['@babel/syntax-dynamic-import']
		    }
		}
	    }
	]
    },
    plugins: [
	new MiniCssExtractPlugin({
	    filename: "app.css"
	}),
	new VueLoaderPlugin()
    ]
};
