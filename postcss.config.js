/*
the postcss.config.js file is used to configure the postcss-loader that is used in your project. The postcss-loader is a webpack loader that is used to process your CSS files with PostCSS, which is a tool for transforming styles with JavaScript.
*/

module.exports = {
	plugins: [require('autoprefixer')],
};
