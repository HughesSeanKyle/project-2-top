/*
In short, react-app-rewired is a tool that allows you to customize the Webpack configuration of your React application created by create-react-app without ejecting. It allows you to use other webpack plugins and loaders like Autoprefixer.
*/

const postcss = require('react-app-rewire-postcss');

module.exports = function override(config, env) {
	config = postcss(config);
	return config;
};
