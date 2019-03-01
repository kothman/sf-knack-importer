/**
 * The BDD interface provides describe(), context(), it(), specify(), before(), after(), beforeEach(), and afterEach().
 *
 * context() is just an alias for describe(), and behaves the same way;
 * it just provides a way to keep tests easier to read and organized. Similarly, specify() is an alias for it().
 */

// https://stackoverflow.com/questions/12752622/require-file-as-string
const Vue = require('vue/dist/vue');
import { mount } from '@vue/test-utils';
var assert = require('assert');

  before('setup', function() {
      // runs before all tests in this block
  });

  after('teardown', function() {
    // runs after all tests in this block
  });

  beforeEach('before each test', function() {
      // runs before each test in this block
      require('jsdom-global')();
      
      let vueData = require('../dist/app.js');
      vueData.attachToDocument = true;
      vueData.template = require('../dist/index.html');
      mount(vueData);

  });

  afterEach('after each test', function() {
    // runs after each test in this block
  });

describe('Array', function() {
    describe('#indexOf()', function() {
	it('should return -1 when the value is not present', function() {
	    assert.equal([1, 2, 3].indexOf(4), -1);
	});
    });
});
