import * as C from './constants';
import * as AT from './actionTypes';
import * as ST from './stateTypes';
import * as MT from './mutationTypes';

import $ from 'jquery';

export default {
    [AT.SAVE_TO_LOCAL_STORAGE] (context) {
	C.PERSIST_KEYS.forEach( (key) => {
	    window.localStorage.setItem(key, JSON.stringify(context.state[key]));
	});
    },
    [AT.PROGRESS_PAGE_IF_NEEDED] (context) {
	for (let i = context.state[ST.PAGES].length - 1; i >= 0; i--) {
	    if (context.state[ST.PAGES][i].active === true) {
		context.commit(MT.SET_CURRENT_PAGE, context.state[ST.PAGES][i].title);
		return;
	    }		
	}
    },
    [AT.CLEAR_LOCAL_STORAGE] (context) {
	window.localStorage.clear();
	window.location.reload();
    },
}
