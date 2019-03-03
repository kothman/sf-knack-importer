'use strict';

const Hapi = require('hapi');
const routes = require('./routes.js');

const server = Hapi.server({
    port: 3000,
    host: '0.0.0.0'
});

const init = async () => {
    await server.register(require('inert'));
    let routes = require('./routes.js');
    routes.forEach( (route) => {
	server.route(route);
    });
    await server.start();
    console.log(`Server running at ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(-1);
});

init();
