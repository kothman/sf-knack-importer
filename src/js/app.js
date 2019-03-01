import Vue from 'vue/dist/vue.js';
import Vuex from 'vuex';
const mapState = Vuex.mapState;
import $ from 'jquery';
import queryString from 'query-string';

import Application from './components/App.vue';

import Mutations from './lib/mutations';
import InitialState from './lib/state';
import Actions from './lib/actions';
import Getters from './lib/getters';

import *  as MT from './lib/mutationTypes';
import * as ST from './lib/stateTypes';
import * as AT from './lib/actionTypes';
import * as GT from './lib/getterTypes';
import * as C from './lib/constants';

Vue.use(Vuex);

let store = new Vuex.Store({
    state: InitialState,
    mutations: Mutations,
    actions: Actions,
    getters: Getters
});

let vueData = {
    el: '#app',
    template: '<application></application>',
    store,
    components: {Application},
    computed: {
	...mapState([ST.CURRENT_PAGE])
    },
    methods: {
	updateImportInfoFinished: function() {
	    if (this.importInfo.errors.length + this.importInfo.imported.length === this.exportInfo.sfObjects.length)
		this.importInfo.finished = true;
	    else
		this.importInfo.finished = false;
	}
    },
    beforeMount: function () {
	this.$store.commit(MT.RESTORE_FROM_LOCAL_STORAGE);	
    },
    mounted: function () {
	// If both apps are authenticated, make 'Select Objects' page active.
	// Preview and Finalize pages should never be active until user chooses to proceed,
	// and Preview/Finalize pages won't be active on reload (require confirmation again)
	console.log('Vue initialized');
	this.$store.commit(MT.FINISHED_MOUNTING);
    }
}

let vm = new Vue(vueData);

// export vm for unit tests
module.exports = vueData;
