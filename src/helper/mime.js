const path = require('path');

const mimeTypes = {
	'html': 'text/html',
	'txt': 'text/plain',
	'css': 'text/css',
	'ico': 'image/x-icon',
	'jepg': 'image/jepg',
	'jpg': 'image/jepg',
	'js': 'text/javascript',
	'json': 'application/json'
};

module.exports = (filePath) => {
	let ext = path.extname(filePath).split('.').pop().toLowerCase();
	if(!ext){
		ext = filePath;
	}

	return mimeTypes[ext] ||mimeTypes['txt'];

}