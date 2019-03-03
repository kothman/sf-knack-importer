const l = 123;
import * as ST from './stateTypes';
import * as C from './constants';

module.exports =  (function() {
    return {
	[ST.MOUNTED]: false,
	[ST.CURRENT_PAGE]: 'Setup',
	[ST.PAGES]: [{
	    title: 'Setup',
	    active: true
	}, {
	    title: 'Select Objects',
	    active: false
	}, {
	    title: 'Preview',
	    active: false
	}, {
	    title: 'Finalize',
	    active: false
	}],
	[ST.KNACK]: {
	    error: false,
	    authorized: false,
	    appId: '',
	    apiKey: '',
	    userToken: '',
	    objects: false,
	    selectedObject: '',
	    objectFields: [],
	},
	[ST.SF]: {
	    accessToken: false,
	    instanceUrl: false,
	    error: false,
	    authorized: false,
	    objects: false,
	    selectedObject: '',
	    objectFields: [],
	},
	[ST.OBJECT_MAPPINGS]: [{sfField: '', knackField: ''}],
	[ST.OBJECT_MAPPINGS_ERROR]: false,
	[ST.OBJECT_MAPPINGS_REQUIRED_FIELDS_MISSING]: [],
	[ST.IMPORT_EXPORT_STARTED]: false,
	[ST.EXPORT_INFO]: {
	    error: false,
	    finished: false,
	    sfObjects: false,
	},
	[ST.IMPORT_INFO]: {
	    errors: [],
	    imported: [],
	    finished: false
	}
    };
})()
