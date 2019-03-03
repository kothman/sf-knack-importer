const assert = require('chai').assert;
const _ = require('lodash');

import Getters from '../lib/getters';
import Actions from '../lib/actions';
import Mutations from '../lib/mutations';

import * as ST from '../lib/stateTypes';
import * as GT from '../lib/getterTypes';
import * as AT from '../lib/actionTypes';
import * as MT from '../lib/mutationTypes';

import * as C from '../lib/constants';

// Can't include in setup.js, need webpack to compile required file.
const OriginalState = require('../lib/state');

// return a new copy of the original state, for when we're going to mutate the state
function getOriginalState () {
    return _.cloneDeep(OriginalState);
}


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
    let state = getOriginalState();
    
    beforeEach('store test', function() {
	
    });
    

    describe('State', function() {
	
	it('should have all types listed in stateTypes.js', function() {
	    Object.keys(ST).forEach( (type) => {
		assert.isNotNull(state[type], 'Key ' + type + ' exists on state');
	    });
	    
	});
	specify('pages should be an array of objects with the keys \'title\' and \'active\'', function() {
	    let pages = state[ST.PAGES];
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
	    assert.isFalse(state[ST.MOUNTED]);
	    
	});
	specify('initial current page should be first page', function() {
	    assert.equal(state[ST.CURRENT_PAGE], state[ST.PAGES][0].title);
	    
	});
	specify('initial knack state is empty', function() {
	    let knack = state[ST.KNACK];
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
	    let sf = state[ST.SF];
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
	    let mappings = state[ST.OBJECT_MAPPINGS];
	    assert.isArray(mappings);
	    assert.lengthOf(mappings, 1);
	    let mapping = mappings[0];
	    assert.isEmpty(mapping.sfField);
	    assert.isEmpty(mapping.knackField);
	    assert.isString(mapping.sfField);
	    assert.isString(mapping.knackField);
	    
	});
	it('object mappings error should be false', function() {
	    assert.isFalse(state[ST.OBJECT_MAPPINGS_ERROR]);
	    
	});
	it('object mappings required fields missing should be empty array', function() {
	    let requiredFieldsMissing = state[ST.OBJECT_MAPPINGS_REQUIRED_FIELDS_MISSING];
	    assert.isEmpty(requiredFieldsMissing);
	    assert.isArray(requiredFieldsMissing);
	    
	});
	it('import/export started should be false', function() {
	    assert.isFalse(state[ST.IMPORT_EXPORT_STARTED]);
	    
	});
	it('export info should be empty', function() {
	    let exportInfo = state[ST.EXPORT_INFO];
	    assert.isFalse(exportInfo.error);
	    assert.isFalse(exportInfo.finished);
	    assert.isFalse(exportInfo.sfObjects);
	    
	});
	it('import info should be empty', function() {
	    let importInfo = state[ST.IMPORT_INFO];
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
	let state = getOriginalState();
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
		assert.equal(state[key], window.localStorage.getItem(key));
	    });
	});
	it('should progress page if needed', function() {	    
	    let progress = Actions[AT.PROGRESS_PAGE_IF_NEEDED];
	    progress(context);
	    assert.equal(state[ST.CURRENT_PAGE], 'Setup');
	    context.state[ST.PAGES][1].active = true;
	    context.state[ST.PAGES][2].active = true;
	    context.state[ST.PAGES][3].active = true;
	    progress(context);
	    assert.equal(state[ST.CURRENT_PAGE], 'Finalize');
	    context.state[ST.PAGES][3].active = false;
	    progress(context);
	    assert.equal(state[ST.CURRENT_PAGE], 'Preview');
	    context.state[ST.PAGES][2].active = false;
	    progress(context);
	    assert.equal(state[ST.CURRENT_PAGE], 'Select Objects');
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
	    state = getOriginalState();
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
	    let setPage = Mutations[MT.SET_CURRENT_PAGE];
	    setPage(state, 'Setup');
	    assert.equal(state[ST.CURRENT_PAGE], 'Setup');
	    setPage(state, 'Finalize')
	    assert.equal(state[ST.CURRENT_PAGE], 'Finalize');
	    assert.throw(() => { setPage(state, 'Not A Page');}, "No page exists with title 'Not A Page'");
	});
	it('should set page active', function() {
	    let setActive = Mutations[MT.SET_PAGE_ACTIVE];
	    assert.isTrue(state[ST.PAGES][0].active);
	    setActive(state, 'Setup');
	    assert.isTrue(state[ST.PAGES][0].active);
	    assert.isFalse(state[ST.PAGES][1].active);
	    assert.isFalse(state[ST.PAGES][2].active);
	    assert.isFalse(state[ST.PAGES][3].active);
	    setActive(state, 'Finalize');
	    assert.isTrue(state[ST.PAGES][3].active);
	    assert.throw(() => { setActive(state, 'Not A Page');}, "No page exists with title 'Not A Page'");
	});
	it('should set page inactive', function() {
	    let setInactive = Mutations[MT.SET_PAGE_INACTIVE];
	    let setActive = Mutations[MT.SET_PAGE_ACTIVE];
	    assert.isFalse(state[ST.PAGES][1].active);
	    setInactive(state, 'Select Objects');
	    assert.isFalse(state[ST.PAGES][1].active);
	    setActive(state, 'Select Objects');
	    setInactive(state, 'Select Objects');
	    assert.isFalse(state[ST.PAGES][1].active);
	    assert.throws(() => {setInactive(state, 'Not A Page');}, "No page exists with title 'Not A Page'");
	});
	it('should set Knack auth to false', function() {
	    assert.isFalse(state[ST.KNACK].authorized);
	    Mutations[MT.RESET_KNACK_AUTH](state);
	    assert.isFalse(state[ST.KNACK].authorized);
	    state[ST.KNACK].authorized = true;
	    Mutations[MT.RESET_KNACK_AUTH](state);
	    assert.isFalse(state[ST.KNACK].authorized);
	});
	it('should restore from local storage', function() {
	    // @todo implement test
	});
	it('should store SF credentials', function() {
	    let storeCreds = Mutations[MT.STORE_VALID_SF_CREDENTIALS];
	    let creds = {
		accessToken: '12345',
		instanceUrl: 'https://www.instance.com'
	    };
	    assert.isFalse(state[ST.SF].instanceUrl);
	    assert.isFalse(state[ST.SF].accessToken);
	    storeCreds(state, creds);
	    assert.equal(state[ST.SF].accessToken, '12345');
	    assert.equal(state[ST.SF].instanceUrl, 'https://www.instance.com');
	    assert.throws(() => {storeCreds(state, {});}, 'Invalid SF credentials');
	});
	it('should set SF authorized', function() {
	    assert.fail('@todo - implement test');
	});
	it('should set SF err', function() {
	    assert.fail('@todo - implement test');
	});
	it('should set SF objects', function() {
	    assert.fail('@todo - implement test');
	});
	it('should set SF selected object', function() {
	    assert.fail('@todo - implement test');
	});
	it('should set SF selected object fields', function() {
	    assert.fail('@todo - implement test');
	});

	it('should store Knack credentials', function() {
	    assert.fail('@todo - implement test');
	});
	it('should set Knack authorized', function() {
	    assert.fail('@todo - implement test');
	});
	it('should set Knack err', function() {
	    assert.fail('@todo - implement test');
	});
	it('should set Knack objects', function() {
	    assert.fail('@todo - implement test');
	});
	it('should set Knack selected object', function() {
	    assert.fail('@todo - implement test');
	});
	it('should set Knack selected object fields', function() {
	    assert.fail('@todo - implement test');
	});

	it('should add an empty object field mapping', function() {
	    assert.fail('@todo - implement test');
	});
	it('should remove an object field mapping for the given index', function() {
	    assert.fail('@todo - implement test');
	});
	it('should set object mappings error', function() {
	    assert.fail('@todo - implement test');
	});
	it('should set object mappings required fields missing', function() {
	    assert.fail('@todo - implement test');
	});
	it('should reset Knack field mappings', function() {
	    assert.fail('@todo - implement test');
	});
	it('should reset SF field mappings', function() {
	    assert.fail('@todo - implement test');
	});

	it('should set import/export started', function() {
	    assert.fail('@todo - implement test');
	});
	it('should set import finished', function() {
	    assert.fail('@todo - implement test');
	});
	it('should push import error', function() {
	    assert.fail('@todo - implement test');
	});
	it('should push imported object', function() {
	    assert.fail('@todo - implement test');
	});
	it('should reset import state', function() {
	    assert.fail('@todo - implement test');
	});
	it('should set export finished', function() {
	    assert.fail('@todo - implement test');
	});
	it('should set export error', function() {
	    assert.fail('@todo - implement test');
	});
	it('should set export SF objects', function() {
	    assert.fail('@todo - implement test');
	});
	it('should reset export state', function() {
	    assert.fail('@todo - implement test');
	});
    });
});

