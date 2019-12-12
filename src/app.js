const http = require('http');
const chalk = require('chalk');
const path = require('path');
const conf = require('./config/defaultConfig');
const route = require('./helper/route');

const server = http.createServer((req, res) => {
        const filePath = path.join(conf.root, req.url);
        console.log(filePath);
        route(req, res, filePath);
});

server.listen(conf.port, conf.hostname, () => {
        const address = `http://${conf.hostname}:${conf.port}`;
        console.log(`Server started at ${chalk.green(address)}`);
});


function init(arr) {
        for (let index = 0; index < arr.length; index++) {
                const element = array[index];

        }
}