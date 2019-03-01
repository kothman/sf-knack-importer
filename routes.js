const JSForce = require('jsforce');
const Env = require('./.env.js');
const Boom = require('boom');
const sleep = require('sleep');

module.exports = [
    {
	method: 'GET',
	path: '/{param*}',
	handler: {
	    directory: {
		path: 'dist',
		index: ['index.html']
	    }
	}
    }, {
	method: 'GET',
	path: '/sf',
	handler: function(req, h) {
	    let oauth2 = new JSForce.OAuth2({
		clientId: Env.consumerKey,
		clientSecret: Env.consumerSecret,
		redirectUri: Env.callbackUrl
	    });
	    if (req.query.code) {
		let conn = new JSForce.Connection({ oauth2: oauth2 });
		let promise = new Promise( (resolve, reject) => {
		    conn.authorize(req.query.code, function(err, userInfo) {
			if (err)
			    reject(err);
			else {
			    let response = h.redirect('/?access_token=' + conn.accessToken + '&instance_url=' + conn.instanceUrl);
			    resolve(response);
			}
		    });
		});
		return promise;
	    } else {
		return h.redirect(oauth2.getAuthorizationUrl());
	    }
	}
    }, {
	method: 'GET',
	path: '/sf/objects',
	handler: function(req, h) {
	    // for some reason, headers come through in all lowercase, should probably figure out what's going on
	    if (!req.headers['x-sf-access-token'] || !req.headers['x-sf-instance-url']) {
		let err = Boom.badRequest('Must provide access token and instance URL as headers X-SF-Access-Token and X-SF-Instance-URL');
		console.log(req.headers);
		err.output.statusCode = 400;
		throw err;
	    }
	    let oauth2 = new JSForce.OAuth2({
		clientId: Env.consumerKey,
		clientSecret: Env.consumerSecret,
		redirectUri: Env.callbackUrl
	    });
	    let conn = new JSForce.Connection({
		oauth2: oauth2,
		accessToken: req.headers['x-sf-access-token'],
		instanceUrl: req.headers['x-sf-instance-url']
	    });
	    let promise = new Promise( (resolve, reject) => {
		conn.describeGlobal( (err, res) => {
		    if (err)
			throw err;
		    console.log(res.sobjects);
		    resolve(h.response(res.sobjects));
		});
	    });
	    return promise;
	}
    }, {
	method: 'GET',
	path: '/sf/describe/{object}',
	handler: function(req, h) {
	    if (!req.headers['x-sf-access-token'] || !req.headers['x-sf-instance-url']) {
		let err = Boom.badRequest('Must provide access token and instance URL as headers X-SF-Access-Token and X-SF-Instance-URL');
		console.log(req.headers);
		err.output.statusCode = 400;
		throw err;
	    }

	    let oauth2 = new JSForce.OAuth2({
		clientId: Env.consumerKey,
		clientSecret: Env.consumerSecret,
		redirectUri: Env.callbackUrl
	    });
	    let conn = new JSForce.Connection({
		oauth2: oauth2,
		accessToken: req.headers['x-sf-access-token'],
		instanceUrl: req.headers['x-sf-instance-url']
	    });
	    let promise = new Promise( (resolve, reject) => {
		conn.describe(req.params.object, (err, meta) => {
		    if (err)
			throw err;
		    console.log(meta.fields);
		    resolve(h.response(meta.fields));
		});
	    });
	    return promise;
	}
    }, {
	method: 'POST',
	path: '/export',
	handler: function(req, h) {
	    if (!req.headers['x-sf-access-token'] || !req.headers['x-sf-instance-url']) {
		let err = Boom.badRequest('Must provide access token and instance URL as headers X-SF-Access-Token and X-SF-Instance-URL');
		console.log(req.headers);
		err.output.statusCode = 400;
		throw err;
	    }

	    // Should probably do some verification to ensure payload is in correct format
	    if (!req.payload.mappings || req.payload.mappings.length === 0 || !req.payload.sfObject) {
		let err = Boom.badRequest('Bad format for payload, expected mappings and sfObject to be present.');
		throw err;
	    }
	    console.log(req.payload);

	    let fields = [];
	    req.payload.mappings.forEach( (m, i) => {
		if (!fields.includes(m.sfField))
		    fields.push(m.sfField);		
	    });
	    let queryStatement = 'SELECT ' + fields.join(', ') + ' from ' + req.payload.sfObject;
	    console.log(queryStatement);
	    
	    let oauth2 = new JSForce.OAuth2({
		clientId: Env.consumerKey,
		clientSecret: Env.consumerSecret,
		redirectUri: Env.callbackUrl
	    });
	    let conn = new JSForce.Connection({
		oauth2: oauth2,
		accessToken: req.headers['x-sf-access-token'],
		instanceUrl: req.headers['x-sf-instance-url']
	    });
	    let promise = new Promise( (resolve, reject) => {
		conn.query(queryStatement, (err, result) => {
		    console.log('Fetching sojbects from Salesforce.');
		    console.log(err, result);
		    if (err) {
			let response = h.response({status: 'error', error: err});
			response.statusCode = 400;
			resolve(response);
		    } else {
			resolve(h.response({status: 'success', result: result}));
		    }
		});
	    });
	    
	    return promise;
	}
    }, {
	method: 'POST',
	path: '/import',
	handler: function(req, h) {
	    if (!req.headers['x-knack-rest-api-key'] || !req.headers['x-knack-application-id']) {
		let err = Boom.badRequest('Must provide API key and App ID as headers X-Knack-REST-API-Key and X-Knack-Application-Id');
		console.log(req.headers);
		err.output.statusCode = 400;
		throw err;
	    }

	    if (!req.payload.mappings || req.payload.mappings.length === 0 || !req.payload.knackObject || !req.payload.sfObjectData) {
		let err = Boom.badRequest('Bad format for payload, expected mappings, knackObject, and sfObjectData to be present.');
		throw err;
	    }

	    sleep.sleep(2);
	    
	    return h.response({status: 'success'});
	    
	}
    }
];
