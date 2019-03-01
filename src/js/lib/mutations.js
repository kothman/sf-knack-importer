import * as MT from './mutationTypes';
import * as ST from './stateTypes';
import * as C from './constants';

export default {
    [MT.FINISHED_MOUNTING] (state) {
	state[ST.MOUNTED] = true;
    },
    [MT.SET_CURRENT_PAGE] (state, pageTitle) {
	state[ST.CURRENT_PAGE] = pageTitle;
    },
    [MT.SET_PAGE_ACTIVE] (state, pageTitle) {
	let page = state[ST.PAGES].find( (p) => {
	    return p.title === pageTitle;
	});
	console.log(page);
	console.log('Setting page active');
	if (page)
	    page.active = true;
	else
	    throw new Error("No page exists with title '" + pageTitle + "'");
    },
    [MT.SET_PAGE_INACTIVE] (state, pageTitle) {
	let page = state[ST.PAGES].find( (p) => {
	    return p.title === pageTitle;
	});
	if (page)
	    page.active = false;
	else
	    throw new Error("No page exists with title '" + pageTitle + "'");

    },
    [MT.RESET_KNACK_AUTH] (state) {
	state.isAuthorized = false;
    },
    [MT.RESTORE_FROM_LOCAL_STORAGE] (state) {
	console.log('restoring from local storage', state);
	C.PERSIST_KEYS.forEach( (key) => {
	    let data = JSON.parse(window.localStorage.getItem(key));
	    if (data !== null)
		state[key] = data;
	});
    },

    /* SF */
    [MT.STORE_VALID_SF_CREDENTIALS] (state, credentials) {
	state[ST.SF].accessToken = credentials.accessToken;
	state[ST.SF].instanceUrl = credentials.instanceUrl;
    },
    [MT.SET_SF_AUTHORIZED] (state, isAuthorized) {
	state[ST.SF].authorized = isAuthorized;
    },
    [MT.SET_SF_ERR] (state, err) {
	state[ST.SF].error = err;
    },
    [MT.SET_SF_OBJECTS] (state, objects) {
	state[ST.SF].objects = objects;
    },
    [MT.SET_SF_SELECTED_OBJECT] (state, object) {
	state[ST.SF].selectedObject = object;
    },
    [MT.SET_SF_OBJECT_FIELDS] (state, objectFields) {
	state[ST.SF].objectFields = objectFields;
    },

    /* KNACK */
    [MT.STORE_VALID_KNACK_CREDENTIALS] (state, credentials) {
	state[ST.KNACK].appId = credentials.appId;
	state[ST.KNACK].apiKey = credentials.apiKey;
    },
    [MT.SET_KNACK_AUTHORIZED] (state, isAuthorized) {
	state[ST.KNACK].authorized = isAuthorized;
    },
    [MT.SET_KNACK_ERR] (state, err) {
	state[ST.KNACK].error = err;
    },
    [MT.SET_KNACK_OBJECTS] (state, objects) {
	state[ST.KNACK].objects = objects;
    },
    [MT.SET_KNACK_SELECTED_OBJECT] (state, object) {
	state[ST.KNACK].selectedObject = object;
    },
    [MT.SET_KNACK_OBJECT_FIELDS] (state, fields) {
	state[ST.KNACK].objectFields = fields;
    },
    
    /* OBJECT MAPPINGS */
    [MT.ADD_OBJECT_FIELD_MAPPING] (state) {
	state[ST.OBJECT_MAPPINGS].push({
	    sfField: '',
	    knackField: '',
	});
    },
    [MT.REMOVE_OBJECT_FIELD_MAPPING] (state, index) {
	if (state[ST.OBJECT_MAPPINGS].length > 1) {
	    state[ST.OBJECT_MAPPINGS].splice(index, 1);
	}
    },
    [MT.SET_OBJECT_MAPPINGS_ERROR] (state, err) {
	state[ST.OBJECT_MAPPINGS_ERROR] = err;
    },
    [MT.SET_OBJECT_MAPPINGS_REQUIRED_FIELDS_MISSING] (state, requiredFieldsMissing) {
	state[ST.OBJECT_MAPPINGS_REQUIRED_FIELDS_MISSING] = requiredFieldsMissing;
    },
    [MT.RESET_KNACK_FIELD_MAPPINGS] (state) {
	for (let i = 0; i < state[ST.OBJECT_MAPPINGS].length; i++) {
	    state[ST.OBJECT_MAPPINGS][i].knackField = '';
	}
    },
    [MT.RESET_SF_FIELD_MAPPINGS] (state) {
	for (let i = 0; i < state[ST.OBJECT_MAPPINGS].length; i++) {
	    state[ST.OBJECT_MAPPINGS][i].sfField = '';
	}
    },

    /* IMPORT / EXPORT */
    [MT.SET_IMPORT_EXPORT_STARTED] (state, started) {
	state[ST.IMPORT_EXPORT_STARTED] = started;
    },

    [MT.SET_IMPORT_FINISHED] (state, finished) {
	state[ST.IMPORT_INFO].finished = finished;
    },
    [MT.PUSH_IMPORT_ERR] (state, err) {
	state[ST.IMPORT_INFO].errors.push(err);
    },
    [MT.PUSH_IMPORT_IMPORTED] (state, obj) {
	state[ST.IMPORT_INFO].imported.push(obj);
    },
    [MT.RESET_IMPORT] (state) {
	state[ST.IMPORT_INFO].errors = [];
	state[ST.IMPORT_INFO].imported = [];
	state[ST.IMPORT_INFO].finished = false;
    },

    [MT.SET_EXPORT_FINISHED] (state, finished) {
	state[ST.EXPORT_INFO].finished = finished;
    },
    [MT.SET_EXPORT_ERR] (state, err) {
	state[ST.EXPORT_INFO].error = err;
    },
    [MT.SET_EXPORT_SF_OBJECTS] (state, objects) {
	state[ST.EXPORT_INFO].sfObjects = objects;
    },
    [MT.RESET_EXPORT] (state) {
	state[ST.EXPORT_INFO].error = false;
	state[ST.EXPORT_INFO].finished = false;
	state[ST.EXPORT_INFO].sfObjects = false;
    }
    
}
