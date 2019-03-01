<template>
    <div class='row'>
	<div class='col-sm-6 mb-4'>
	    <div class='card'>
		<div class='card-body'>
		    <h3 class="card-title">
			Salesforce
			<i v-if='SF.authorized'
			   class='material-icons text-success float-right'>check_circle_outline</i>
		    </h3>
		    <div class='alert alert-danger' v-if='SF.error'>{{ SF.error }}</div>
		    <div class='form-group' v-if='SF.authorized'>
			<label for='access-token'>Access Token</label>
			<input class='form-control' id='access-token' :value='SF.accessToken' @keydown.prevent @click='function(e) { e.currentTarget.select(); }' >
		    </div>
		    <a href='#'
		       class='btn'
		       :class='{ "btn-primary": !SF.authorized, "btn-success": SF.authorized }'
		       @click.prevent='redirectToSFAuth'>{{ SF.authorized ? 'Success' : 'Authorize' }}</a>
		</div>
	    </div>
	</div>
	
	<div class='col-sm-6 mb-4'>
	    <div class='card'>
		<div class='card-body'>
		    <h3 class='card-title'>
			Knack
			<i v-if='KNACK.authorized' class='material-icons text-success float-right'>check_circle_outline</i>
		    </h3>
		    <div v-if='KNACK.error'class='alert alert-danger' role='alert'>
			{{ KNACK.error }}
		    </div>
		    <form @submit.prevent='handleKnackCredentials'>
			<div class='form-group'>
			    <label for=''>App ID</label>
			    <input v-model='knackAppId' type='text' class='form-control'>
			</div>
			<div class='form-group'>
			    <label for=''>API Key</label>
			    <input v-model='knackApiKey' type='text' class='form-control'>
			</div>
			<button
			    :class='{ "btn-primary": !KNACK.authorized, "btn-success": KNACK.authorized }'
			    class='btn'
			    type='submit'>{{ KNACK.authorized ? 'Success' : 'Authorize' }}</button>
		    </form>
		</div>
	    </div>
	</div>	
    </div><!-- end row -->

</template>

<script>
 import { mapState } from 'vuex';

 import * as ST from '../lib/stateTypes';
 import * as C from '../lib/constants';
 import * as MT from '../lib/mutationTypes';
 import * as AT from '../lib/actionTypes';
 
 import $ from 'jquery';
 import queryString from 'query-string';
 
 export default {
     data() {
	 return {
	     knackApiKey: false,
	     knackAppId: false
	 };
     },
     methods: {
	 advanceIfReady() {
	     if (this.canAdvance) {
		 this.$store.commit(MT.SET_PAGE_ACTIVE, 'Select Objects');
		 this.$store.commit(MT.SET_CURRENT_PAGE, 'Select Objects');
	     }
	 },
	 redirectToSFAuth() {
	     window.location.href = '/sf';
	 },
	 handleKnackCredentials() {
	     $.ajax({
		url: C.KNACK_BASE_URL + 'objects',
		type: 'GET',
		headers: {
		    'X-Knack-Application-Id': this.knackAppId,
		    'X-Knack-REST-API-Key': this.knackApiKey
		},
		success: (data, status, xhr) => {
		    this.$store.commit(MT.STORE_VALID_KNACK_CREDENTIALS, {
			appId: this.knackAppId,
			apiKey: this.knackApiKey
		    });
		    this.$store.commit(MT.SET_KNACK_OBJECTS, data.objects);
		    this.$store.commit(MT.SET_KNACK_ERR, false);
		    this.$store.commit(MT.SET_KNACK_AUTHORIZED, true);
		    this.advanceIfReady();
		},
		 error: (data, status, xhr) => {
		     this.$store.commit(MT.SET_KNACK_ERR, data.statusText + ': ' + data.responseText);
		     this.$store.commit(MT.SET_KNACK_AUTHORIZED, false);
		 },
		 complete: () => {
		     this.$store.dispatch(AT.SAVE_TO_LOCAL_STORAGE);
		     this.$store.dispatch(AT.PROGRESS_PAGE_IF_NEEDED);
		 }
	    });
	 }
     },
     computed: {
	 canAdvance() {
	     return this.$store.state[ST.SF].authorized &&
		    this.$store.state[ST.KNACK].authorized;
	 },
	 ...mapState([ST.SF, ST.KNACK ])
     },
     beforeMount() {
	 // Check for SF access_token and instance_url
	 let parsedQueryString = queryString.parse(location.search);
	 if (parsedQueryString.access_token && parsedQueryString.instance_url) {
	     let accessToken = parsedQueryString.access_token;
	     let instanceUrl = parsedQueryString.instance_url;
	     
	     // get list of sobjects
	     $.ajax({
		 url: '/sf/objects',
		 type: 'GET',
		 headers: {
		     'X-SF-Access-Token': accessToken,
		     'X-SF-Instance-URL': instanceUrl,
		 },
		 success: (data, status, xhr) => {
		     this.$store.commit(MT.STORE_VALID_SF_CREDENTIALS, {
			 accessToken: accessToken,
			 instanceUrl: instanceUrl
		     });
		     this.$store.commit(MT.SET_SF_OBJECTS, data);
		     this.$store.commit(MT.SET_SF_ERR, false);
		     this.$store.commit(MT.SET_SF_AUTHORIZED, true);
		     this.advanceIfReady();
		     window.location.href = '/';
		 },
		 error: (data, status, xhr) => {
		     this.$store.commit(MT.SET_SF_AUTHORIZED, false);
		     this.$store.commit(MT.SET_SF_ERR, data.statusText + ': ' + data.responseText);
		     window.location.href = '/';
		 },
		 complete: () => {
		     this.$store.dispatch(AT.SAVE_TO_LOCAL_STORAGE);
		     this.$store.dispatch(AT.PROGRESS_PAGE_IF_NEEDED);
		     this.$store.commit(MT.UPDATE_ACTIVE_PAGES);
		     this.$store.dispatch(AT.PROGRESS_PAGE_IF_NEEDED);
		 }
	     });
	 }
     },
     mounted() {
	 console.log('Mounting PageSetup');
	 this.knackAppId = this.$store.state[ST.KNACK].appId;
	 this.knackApiKey = this.$store.state[ST.KNACK].apiKey;
	 // Advance to next page if not mounted (first load)
	 if (!this.$store.state[ST.MOUNTED])
	     this.advanceIfReady();
	 console.log('Mounted PageSetup');
     }
 }
</script>
