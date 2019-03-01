<template>
    <div class="container">
	<navigation></navigation>
	<page-setup v-if="CURRENT_PAGE === 'Setup'"></page-setup>
	<page-select-objects  v-if="CURRENT_PAGE === 'Select Objects'"></page-select-objects>
	<page-preview v-if="CURRENT_PAGE === 'Preview'"></page-preview>
	<page-finalize v-if="CURRENT_PAGE === 'Finalize'"></page-finalize>
	<reset-local-storage></reset-local-storage>
    </div>
</template>

<script>

 import { mapState } from 'vuex';
 
 import Navigation from './Navigation.vue';
 import PageSetup from './PageSetup.vue';
 import PageSelectObjects from './PageSelectObjects.vue';
 import PagePreview from './PagePreview.vue';
 import PageFinalize from './PageFinalize.vue';
 import ResetLocalStorage from './ResetLocalStorage.vue';

 import * as StateTypes from '../lib/stateTypes';
 
 export default {
     data() {
	 return {
	     test: 'test'
	 };
     },
     components: {
	 Navigation, PageSetup, PageSelectObjects, PagePreview, PageFinalize, ResetLocalStorage
     },
     computed: mapState([
	     StateTypes.CURRENT_PAGE
     ])
 }
</script>
