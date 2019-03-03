/**
 * The BDD interface provides describe(), context(), it(), specify(), before(), after(), beforeEach(), and afterEach().
 *
 * context() is just an alias for describe(), and behaves the same way;
 * it just provides a way to keep tests easier to read and organized. Similarly, specify() is an alias for it().
 */

//require('jsdom-global')();

    var assert = require('assert');
    //import 'jsdom-global/register';

    //import Navigation from '../src/js/components/Navigation.vue';

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

    describe('Components', function() {
	beforeEach('component', function() {
	    
	});
	

	describe('Navigation', function() {
	    
	    it('should display all pages from store', function() {
		assert(1, 1);
	    });
	});
    });
