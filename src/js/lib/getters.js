import * as GT from './getterTypes';
import * as ST from './stateTypes';

export default {
    [GT.SF_SELECTED_OBJECT_PRETTY_NAME] (state) {
	let obj = state[ST.SF].objects.find( (o) => {
	    return o.name === state[ST.SF].selectedObject;
	});
	if (obj)
	    return obj.label;
	return false;
    },
    [GT.SF_SELECTED_OBJECT_PRETTY_NAME_PLURAL] (state) {
	let obj =  state[ST.SF].objects.find( (o) => {
	    return o.name === state[ST.SF].selectedObject;
	});
	if (obj)
	    return obj.labelPlural;
	return false;
    },
    [GT.KNACK_SELECTED_OBJECT_PRETTY_NAME] (state) {
	let obj = state[ST.KNACK].objects.find( (o) => {
	    return o.key === state[ST.KNACK].selectedObject;
	});
	if (obj)
	    return obj.name;
	return false;
    }
};
