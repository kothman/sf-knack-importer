require('jsdom-global')();
require('mock-local-storage');
window.localStorage = global.localStorage;
// replace window.location.reload with empty function
window.location = { reload: function() {} };
