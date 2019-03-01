<template>
    <div class='row'>
	<div class='col-12'>
	    <div class='mb-4 row'>
		<div class='col'>
		    <a href='#'
		       @click.prevent='advanceToPreview'
		       class='float-right btn btn-primary'
		       :class='{ disabled: !canAdvance }'
		    >Preview</a>
		</div>
	    </div>
	    <div class='card'>
		<div class='card-body'>
		    <div class='alert alert-info' v-if='OBJECT_MAPPINGS_REQUIRED_FIELDS_MISSING.length > 0'>
			<p>The following required fields on the Knack object must be mapped to continue.</p>
			<p><span v-for='(field, index) in OBJECT_MAPPINGS_REQUIRED_FIELDS_MISSING'>{{ field.name }}{{ index !== OBJECT_MAPPINGS_REQUIRED_FIELDS_MISSING.length - 1 ? ', ' : '' }}</span></p>
		    </div>
		    <div class='alert alert-danger' v-if='OBJECT_MAPPINGS_ERROR'>{{ OBJECT_MAPPINGS_ERROR }}</div>
		    <table class='table'>
			<thead>
			    <tr><th>Salesforce</th><th>Knack</th></tr>
			</thead>
			<tbody>
			    <tr class='select-objects'>
				<th>
				    <div class='form-group'>
					<label for='sf-object'>Object</label>
					<select id='sf-object' name='sf-object' class='form-control' v-model='sfSelectedObject'>
					    <option value=''>Select an object</option>
					    <option v-for='object in SF.objects' :value='object.name'>{{ object.label }}</option>
					</select>
				    </div>
				</th>
				<th>
				    <div class='form-group'>
					<label for='knack-object'>Object</label>
					<select id='knack-object' name='knack-object' class='form-control' v-model='knackSelectedObject'>
					    <option value=''>Select an object</option>
					    <option v-for='object in KNACK.objects' :value='object.key'>{{ object.name }}</option>
					</select>
				    </div>
				</th>
			    </tr>
			    <tr class='mapping' v-if='SF.selectedObject && KNACK.selectedObject' v-for='(mapping, index) in OBJECT_MAPPINGS'>
				<td>
				    <select v-model='mapping.sfField' class='form-control'>
					<option value=''>Select a field</option>
					<option v-if='SF.objectFields' v-for='field in SF.objectFields' :value='field.name'>{{ field.label }}</option>
				    </select>
				</td>
				<td>
				    <select v-model='mapping.knackField' class='form-control' @change='checkRequiredKnackFieldsMapped'>
					<option value=''>Select a field</option>
					<option v-for='field in KNACK.objectFields' :value='field.key'>{{ field.name }} {{ field.required ? '*' : '' }}</option>
				    </select>
				    <a href='#'
				       @click.prevent='removeObjectFieldMapping(index)'
				       class='btn btn-danger ml-4'
				       :class='{ disabled: objectMappings.length <= 1 }'
				       title='Delete mapping'>X</a>
				</td>
			    </tr>
			    <tr class='add-mapping'>
				<td></td>
				<td><a href='#' @click.prevent='addObjectFieldMapping' class='btn btn-primary ml-auto'>Add Mapping</a></td>
			    </tr>
			</tbody>
		    </table>
		</div>
	    </div>
	</div>
    </div><!-- end row -->
</template>

