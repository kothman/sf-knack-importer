<template>
    <div class='row justify-content-center finalize'>
	<div class='col'>
	    <div class='row retry mb-4'>
		<div class='col-auto ml-auto'>
		    <a href='#' @click.prevent='retry' class='btn btn-warning'>Retry</a>
		</div>
	    </div>
	    <div v-if='exportInfo.error' class='row'>
		<div class='col-auto'>
		<div class='alert alert-danger'>{{ exportInfo.error }}</div>
		<div v-if='!exportInfo.finished' class='card'>
		    <div class='card-header'>Exporting Objects from Salesforce</div>
		    <div class='card-body text-center'>
			<div class='spinner-border' role='status'>
			<span class='sr-only'>Loading...</span>
			</div>		    
		    </div>
		</div>
			</div>
	    </div>
	    <div class='row'>
		<div class='col'>
		    <div class='card'>
		    <div class='card-header d-flex align-items-center justify-content-between'>
			Progress
			<div class='progress ml-4' style='flex-grow: 1;'>
			    <div class='progress-bar'
				 role='progressbar'
				 aria-valuenow='75'
				 aria-valuemin='0'
				 :aria-valuemax='exportInfo.sfObjects.length'
				 :class='{
					"progress-bar-animated": !importInfo.finished,
					"progress-bar-striped": !importInfo.finished
				    }'
			     :style='{ width: ((( importInfo.errors.length + importInfo.imported.length ) / exportInfo.sfObjects.length) * 100) + "%" }'></div>
		    </div>
		</div>
		<div class='card-body'>
		    <div class='row' v-if='exportInfo.sfObjects'>
			<div class='col-1'><i class='material-icons text-success'>check_circle_outline</i></div>
			<div class='col-11'>Retrieved {{ sfSelectedObjectPrettyNamePlural }}</div>
		    </div>
		    <div class='row' v-if='exportInfo.sfObjects' >
			<div class='col-1'>
			    <div v-if='!importInfo.finished' class='spinner-border spinner-import' role='status'>
				<span class='sr-only'>Loading...</span>
			    </div>
			    <i v-else class='material-icons text-success'>check_circle_outline</i>
			</div>
			<div class='col-11'>Importing {{ sfSelectedObjectPrettyNamePlural }} to Knack [{{ importInfo.errors.length + importInfo.imported.length }}/{{ exportInfo.sfObjects.length }}]</div>
		    </div>
		    <div class='row' v-if='exportInfo.finished'>
			<div class='col'>
			    <p class='card-text'>Summary</p>
			    <div class='row'>
				<div v-if='importInfo.errors.length !== 0' class='col'>
				    <div class='card'>
					<div class='card-header bg-danger text-white'>Errors</div>
					<div class='card-body'>
					    {{ importInfo.errors }}
					</div>
				    </div>
				</div>
				<div v-if='importInfo.imported.length !== 0' class='col'>
				    <div class='card'>
					<div class='card-header bg-primary text-white'>Imported</div>
					<div class='card-body'>
					    <ul>
						<li v-for='sobject in importInfo.imported'>
						    <a :href='sf.instanceUrl + "/" + sobject.Id' target='_blank'>
							{{ sobject.Id }}
						    </a>
						</li>
					    </ul>
					</div>
				    </div>
				</div>
			    </div>
			</div>
		    </div>
		</div>
			    </div>
		</div>
	    </div>
	</div>
    </div><!-- end row -->
</template>

<script>
 import * as AT from '../lib/actionTypes';
 import * as ST from '../lib/stateTypes';
 import * as MT from '../lib/mutationTypes';
 import * as GT from '../lib/getterTypes';
 import * as C from '../lib/constants';

 import $ from 'jquery';
 
 import { mapState, mapGetters } from 'vuex';
 
 export default {
     computed: {
	 ...mapState({
	     importExportStarted: ST.IMPORT_EXPORT_STARTED,
	     exportInfo: ST.EXPORT_INFO,
	     importInfo: ST.IMPORT_INFO,
	     knack: ST.KNACK,
	     sf: ST.SF,
	     objectMappings: ST.OBJECT_MAPPINGS
	 }),
	 ...mapGetters({
	     sfSelectedObjectPrettyNamePlural: GT.SF_SELECTED_OBJECT_PRETTY_NAME_PLURAL,
	 })
     },
     methods: {
	 retry() {
	     this.fetchSfObjects();
	 },
	 fetchSfObjects() {
	     console.log('Sending field mappings to backend.');
	     this.$store.commit(MT.RESET_EXPORT);
	     $.ajax({
		 url: '/export',
		 type: 'POST',
		 headers: {
		     'X-SF-Access-Token': this.sf.accessToken,
		     'X-SF-Instance-URL': this.sf.instanceUrl
		 },
		 dataType: "json",
		 contentType: "application/json; charset=utf-8",
		 data: JSON.stringify({
		     mappings: this.objectMappings,
		     sfObject: this.sf.selectedObject,
		 }),
		 success: (data, status, xhr) => {
		     console.log(data);
		     this.$store.commit(MT.SET_EXPORT_ERR, false);
		     this.$store.commit(MT.SET_EXPORT_SF_OBJECTS, data.result.records);
		     this.$store.commit(MT.SET_EXPORT_FINISHED, true);
		     this.importToKnack();
		 },
		 error: (data, status, xhr) => {
		     console.log(data);
		     this.$store.commit(MT.SET_EXPORT_ERR, data);
		     this.$store.commit(MT.SET_EXPORT_SF_OBJECTS, false);
		     this.$store.commit(MT.SET_EXPORT_FINISHED, false);
		 },
	     });
	 },
	 importToKnack() {
	     this.$store.commit(MT.RESET_IMPORT);
	     this.exportInfo.sfObjects.forEach( (obj) => {
		 $.ajax({
		     url: '/import',
		     type: 'POST',
		     headers: {
			 'X-Knack-REST-API-Key': this.knack.apiKey,
			 'X-Knack-Application-Id': this.knack.appId
		     },
		     dataType: "json",
		     contentType: "application/json; charset=utf-8",
		     data: JSON.stringify({
			 mappings: this.objectMappings,
			 sfObjectData: obj,
			 knackObject: this.knack.selectedObject,
		     }),
		     success: (data, status, xhr) => {
			 console.log('Successfully imported another object');
			 this.$store.commit(MT.PUSH_IMPORT_IMPORTED, obj);
		     },
		     error: (data, status, xhr) => {
			 this.$store.commit(MT.PUSH_IMPORT_ERR, {error: data, object: obj});
		     },
		     complete: () => {
			 if (this.$store.state[ST.IMPORT_INFO].errors.length +
			     this.$store.state[ST.IMPORT_INFO].imported.length ===
				 this.$store.state[ST.EXPORT_INFO].sfObjects.length)
			     this.$store.commit(MT.SET_IMPORT_FINISHED, true);
		     }
		 })
	     });
	 }
     },
     mounted() {
	 if (!this.importExportStarted) {
	     this.$store.commit(MT.SET_IMPORT_EXPORT_STARTED, true);
	     this.fetchSfObjects();
	 }
     }
 }
</script>
