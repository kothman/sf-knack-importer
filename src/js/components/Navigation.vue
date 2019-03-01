<template>
    <div class="row">
	<header class="nav nav-pills p-4 mb-5 border-bottom">
	    <a class="nav-item nav-link"
	       v-for="page in PAGES"
	       :class="{ active: CURRENT_PAGE == page.title, disabled: !page.active, previous: page.active && CURRENT_PAGE != page.title }"
		@click="handleNavClick(page.title)"
		      href="#">{{ page.title }}</a>
	</header>
    </div>
</template>

<script>
 import { mapState } from 'vuex';
 import { SET_CURRENT_PAGE
 } from '../lib/mutationTypes';
 import * as StateTypes from '../lib/stateTypes';
 
 export default {
     data: function() {
	 return {
	 };
     },
     methods: {
	 handleNavClick(title) {
	     this.$store.commit(SET_CURRENT_PAGE, title);
	 }
     },
     computed: mapState([StateTypes.CURRENT_PAGE, StateTypes.PAGES]),
     mounted: function() {

     }
 }
</script>