<script>
 import * as AT from '../lib/actionTypes';
 import * as ST from '../lib/stateTypes';
 import * as MT from '../lib/mutationTypes';
 import * as C from '../lib/constants';

 import $ from 'jquery';
 
 import { mapState } from 'vuex';
 
 export default {
     data() {
	 return {
	     sfSelectedObject: 'Select an object',
	     knackSelectedObject: 'Select an object',
	     objectMappings: [{
		 sfField: '',
		 knackField: ''
	     }],
	     mounted: false
	 };
     },
     watch: {
	 sfSelectedObject(newObj, oldObj) {
	     if (this.mounted && newObj !== this.$store.state[ST.SF].selectedObject) {
		 this.$store.commit(MT.SET_PAGE_INACTIVE, 'Preview');
		 this.resetSFMappings();
		 this.$store.commit(MT.SET_SF_SELECTED_OBJECT, this.sfSelectedObject);
	     	 this.fetchSfObjectFields();
	     }
	 },
	 knackSelectedObject(newObj, oldObj) {
	     if (this.mounted && newObj !== this.$store.state[ST.KNACK].selectedObject) {
		 this.$store.commit(MT.SET_OBJECT_MAPPINGS_REQUIRED_FIELDS_MISSING, []);
		 this.$store.commit(MT.SET_PAGE_INACTIVE, 'Preview');
		 this.resetKnackMappings()
		 this.$store.commit(MT.SET_KNACK_SELECTED_OBJECT, this.knackSelectedObject);
	     	 this.fetchKnackObjectFields();
	     }
	 },
	 [ST.OBJECT_MAPPINGS]: {
	     deep: true,
	     handler() {
		 this.checkRequiredKnackFieldsMapped();
		 this.$store.dispatch(AT.SAVE_TO_LOCAL_STORAGE);
	     }
	 }
     },
     methods: {
	 advanceToPreview() {
	     if (this.canAdvance) {
		 this.$store.commit(MT.SET_PAGE_ACTIVE, 'Preview');
		 this.$store.commit(MT.SET_CURRENT_PAGE, 'Preview');
	     }
	 },
	 resetSFMappings() {
	     this.$store.commit(MT.RESET_SF_FIELD_MAPPINGS);
	 },
	 resetKnackMappings() {
	     this.$store.commit(MT.RESET_KNACK_FIELD_MAPPINGS);
	 },
	 fetchKnackObjectFields() {
	     if (this.$store.state[ST.KNACK].selectedObject === '') {
		 this.$store.commit(MT.SET_KNACK_SELECTED_OBJECT, '');
		 this.$store.commit(MT.SET_KNACK_OBJECT_FIELDS, []);
		 this.$store.commit(MT.SET_OBJECT_MAPPINGS_REQUIRED_FIELDS_MISSING, []);
		 this.$store.dispatch(AT.SAVE_TO_LOCAL_STORAGE);
		 return;
	     }

	     $.ajax({
		 url: C.KNACK_BASE_URL + 'objects/' + this.$store.state[ST.KNACK].selectedObject,
		 type: 'GET',
		 headers: {
		     'X-Knack-REST-API-Key': this.$store.state[ST.KNACK].apiKey,
		     'X-Knack-Application-Id': this.$store.state[ST.KNACK].appId
		 },
		 success: (data, status, xhr) => {
		     console.log(data.object.fields);
		     this.$store.commit(MT.SET_KNACK_OBJECT_FIELDS, data.object.fields);
		     this.$store.commit(MT.SET_OBJECT_MAPPINGS_ERROR, false);
		     this.checkRequiredKnackFieldsMapped();
		 },
		 error: (data, status, xhr) => {
		     this.$store.commit(MT.SET_OBJECT_MAPPINGS_ERROR,
				    'Error retrieving SF fields for sobject ' + this.$store.state[ST.KNACK].selectedObject + ': ' + data.responseText);
		 },
		 complete: (data, status, xhr) => {
		     this.$store.dispatch(AT.SAVE_TO_LOCAL_STORAGE);
		 }
	     });
	 },
	 fetchSfObjectFields() {
	     if (this.$store.state[ST.SF].selectedObject === '') {
		 this.$store.commit(MT.SET_SF_SELECTED_OBJECT, '');
		 this.$store.dispatch(AT.SAVE_TO_LOCAL_STORAGE);
		 return;
	     }
	     
	     $.ajax({
		 url: '/sf/describe/' + this.$store.state[ST.SF].selectedObject,
		 type: 'GET',
		 headers: {
		     'X-SF-Access-Token': this.$store.state[ST.SF].accessToken,
		     'X-SF-Instance-URL': this.$store.state[ST.SF].instanceUrl
		 },
		 success: (data, status, xhr) => {
		     console.log(data);
		     this.$store.commit(MT.SET_SF_OBJECT_FIELDS, data);
		     this.$store.commit(MT.SET_OBJECT_MAPPINGS_ERROR, false);
		     this.checkRequiredKnackFieldsMapped();
		 },
		 error: (data, status, xhr) => {
		     this.$store.commit(MT.SET_OBJECT_MAPPINGS_ERROR,
				    'Error retrieving SF fields for sobject ' + this.$store.state[ST.SF].selectedObject + ': ' + data.responseText);
		 },
		 complete: (data, status, xhr) => {
		     this.$store.dispatch(AT.SAVE_TO_LOCAL_STORAGE);
		 }
	     });
	 },
	 checkRequiredKnackFieldsMapped() {
	     console.log('Checking required fields')
	     // Go through each required field, check if mapping exists for field key
	     let requiredFieldsMissing = []
	     this.$store.state[ST.KNACK].objectFields.forEach( (field) => {
		 if (field.required) {
		     if (!this.objectMappings.find( (mapping) => {
			 return (mapping.knackField === field.key && mapping.sfField !== '');
		     })) {
			 requiredFieldsMissing.push(field);
		     }
		 }
	     })
	     
	     // If no required fields are missing, enable Preview button and set 'Preview' page to active
	     this.$store.commit(MT.SET_OBJECT_MAPPINGS_REQUIRED_FIELDS_MISSING, requiredFieldsMissing);
	 },
	 addObjectFieldMapping() {
	     this.$store.commit(MT.ADD_OBJECT_FIELD_MAPPING);
	 },
	 removeObjectFieldMapping(index) {
	     this.$store.commit(MT.REMOVE_OBJECT_FIELD_MAPPING, index);
	 }
     },
     computed: {
	 canAdvance() {
	     return this.$store.state[ST.SF].selectedObject !== '' &&
		    this.$store.state[ST.KNACK].selectedObject !== '' &&
		    this.$store.state[ST.OBJECT_MAPPINGS_REQUIRED_FIELDS_MISSING].length === 0 &&
		    this.$store.state[ST.KNACK].objectFields &&
		    this.$store.state[ST.KNACK].objectFields.length > 0;
	 },
	 ...mapState([
	     ST.CURRENT_PAGE, ST.SF, ST.KNACK, ST.OBJECT_MAPPINGS,
	     ST.OBJECT_MAPPINGS_ERROR, ST.OBJECT_MAPPINGS_REQUIRED_FIELDS_MISSING])
     },
     mounted() {
	 // $store.state restored from local storage
	 this.sfSelectedObject = this.$store.state[ST.SF].selectedObject;
	 this.knackSelectedObject = this.$store.state[ST.KNACK].selectedObject;
	 this.objectMappings = this.$store.state[ST.OBJECT_MAPPINGS];
	 this.mounted = true;
	 console.log('Mounted PageSelectObjects');
     }
 }
</script>
