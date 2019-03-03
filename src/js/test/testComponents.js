/**
 * The BDD interface provides describe(), context(), it(), specify(), before(), after(), beforeEach(), and afterEach().
 *
 * context() is just an alias for describe(), and behaves the same way;
 * it just provides a way to keep tests easier to read and organized. Similarly, specify() is an alias for it().
 */

import _ from 'lodash';

const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;

const OriginalState = require('../lib/state');
import Mutations from '../lib/mutations';
import Actions from '../lib/actions';
import Getters from '../lib/getters';

import Navigation from '../components/Navigation.vue';

import {mount, createLocalVue} from '@vue/test-utils';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

function getOriginalState() {
    return _.cloneDeep(OriginalState);
}

function createNewVuexStore() {
    return new Vuex.Store({
	state: getOriginalState(),
	mutations: Mutations,
	actions: Actions,
	getters: Getters
    });
}

describe('Components', function() {
    beforeEach('component', function() {
	
    });
    

    describe('Navigation', function() {
	let wrapper = null;
	let vm = null;
	beforeEach('mount Navigation component', function() {
	    let store = createNewVuexStore();
	    wrapper = mount(Navigation, { store, localVue });
	    vm = wrapper.vm;
	});
	it('should display all pages from store', function() {
	    expect(wrapper.html()).to.contain('>Setup</a>');
	    expect(wrapper.html()).to.contain('>Select Objects</a>');
	    expect(wrapper.html()).to.contain('>Preview</a>');
	    expect(wrapper.html()).to.contain('>Finalize</a>');
	});
    });
});
