const assert = require('chai').assert;

import State from '../lib/state';
import Getters from '../lib/getters';
import Actions from '../lib/actions';
import Mutations from '../lib/mutations';

import * as ST from '../lib/stateTypes';
import * as GT from '../lib/getterTypes';
import * as AT from '../lib/actionTypes';
import * as MT from '../lib/mutationTypes';

import * as C from '../lib/constants';

before('setup', function() {
    // runs before all tests in this block
});

after('teardown', function() {
    // runs after all tests in this block
});

beforeEach('before each test', function() {
    // runs before each test in this block
});

afterEach('after each test', function() {
    // runs after each test in this block
});

describe('Store', function() {
    beforeEach('store test', function() {
	
    });
    

    describe('State', function() {
	
	it('should have all types listed in stateTypes.js', function() {
	    Object.keys(ST).forEach( (type) => {
		assert.isNotNull(State[type], 'Key ' + type + ' exists on state');
	    });
	    
	});
	specify('pages should be an array of objects with the keys \'title\' and \'active\'', function() {
	    let pages = State[ST.PAGES];
	    assert.isArray(pages);
	    pages.forEach( (page) => {
		assert.isObject(page);
		assert.property(page, 'title');
		assert.property(page, 'active');
		assert.isString(page.title);
		assert.isBoolean(page.active);
	    });
	    
	});
	specify('initial value of mounted should be false', function() {
	    assert.isFalse(State[ST.MOUNTED]);
	    
	});
	specify('initial current page should be first page', function() {
	    assert.equal(State[ST.CURRENT_PAGE], State[ST.PAGES][0].title);
	    
	});
	specify('initial knack state is empty', function() {
	    let knack = State[ST.KNACK];
	    assert.isFalse(knack.error);
	    assert.isFalse(knack.authorized);
	    assert.isEmpty(knack.appId);
	    assert.isString(knack.appId);
	    assert.isEmpty(knack.apiKey);
	    assert.isString(knack.apiKey);
	    assert.isEmpty(knack.userToken);
	    assert.isString(knack.userToken);
	    assert.isFalse(knack.objects);
	    assert.isEmpty(knack.selectedObject);
	    assert.isString(knack.selectedObject);
	    assert.isEmpty(knack.objectFields);
	    assert.isArray(knack.objectFields);
	    
	});
	specify('initial sf state is empty', function() {
	    let sf = State[ST.SF];
	    assert.isFalse(sf.accessToken);
	    assert.isFalse(sf.instanceUrl);
	    assert.isFalse(sf.error);
	    assert.isFalse(sf.authorized);
	    assert.isFalse(sf.objects);
	    assert.isEmpty(sf.selectedObject);
	    assert.isString(sf.selectedObject);
	    assert.isEmpty(sf.objectFields);
	    assert.isArray(sf.objectFields);
	    
	});
	it('should have empty object mapping with sfField and knackField', function() {
	    let mappings = State[ST.OBJECT_MAPPINGS];
	    assert.isArray(mappings);
	    assert.lengthOf(mappings, 1);
	    let mapping = mappings[0];
	    assert.isEmpty(mapping.sfField);
	    assert.isEmpty(mapping.knackField);
	    assert.isString(mapping.sfField);
	    assert.isString(mapping.knackField);
	    
	});
	it('object mappings error should be false', function() {
	    assert.isFalse(State[ST.OBJECT_MAPPINGS_ERROR]);
	    
	});
	it('object mappings required fields missing should be empty array', function() {
	    let requiredFieldsMissing = State[ST.OBJECT_MAPPINGS_REQUIRED_FIELDS_MISSING];
	    assert.isEmpty(requiredFieldsMissing);
	    assert.isArray(requiredFieldsMissing);
	    
	});
	it('import/export started should be false', function() {
	    assert.isFalse(State[ST.IMPORT_EXPORT_STARTED]);
	    
	});
	it('export info should be empty', function() {
	    let exportInfo = State[ST.EXPORT_INFO];
	    assert.isFalse(exportInfo.error);
	    assert.isFalse(exportInfo.finished);
	    assert.isFalse(exportInfo.sfObjects);
	    
	});
	it('import info should be empty', function() {
	    let importInfo = State[ST.IMPORT_INFO];
	    assert.isEmpty(importInfo.errors);
	    assert.isArray(importInfo.errors);
	    assert.isEmpty(importInfo.imported);
	    assert.isArray(importInfo.imported);
	    assert.isFalse(importInfo.finished);
	});
    });

    describe('Getters', function() {
	let state = {
	    [ST.SF]: {
		objects: [
		    { name: 'AccountName',
		      label: 'Account',
		      labelPlural: 'Accounts'},
		    { name: 'Custom_Object__c',
		      label: 'Custom Object',
		      labelPlural: 'Custom Objects' }
		]
	    }, [ST.KNACK]: {
		objects: [
		    { key: 'object_1',
		      name: 'Account' },
		    { key: 'object_2',
		      name: 'Contact' }
		]
	    }
	};

	it('has all types in getterTypes.js', function() {
	    Object.keys(GT).forEach((key) => {
		assert.isNotNull(Getters[key], 'Key "' + key + '" exists on getters.js' );
	    });
	});
	
	it('returns pretty name for selected SF object', function() {
	    let getPrettyName = Getters[GT.SF_SELECTED_OBJECT_PRETTY_NAME];
	    state[ST.SF].selectedObject = 'AccountName';
	    assert.equal(getPrettyName(state), 'Account');
	    state[ST.SF].selectedObject = 'Custom_Object__c';
	    assert.equal(getPrettyName(state), 'Custom Object');
	});
	it('returns pretty plural name for selected SF object', function() {
	    let getPrettyNamePlural = Getters[GT.SF_SELECTED_OBJECT_PRETTY_NAME_PLURAL];
	    state[ST.SF].selectedObject = 'AccountName';
	    assert.equal(getPrettyNamePlural(state), 'Accounts');
	    state[ST.SF].selectedObject = 'Custom_Object__c';
	    assert.equal(getPrettyNamePlural(state), 'Custom Objects');
	});
	it('returns pretty name for selected Knack object', function() {
	    let getPrettyName = Getters[GT.KNACK_SELECTED_OBJECT_PRETTY_NAME];
	    state[ST.KNACK].selectedObject = 'object_1';
	    assert.equal(getPrettyName(state), 'Account');
	    state[ST.KNACK].selectedObject = 'object_2';
	    assert.equal(getPrettyName(state), 'Contact');
	});
    });

    describe('Actions', function() {
	let state = require('../lib/state');
	let context = {
	    state: state,
	    commit: (mutationType, payload) => {
		Mutations[mutationType](state, payload);
	    }
	};

	beforeEach(function() {
	    window.localStorage.clear();
	});
	
	it('should save to local storage', function() {
	    Object.keys(C.PERSIST_KEYS).forEach( (key) => {
		assert.isNull(window.localStorage.getItem(key));
	    });
	    Actions[AT.SAVE_TO_LOCAL_STORAGE](context);
	    Object.keys(C.PERSIST_KEYS).forEach( (key) => {
		assert.equal(State[key], window.localStorage.getItem(key));
	    });
	});
	it('should progress page if needed', function() {	    
	    let progress = Actions[AT.PROGRESS_PAGE_IF_NEEDED];
	    progress(context);
	    assert.equal(State[ST.CURRENT_PAGE], 'Setup');
	    context.state[ST.PAGES][1].active = true;
	    context.state[ST.PAGES][2].active = true;
	    context.state[ST.PAGES][3].active = true;
	    progress(context);
	    assert.equal(State[ST.CURRENT_PAGE], 'Finalize');
	    context.state[ST.PAGES][3].active = false;
	    progress(context);
	    assert.equal(State[ST.CURRENT_PAGE], 'Preview');
	    context.state[ST.PAGES][2].active = false;
	    progress(context);
	    assert.equal(State[ST.CURRENT_PAGE], 'Select Objects');
	});
	it('should clear local storage', function() {
	    Actions[AT.SAVE_TO_LOCAL_STORAGE](context);
	    Actions[AT.CLEAR_LOCAL_STORAGE];
	    Object.keys(C.PERSIST_KEYS).forEach( (key) => {
		assert.isNull(window.localStorage.getItem(key));
	    });
	});
	
    });

    describe('Mutations', function() {
	let state = {};

	beforeEach('reset state', function() {
	    // State will be mutated over course of testing mutations, need to reset before each test
	    state = require('../lib/state');
	});
	
	it('should have all types listed in mutationTypes.js', function() {
	    Object.keys(MT).forEach( (key) => {
		assert.isNotNull(Mutations[key], 'Key "' + key + '" should exist on mutations');
	    });
	});
	it('should set mounted to true once finished mounting', function() {
	    assert.isFalse(state[ST.MOUNTED]);
	    Mutations[MT.FINISHED_MOUNTING](state);
	    assert.isTrue(state[ST.MOUNTED]);
	    Mutations[MT.FINISHED_MOUNTING](state);
	    assert.isTrue(state[ST.MOUNTED]);
	});
	it('should set current page', function() {

	});
    });
});

