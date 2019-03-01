<template>
    <footer class='row'>
	<nav class='nav nav-pills mx-auto p-5'>
	    <a @click.prevent='clearLocalStorage' href='#' class='nav-item nav-link active bg-danger'>Clear Session</a>
	</nav>
    </footer>
</template>

<script>

 import * as ST from '../lib/stateTypes';
 import * as AT from '../lib/actionTypes';
 import * as MT from '../lib/actionTypes';

 import * as C from '../lib/constants';

 import { mapState } from 'vuex';
 
 export default {
     methods: {
	 clearLocalStorage() {
	     this.$store.dispatch(AT.CLEAR_LOCAL_STORAGE);
	 }
     }
 }
</script>
