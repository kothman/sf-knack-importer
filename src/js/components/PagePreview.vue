<template>
    <div class='row'>
	<div class='col'>
	    <div class='row mb-4'>
		<div class='col'>
		    <a href='#' @click.prevent='advanceToFinalize' class='float-right btn btn-primary'>Import</a>
		</div>
	    </div>
	    <div class='card'>
		<div class='card-body'>
		    <p class='card-text'>You're about to import all SF {{ sfSelectedObjectPrettyNamePlural }} into Knack as {{ knackSelectedObjectPrettyName }} objects. Please double check the mappings to ensure everything is in order before importing!</p>
		    <table class='table'>
			<thead>
			    <tr>
				<th>{{ sfSelectedObjectPrettyName }}</th>
				<th style='width: auto;'>=></th>
				<th>{{ knackSelectedObjectPrettyName }}</th>
			    </tr>
			</thead>
			<tbody>
			    <tr v-for='mapping in objectMappings'>
				<td>{{ mapping.sfField }} / {{ getSfFieldLabelFromName(mapping.sfField) }}</td>
				<td style='width: auto;'>=></td>
				<td>{{ mapping.knackField }} / {{ getKnackFieldNameFromKey(mapping.knackField) }}</td>
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
 import * as GT from '../lib/getterTypes';
 import * as C from '../lib/constants';
 
 import { mapState, mapGetters } from 'vuex';

 export default {
     methods: {
	 advanceToFinalize() {
	     this.$store.commit(MT.SET_PAGE_ACTIVE, 'Finalize');
	     this.$store.commit(MT.SET_CURRENT_PAGE, 'Finalize');
	 },
	 getSfFieldLabelFromName(name) {
	     let fields = this.$store.state[ST.SF].objectFields;;
	     let field = fields.find( (f) => {
		 return f.name === name;
	     });
	     if (!field)
		 throw new Exception("Could not find SF field with name '" + name + "'");
	     return field.label;
	 },
	 getKnackFieldNameFromKey(key) {
	     let fields = this.$store.state[ST.KNACK].objectFields;
	     let field = fields.find( (f) => {
		 return f.key === key;
	     });
	     if (!field)
		 throw new Exception("Could not find Knack field with key '" + key + "'");
	     return field.name;
	 },
     },
     computed: {
	 ...mapGetters({
	     sfSelectedObjectPrettyNamePlural: GT.SF_SELECTED_OBJECT_PRETTY_NAME_PLURAL,
	     sfSelectedObjectPrettyName: GT.SF_SELECTED_OBJECT_PRETTY_NAME,
	     knackSelectedObjectPrettyName: GT.KNACK_SELECTED_OBJECT_PRETTY_NAME
	 }),
	 ...mapState({
	     objectMappings: ST.OBJECT_MAPPINGS
	 })
     }
 }
</script>
