(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/App.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vuex = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");

var _Navigation = _interopRequireDefault(__webpack_require__(/*! ./Navigation.vue */ "./src/js/components/Navigation.vue"));

var _PageSetup = _interopRequireDefault(__webpack_require__(/*! ./PageSetup.vue */ "./src/js/components/PageSetup.vue"));

var _PageSelectObjects = _interopRequireDefault(__webpack_require__(/*! ./PageSelectObjects.vue */ "./src/js/components/PageSelectObjects.vue"));

var _PagePreview = _interopRequireDefault(__webpack_require__(/*! ./PagePreview.vue */ "./src/js/components/PagePreview.vue"));

var _PageFinalize = _interopRequireDefault(__webpack_require__(/*! ./PageFinalize.vue */ "./src/js/components/PageFinalize.vue"));

var _ResetLocalStorage = _interopRequireDefault(__webpack_require__(/*! ./ResetLocalStorage.vue */ "./src/js/components/ResetLocalStorage.vue"));

var StateTypes = _interopRequireWildcard(__webpack_require__(/*! ../lib/stateTypes */ "./src/js/lib/stateTypes.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
var _default = {
  data() {
    return {
      test: 'test'
    };
  },

  components: {
    Navigation: _Navigation.default,
    PageSetup: _PageSetup.default,
    PageSelectObjects: _PageSelectObjects.default,
    PagePreview: _PagePreview.default,
    PageFinalize: _PageFinalize.default,
    ResetLocalStorage: _ResetLocalStorage.default
  },
  computed: (0, _vuex.mapState)([StateTypes.CURRENT_PAGE])
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/Navigation.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/Navigation.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vuex = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");

var _mutationTypes = __webpack_require__(/*! ../lib/mutationTypes */ "./src/js/lib/mutationTypes.js");

var StateTypes = _interopRequireWildcard(__webpack_require__(/*! ../lib/stateTypes */ "./src/js/lib/stateTypes.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  data: function data() {
    return {};
  },
  methods: {
    handleNavClick(title) {
      this.$store.commit(_mutationTypes.SET_CURRENT_PAGE, title);
    }

  },
  computed: (0, _vuex.mapState)([StateTypes.CURRENT_PAGE, StateTypes.PAGES]),
  mounted: function mounted() {}
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/PageFinalize.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/PageFinalize.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var AT = _interopRequireWildcard(__webpack_require__(/*! ../lib/actionTypes */ "./src/js/lib/actionTypes.js"));

var ST = _interopRequireWildcard(__webpack_require__(/*! ../lib/stateTypes */ "./src/js/lib/stateTypes.js"));

var MT = _interopRequireWildcard(__webpack_require__(/*! ../lib/mutationTypes */ "./src/js/lib/mutationTypes.js"));

var GT = _interopRequireWildcard(__webpack_require__(/*! ../lib/getterTypes */ "./src/js/lib/getterTypes.js"));

var C = _interopRequireWildcard(__webpack_require__(/*! ../lib/constants */ "./src/js/lib/constants.js"));

var _jquery = _interopRequireDefault(__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"));

var _vuex = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  computed: _objectSpread({}, (0, _vuex.mapState)({
    importExportStarted: ST.IMPORT_EXPORT_STARTED,
    exportInfo: ST.EXPORT_INFO,
    importInfo: ST.IMPORT_INFO,
    knack: ST.KNACK,
    sf: ST.SF,
    objectMappings: ST.OBJECT_MAPPINGS
  }), (0, _vuex.mapGetters)({
    sfSelectedObjectPrettyNamePlural: GT.SF_SELECTED_OBJECT_PRETTY_NAME_PLURAL
  })),
  methods: {
    retry() {
      this.fetchSfObjects();
    },

    fetchSfObjects() {
      console.log('Sending field mappings to backend.');
      this.$store.commit(MT.RESET_EXPORT);

      _jquery.default.ajax({
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
          sfObject: this.sf.selectedObject
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
        }
      });
    },

    importToKnack() {
      this.$store.commit(MT.RESET_IMPORT);
      this.exportInfo.sfObjects.forEach(obj => {
        _jquery.default.ajax({
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
            knackObject: this.knack.selectedObject
          }),
          success: (data, status, xhr) => {
            console.log('Successfully imported another object');
            this.$store.commit(MT.PUSH_IMPORT_IMPORTED, obj);
          },
          error: (data, status, xhr) => {
            this.$store.commit(MT.PUSH_IMPORT_ERR, {
              error: data,
              object: obj
            });
          },
          complete: () => {
            if (this.$store.state[ST.IMPORT_INFO].errors.length + this.$store.state[ST.IMPORT_INFO].imported.length === this.$store.state[ST.EXPORT_INFO].sfObjects.length) this.$store.commit(MT.SET_IMPORT_FINISHED, true);
          }
        });
      });
    }

  },

  mounted() {
    if (!this.importExportStarted) {
      this.$store.commit(MT.SET_IMPORT_EXPORT_STARTED, true);
      this.fetchSfObjects();
    }
  }

};
exports.default = _default;

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/PagePreview.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/PagePreview.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var AT = _interopRequireWildcard(__webpack_require__(/*! ../lib/actionTypes */ "./src/js/lib/actionTypes.js"));

var ST = _interopRequireWildcard(__webpack_require__(/*! ../lib/stateTypes */ "./src/js/lib/stateTypes.js"));

var MT = _interopRequireWildcard(__webpack_require__(/*! ../lib/mutationTypes */ "./src/js/lib/mutationTypes.js"));

var GT = _interopRequireWildcard(__webpack_require__(/*! ../lib/getterTypes */ "./src/js/lib/getterTypes.js"));

var C = _interopRequireWildcard(__webpack_require__(/*! ../lib/constants */ "./src/js/lib/constants.js"));

var _vuex = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  methods: {
    advanceToFinalize() {
      this.$store.commit(MT.SET_PAGE_ACTIVE, 'Finalize');
      this.$store.commit(MT.SET_CURRENT_PAGE, 'Finalize');
    },

    getSfFieldLabelFromName(name) {
      let fields = this.$store.state[ST.SF].objectFields;
      ;
      let field = fields.find(f => {
        return f.name === name;
      });
      if (!field) throw new Exception("Could not find SF field with name '" + name + "'");
      return field.label;
    },

    getKnackFieldNameFromKey(key) {
      let fields = this.$store.state[ST.KNACK].objectFields;
      let field = fields.find(f => {
        return f.key === key;
      });
      if (!field) throw new Exception("Could not find Knack field with key '" + key + "'");
      return field.name;
    }

  },
  computed: _objectSpread({}, (0, _vuex.mapGetters)({
    sfSelectedObjectPrettyNamePlural: GT.SF_SELECTED_OBJECT_PRETTY_NAME_PLURAL,
    sfSelectedObjectPrettyName: GT.SF_SELECTED_OBJECT_PRETTY_NAME,
    knackSelectedObjectPrettyName: GT.KNACK_SELECTED_OBJECT_PRETTY_NAME
  }), (0, _vuex.mapState)({
    objectMappings: ST.OBJECT_MAPPINGS
  }))
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/PageSelectObjects.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/PageSelectObjects.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var AT = _interopRequireWildcard(__webpack_require__(/*! ../lib/actionTypes */ "./src/js/lib/actionTypes.js"));

var ST = _interopRequireWildcard(__webpack_require__(/*! ../lib/stateTypes */ "./src/js/lib/stateTypes.js"));

var MT = _interopRequireWildcard(__webpack_require__(/*! ../lib/mutationTypes */ "./src/js/lib/mutationTypes.js"));

var C = _interopRequireWildcard(__webpack_require__(/*! ../lib/constants */ "./src/js/lib/constants.js"));

var _jquery = _interopRequireDefault(__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"));

var _vuex = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
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
        this.resetKnackMappings();
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

      _jquery.default.ajax({
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
          this.$store.commit(MT.SET_OBJECT_MAPPINGS_ERROR, 'Error retrieving SF fields for sobject ' + this.$store.state[ST.KNACK].selectedObject + ': ' + data.responseText);
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

      _jquery.default.ajax({
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
          this.$store.commit(MT.SET_OBJECT_MAPPINGS_ERROR, 'Error retrieving SF fields for sobject ' + this.$store.state[ST.SF].selectedObject + ': ' + data.responseText);
        },
        complete: (data, status, xhr) => {
          this.$store.dispatch(AT.SAVE_TO_LOCAL_STORAGE);
        }
      });
    },

    checkRequiredKnackFieldsMapped() {
      console.log('Checking required fields'); // Go through each required field, check if mapping exists for field key

      let requiredFieldsMissing = [];
      this.$store.state[ST.KNACK].objectFields.forEach(field => {
        if (field.required) {
          if (!this.objectMappings.find(mapping => {
            return mapping.knackField === field.key && mapping.sfField !== '';
          })) {
            requiredFieldsMissing.push(field);
          }
        }
      }); // If no required fields are missing, enable Preview button and set 'Preview' page to active

      this.$store.commit(MT.SET_OBJECT_MAPPINGS_REQUIRED_FIELDS_MISSING, requiredFieldsMissing);
    },

    addObjectFieldMapping() {
      this.$store.commit(MT.ADD_OBJECT_FIELD_MAPPING);
    },

    removeObjectFieldMapping(index) {
      this.$store.commit(MT.REMOVE_OBJECT_FIELD_MAPPING, index);
    }

  },
  computed: _objectSpread({
    canAdvance() {
      return this.$store.state[ST.SF].selectedObject !== '' && this.$store.state[ST.KNACK].selectedObject !== '' && this.$store.state[ST.OBJECT_MAPPINGS_REQUIRED_FIELDS_MISSING].length === 0 && this.$store.state[ST.KNACK].objectFields && this.$store.state[ST.KNACK].objectFields.length > 0;
    }

  }, (0, _vuex.mapState)([ST.CURRENT_PAGE, ST.SF, ST.KNACK, ST.OBJECT_MAPPINGS, ST.OBJECT_MAPPINGS_ERROR, ST.OBJECT_MAPPINGS_REQUIRED_FIELDS_MISSING])),

  mounted() {
    // $store.state restored from local storage
    this.sfSelectedObject = this.$store.state[ST.SF].selectedObject;
    this.knackSelectedObject = this.$store.state[ST.KNACK].selectedObject;
    this.objectMappings = this.$store.state[ST.OBJECT_MAPPINGS];
    this.mounted = true;
    console.log('Mounted PageSelectObjects');
  }

};
exports.default = _default;

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/PageSetup.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/PageSetup.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vuex = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");

var ST = _interopRequireWildcard(__webpack_require__(/*! ../lib/stateTypes */ "./src/js/lib/stateTypes.js"));

var C = _interopRequireWildcard(__webpack_require__(/*! ../lib/constants */ "./src/js/lib/constants.js"));

var MT = _interopRequireWildcard(__webpack_require__(/*! ../lib/mutationTypes */ "./src/js/lib/mutationTypes.js"));

var AT = _interopRequireWildcard(__webpack_require__(/*! ../lib/actionTypes */ "./src/js/lib/actionTypes.js"));

var _jquery = _interopRequireDefault(__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"));

var _queryString = _interopRequireDefault(__webpack_require__(/*! query-string */ "./node_modules/query-string/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
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
      _jquery.default.ajax({
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
  computed: _objectSpread({
    canAdvance() {
      return this.$store.state[ST.SF].authorized && this.$store.state[ST.KNACK].authorized;
    }

  }, (0, _vuex.mapState)([ST.SF, ST.KNACK])),

  beforeMount() {
    // Check for SF access_token and instance_url
    let parsedQueryString = _queryString.default.parse(location.search);

    if (parsedQueryString.access_token && parsedQueryString.instance_url) {
      let accessToken = parsedQueryString.access_token;
      let instanceUrl = parsedQueryString.instance_url; // get list of sobjects

      _jquery.default.ajax({
        url: '/sf/objects',
        type: 'GET',
        headers: {
          'X-SF-Access-Token': accessToken,
          'X-SF-Instance-URL': instanceUrl
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
    this.knackApiKey = this.$store.state[ST.KNACK].apiKey; // Advance to next page if not mounted (first load)

    if (!this.$store.state[ST.MOUNTED]) this.advanceIfReady();
    console.log('Mounted PageSetup');
  }

};
exports.default = _default;

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/ResetLocalStorage.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/ResetLocalStorage.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var ST = _interopRequireWildcard(__webpack_require__(/*! ../lib/stateTypes */ "./src/js/lib/stateTypes.js"));

var AT = _interopRequireWildcard(__webpack_require__(/*! ../lib/actionTypes */ "./src/js/lib/actionTypes.js"));

var MT = AT;

var C = _interopRequireWildcard(__webpack_require__(/*! ../lib/constants */ "./src/js/lib/constants.js"));

var _vuex = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

//
//
//
//
//
//
//
//
var _default = {
  methods: {
    clearLocalStorage() {
      this.$store.dispatch(AT.CLEAR_LOCAL_STORAGE);
    }

  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/App.vue?vue&type=template&id=9c9d20f6&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/App.vue?vue&type=template&id=9c9d20f6& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container" },
    [
      _c("navigation"),
      _vm._v(" "),
      _vm.CURRENT_PAGE === "Setup" ? _c("page-setup") : _vm._e(),
      _vm._v(" "),
      _vm.CURRENT_PAGE === "Select Objects"
        ? _c("page-select-objects")
        : _vm._e(),
      _vm._v(" "),
      _vm.CURRENT_PAGE === "Preview" ? _c("page-preview") : _vm._e(),
      _vm._v(" "),
      _vm.CURRENT_PAGE === "Finalize" ? _c("page-finalize") : _vm._e(),
      _vm._v(" "),
      _c("reset-local-storage")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/Navigation.vue?vue&type=template&id=739d49e0&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/Navigation.vue?vue&type=template&id=739d49e0& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c(
      "header",
      { staticClass: "nav nav-pills p-4 mb-5 border-bottom" },
      _vm._l(_vm.PAGES, function(page) {
        return _c(
          "a",
          {
            staticClass: "nav-item nav-link",
            class: {
              active: _vm.CURRENT_PAGE == page.title,
              disabled: !page.active,
              previous: page.active && _vm.CURRENT_PAGE != page.title
            },
            attrs: { href: "#" },
            on: {
              click: function($event) {
                return _vm.handleNavClick(page.title)
              }
            }
          },
          [_vm._v(_vm._s(page.title))]
        )
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/PageFinalize.vue?vue&type=template&id=5c6c6219&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/PageFinalize.vue?vue&type=template&id=5c6c6219& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row justify-content-center finalize" }, [
    _c("div", { staticClass: "col" }, [
      _c("div", { staticClass: "row retry mb-4" }, [
        _c("div", { staticClass: "col-auto ml-auto" }, [
          _c(
            "a",
            {
              staticClass: "btn btn-warning",
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.retry($event)
                }
              }
            },
            [_vm._v("Retry")]
          )
        ])
      ]),
      _vm._v(" "),
      _vm.exportInfo.error
        ? _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-auto" }, [
              _c("div", { staticClass: "alert alert-danger" }, [
                _vm._v(_vm._s(_vm.exportInfo.error))
              ]),
              _vm._v(" "),
              !_vm.exportInfo.finished
                ? _c("div", { staticClass: "card" }, [
                    _c("div", { staticClass: "card-header" }, [
                      _vm._v("Exporting Objects from Salesforce")
                    ]),
                    _vm._v(" "),
                    _vm._m(0)
                  ])
                : _vm._e()
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col" }, [
          _c("div", { staticClass: "card" }, [
            _c(
              "div",
              {
                staticClass:
                  "card-header d-flex align-items-center justify-content-between"
              },
              [
                _vm._v("\n\t\t\tProgress\n\t\t\t"),
                _c(
                  "div",
                  {
                    staticClass: "progress ml-4",
                    staticStyle: { "flex-grow": "1" }
                  },
                  [
                    _c("div", {
                      staticClass: "progress-bar",
                      class: {
                        "progress-bar-animated": !_vm.importInfo.finished,
                        "progress-bar-striped": !_vm.importInfo.finished
                      },
                      style: {
                        width:
                          ((_vm.importInfo.errors.length +
                            _vm.importInfo.imported.length) /
                            _vm.exportInfo.sfObjects.length) *
                            100 +
                          "%"
                      },
                      attrs: {
                        role: "progressbar",
                        "aria-valuenow": "75",
                        "aria-valuemin": "0",
                        "aria-valuemax": _vm.exportInfo.sfObjects.length
                      }
                    })
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _vm.exportInfo.sfObjects
                ? _c("div", { staticClass: "row" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-11" }, [
                      _vm._v(
                        "Retrieved " +
                          _vm._s(_vm.sfSelectedObjectPrettyNamePlural)
                      )
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.exportInfo.sfObjects
                ? _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-1" }, [
                      !_vm.importInfo.finished
                        ? _c(
                            "div",
                            {
                              staticClass: "spinner-border spinner-import",
                              attrs: { role: "status" }
                            },
                            [
                              _c("span", { staticClass: "sr-only" }, [
                                _vm._v("Loading...")
                              ])
                            ]
                          )
                        : _c(
                            "i",
                            { staticClass: "material-icons text-success" },
                            [_vm._v("check_circle_outline")]
                          )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-11" }, [
                      _vm._v(
                        "Importing " +
                          _vm._s(_vm.sfSelectedObjectPrettyNamePlural) +
                          " to Knack [" +
                          _vm._s(
                            _vm.importInfo.errors.length +
                              _vm.importInfo.imported.length
                          ) +
                          "/" +
                          _vm._s(_vm.exportInfo.sfObjects.length) +
                          "]"
                      )
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.exportInfo.finished
                ? _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col" }, [
                      _c("p", { staticClass: "card-text" }, [
                        _vm._v("Summary")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _vm.importInfo.errors.length !== 0
                          ? _c("div", { staticClass: "col" }, [
                              _c("div", { staticClass: "card" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "card-header bg-danger text-white"
                                  },
                                  [_vm._v("Errors")]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "card-body" }, [
                                  _vm._v(
                                    "\n\t\t\t\t\t    " +
                                      _vm._s(_vm.importInfo.errors) +
                                      "\n\t\t\t\t\t"
                                  )
                                ])
                              ])
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.importInfo.imported.length !== 0
                          ? _c("div", { staticClass: "col" }, [
                              _c("div", { staticClass: "card" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "card-header bg-primary text-white"
                                  },
                                  [_vm._v("Imported")]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "card-body" }, [
                                  _c(
                                    "ul",
                                    _vm._l(_vm.importInfo.imported, function(
                                      sobject
                                    ) {
                                      return _c("li", [
                                        _c(
                                          "a",
                                          {
                                            attrs: {
                                              href:
                                                _vm.sf.instanceUrl +
                                                "/" +
                                                sobject.Id,
                                              target: "_blank"
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n\t\t\t\t\t\t\t" +
                                                _vm._s(sobject.Id) +
                                                "\n\t\t\t\t\t\t    "
                                            )
                                          ]
                                        )
                                      ])
                                    }),
                                    0
                                  )
                                ])
                              ])
                            ])
                          : _vm._e()
                      ])
                    ])
                  ])
                : _vm._e()
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-body text-center" }, [
      _c("div", { staticClass: "spinner-border", attrs: { role: "status" } }, [
        _c("span", { staticClass: "sr-only" }, [_vm._v("Loading...")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-1" }, [
      _c("i", { staticClass: "material-icons text-success" }, [
        _vm._v("check_circle_outline")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/PagePreview.vue?vue&type=template&id=7d99f0c6&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/PagePreview.vue?vue&type=template&id=7d99f0c6& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col" }, [
      _c("div", { staticClass: "row mb-4" }, [
        _c("div", { staticClass: "col" }, [
          _c(
            "a",
            {
              staticClass: "float-right btn btn-primary",
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.advanceToFinalize($event)
                }
              }
            },
            [_vm._v("Import")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-body" }, [
          _c("p", { staticClass: "card-text" }, [
            _vm._v(
              "You're about to import all SF " +
                _vm._s(_vm.sfSelectedObjectPrettyNamePlural) +
                " into Knack as " +
                _vm._s(_vm.knackSelectedObjectPrettyName) +
                " objects. Please double check the mappings to ensure everything is in order before importing!"
            )
          ]),
          _vm._v(" "),
          _c("table", { staticClass: "table" }, [
            _c("thead", [
              _c("tr", [
                _c("th", [_vm._v(_vm._s(_vm.sfSelectedObjectPrettyName))]),
                _vm._v(" "),
                _c("th", { staticStyle: { width: "auto" } }, [_vm._v("=>")]),
                _vm._v(" "),
                _c("th", [_vm._v(_vm._s(_vm.knackSelectedObjectPrettyName))])
              ])
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.objectMappings, function(mapping) {
                return _c("tr", [
                  _c("td", [
                    _vm._v(
                      _vm._s(mapping.sfField) +
                        " / " +
                        _vm._s(_vm.getSfFieldLabelFromName(mapping.sfField))
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", { staticStyle: { width: "auto" } }, [_vm._v("=>")]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      _vm._s(mapping.knackField) +
                        " / " +
                        _vm._s(_vm.getKnackFieldNameFromKey(mapping.knackField))
                    )
                  ])
                ])
              }),
              0
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/PageSelectObjects.vue?vue&type=template&id=b12502e6&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/PageSelectObjects.vue?vue&type=template&id=b12502e6& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-12" }, [
      _c("div", { staticClass: "mb-4 row" }, [
        _c("div", { staticClass: "col" }, [
          _c(
            "a",
            {
              staticClass: "float-right btn btn-primary",
              class: { disabled: !_vm.canAdvance },
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.advanceToPreview($event)
                }
              }
            },
            [_vm._v("Preview")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-body" }, [
          _vm.OBJECT_MAPPINGS_REQUIRED_FIELDS_MISSING.length > 0
            ? _c("div", { staticClass: "alert alert-info" }, [
                _c("p", [
                  _vm._v(
                    "The following required fields on the Knack object must be mapped to continue."
                  )
                ]),
                _vm._v(" "),
                _c(
                  "p",
                  _vm._l(_vm.OBJECT_MAPPINGS_REQUIRED_FIELDS_MISSING, function(
                    field,
                    index
                  ) {
                    return _c("span", [
                      _vm._v(
                        _vm._s(field.name) +
                          _vm._s(
                            index !==
                              _vm.OBJECT_MAPPINGS_REQUIRED_FIELDS_MISSING
                                .length -
                                1
                              ? ", "
                              : ""
                          )
                      )
                    ])
                  }),
                  0
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.OBJECT_MAPPINGS_ERROR
            ? _c("div", { staticClass: "alert alert-danger" }, [
                _vm._v(_vm._s(_vm.OBJECT_MAPPINGS_ERROR))
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("table", { staticClass: "table" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "tbody",
              [
                _c("tr", { staticClass: "select-objects" }, [
                  _c("th", [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "sf-object" } }, [
                        _vm._v("Object")
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.sfSelectedObject,
                              expression: "sfSelectedObject"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { id: "sf-object", name: "sf-object" },
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.sfSelectedObject = $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "" } }, [
                            _vm._v("Select an object")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.SF.objects, function(object) {
                            return _c(
                              "option",
                              { domProps: { value: object.name } },
                              [_vm._v(_vm._s(object.label))]
                            )
                          })
                        ],
                        2
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "knack-object" } }, [
                        _vm._v("Object")
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.knackSelectedObject,
                              expression: "knackSelectedObject"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { id: "knack-object", name: "knack-object" },
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.knackSelectedObject = $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "" } }, [
                            _vm._v("Select an object")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.KNACK.objects, function(object) {
                            return _c(
                              "option",
                              { domProps: { value: object.key } },
                              [_vm._v(_vm._s(object.name))]
                            )
                          })
                        ],
                        2
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _vm._l(_vm.OBJECT_MAPPINGS, function(mapping, index) {
                  return _vm.SF.selectedObject && _vm.KNACK.selectedObject
                    ? _c("tr", { staticClass: "mapping" }, [
                        _c("td", [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: mapping.sfField,
                                  expression: "mapping.sfField"
                                }
                              ],
                              staticClass: "form-control",
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    mapping,
                                    "sfField",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "" } }, [
                                _vm._v("Select a field")
                              ]),
                              _vm._v(" "),
                              _vm._l(_vm.SF.objectFields, function(field) {
                                return _vm.SF.objectFields
                                  ? _c(
                                      "option",
                                      { domProps: { value: field.name } },
                                      [_vm._v(_vm._s(field.label))]
                                    )
                                  : _vm._e()
                              })
                            ],
                            2
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: mapping.knackField,
                                  expression: "mapping.knackField"
                                }
                              ],
                              staticClass: "form-control",
                              on: {
                                change: [
                                  function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      mapping,
                                      "knackField",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  },
                                  _vm.checkRequiredKnackFieldsMapped
                                ]
                              }
                            },
                            [
                              _c("option", { attrs: { value: "" } }, [
                                _vm._v("Select a field")
                              ]),
                              _vm._v(" "),
                              _vm._l(_vm.KNACK.objectFields, function(field) {
                                return _c(
                                  "option",
                                  { domProps: { value: field.key } },
                                  [
                                    _vm._v(
                                      _vm._s(field.name) +
                                        " " +
                                        _vm._s(field.required ? "*" : "")
                                    )
                                  ]
                                )
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass: "btn btn-danger ml-4",
                              class: {
                                disabled: _vm.objectMappings.length <= 1
                              },
                              attrs: { href: "#", title: "Delete mapping" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.removeObjectFieldMapping(index)
                                }
                              }
                            },
                            [_vm._v("X")]
                          )
                        ])
                      ])
                    : _vm._e()
                }),
                _vm._v(" "),
                _c("tr", { staticClass: "add-mapping" }, [
                  _c("td"),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-primary ml-auto",
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.addObjectFieldMapping($event)
                          }
                        }
                      },
                      [_vm._v("Add Mapping")]
                    )
                  ])
                ])
              ],
              2
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [_c("th", [_vm._v("Salesforce")]), _c("th", [_vm._v("Knack")])])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/PageSetup.vue?vue&type=template&id=22382712&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/PageSetup.vue?vue&type=template&id=22382712& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-sm-6 mb-4" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-body" }, [
          _c("h3", { staticClass: "card-title" }, [
            _vm._v("\n\t\t\tSalesforce\n\t\t\t"),
            _vm.SF.authorized
              ? _c(
                  "i",
                  { staticClass: "material-icons text-success float-right" },
                  [_vm._v("check_circle_outline")]
                )
              : _vm._e()
          ]),
          _vm._v(" "),
          _vm.SF.error
            ? _c("div", { staticClass: "alert alert-danger" }, [
                _vm._v(_vm._s(_vm.SF.error))
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.SF.authorized
            ? _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "access-token" } }, [
                  _vm._v("Access Token")
                ]),
                _vm._v(" "),
                _c("input", {
                  staticClass: "form-control",
                  attrs: { id: "access-token" },
                  domProps: { value: _vm.SF.accessToken },
                  on: {
                    keydown: function($event) {
                      $event.preventDefault()
                    },
                    click: function(e) {
                      e.currentTarget.select()
                    }
                  }
                })
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "btn",
              class: {
                "btn-primary": !_vm.SF.authorized,
                "btn-success": _vm.SF.authorized
              },
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.redirectToSFAuth($event)
                }
              }
            },
            [_vm._v(_vm._s(_vm.SF.authorized ? "Success" : "Authorize"))]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-sm-6 mb-4" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-body" }, [
          _c("h3", { staticClass: "card-title" }, [
            _vm._v("\n\t\t\tKnack\n\t\t\t"),
            _vm.KNACK.authorized
              ? _c(
                  "i",
                  { staticClass: "material-icons text-success float-right" },
                  [_vm._v("check_circle_outline")]
                )
              : _vm._e()
          ]),
          _vm._v(" "),
          _vm.KNACK.error
            ? _c(
                "div",
                { staticClass: "alert alert-danger", attrs: { role: "alert" } },
                [_vm._v("\n\t\t\t" + _vm._s(_vm.KNACK.error) + "\n\t\t    ")]
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.handleKnackCredentials($event)
                }
              }
            },
            [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("App ID")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.knackAppId,
                      expression: "knackAppId"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.knackAppId },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.knackAppId = $event.target.value
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("API Key")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.knackApiKey,
                      expression: "knackApiKey"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.knackApiKey },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.knackApiKey = $event.target.value
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn",
                  class: {
                    "btn-primary": !_vm.KNACK.authorized,
                    "btn-success": _vm.KNACK.authorized
                  },
                  attrs: { type: "submit" }
                },
                [_vm._v(_vm._s(_vm.KNACK.authorized ? "Success" : "Authorize"))]
              )
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/ResetLocalStorage.vue?vue&type=template&id=86619e3a&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/ResetLocalStorage.vue?vue&type=template&id=86619e3a& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("footer", { staticClass: "row" }, [
    _c("nav", { staticClass: "nav nav-pills mx-auto p-5" }, [
      _c(
        "a",
        {
          staticClass: "nav-item nav-link active bg-danger",
          attrs: { href: "#" },
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.clearLocalStorage($event)
            }
          }
        },
        [_vm._v("Clear Session")]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = _interopRequireDefault(__webpack_require__(/*! vue/dist/vue.js */ "./node_modules/vue/dist/vue.js"));

var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js"));

var _jquery = _interopRequireDefault(__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"));

var _queryString = _interopRequireDefault(__webpack_require__(/*! query-string */ "./node_modules/query-string/index.js"));

var _App = _interopRequireDefault(__webpack_require__(/*! ./components/App.vue */ "./src/js/components/App.vue"));

var _mutations = _interopRequireDefault(__webpack_require__(/*! ./lib/mutations */ "./src/js/lib/mutations.js"));

var _state = _interopRequireDefault(__webpack_require__(/*! ./lib/state */ "./src/js/lib/state.js"));

var _actions = _interopRequireDefault(__webpack_require__(/*! ./lib/actions */ "./src/js/lib/actions.js"));

var _getters = _interopRequireDefault(__webpack_require__(/*! ./lib/getters */ "./src/js/lib/getters.js"));

var MT = _interopRequireWildcard(__webpack_require__(/*! ./lib/mutationTypes */ "./src/js/lib/mutationTypes.js"));

var ST = _interopRequireWildcard(__webpack_require__(/*! ./lib/stateTypes */ "./src/js/lib/stateTypes.js"));

var AT = _interopRequireWildcard(__webpack_require__(/*! ./lib/actionTypes */ "./src/js/lib/actionTypes.js"));

var GT = _interopRequireWildcard(__webpack_require__(/*! ./lib/getterTypes */ "./src/js/lib/getterTypes.js"));

var C = _interopRequireWildcard(__webpack_require__(/*! ./lib/constants */ "./src/js/lib/constants.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const mapState = _vuex.default.mapState;

_vue.default.use(_vuex.default);

let store = new _vuex.default.Store({
  state: _state.default,
  mutations: _mutations.default,
  actions: _actions.default,
  getters: _getters.default
});
let vueData = {
  el: '#app',
  template: '<application></application>',
  store,
  components: {
    Application: _App.default
  },
  computed: _objectSpread({}, mapState([ST.CURRENT_PAGE])),
  methods: {
    updateImportInfoFinished: function updateImportInfoFinished() {
      if (this.importInfo.errors.length + this.importInfo.imported.length === this.exportInfo.sfObjects.length) this.importInfo.finished = true;else this.importInfo.finished = false;
    }
  },
  beforeMount: function beforeMount() {
    this.$store.commit(MT.RESTORE_FROM_LOCAL_STORAGE);
  },
  mounted: function mounted() {
    // If both apps are authenticated, make 'Select Objects' page active.
    // Preview and Finalize pages should never be active until user chooses to proceed,
    // and Preview/Finalize pages won't be active on reload (require confirmation again)
    console.log('Vue initialized');
    this.$store.commit(MT.FINISHED_MOUNTING);
  }
};
let vm = new _vue.default(vueData); // export vm for unit tests

module.exports = vueData;

/***/ }),

/***/ "./src/js/components/App.vue":
/*!***********************************!*\
  !*** ./src/js/components/App.vue ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_9c9d20f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=9c9d20f6& */ "./src/js/components/App.vue?vue&type=template&id=9c9d20f6&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./src/js/components/App.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_9c9d20f6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_9c9d20f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/components/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/App.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./src/js/components/App.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/App.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/components/App.vue?vue&type=template&id=9c9d20f6&":
/*!******************************************************************!*\
  !*** ./src/js/components/App.vue?vue&type=template&id=9c9d20f6& ***!
  \******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_9c9d20f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=9c9d20f6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/App.vue?vue&type=template&id=9c9d20f6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_9c9d20f6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_9c9d20f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/Navigation.vue":
/*!******************************************!*\
  !*** ./src/js/components/Navigation.vue ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navigation_vue_vue_type_template_id_739d49e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navigation.vue?vue&type=template&id=739d49e0& */ "./src/js/components/Navigation.vue?vue&type=template&id=739d49e0&");
/* harmony import */ var _Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation.vue?vue&type=script&lang=js& */ "./src/js/components/Navigation.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Navigation_vue_vue_type_template_id_739d49e0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Navigation_vue_vue_type_template_id_739d49e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/components/Navigation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/Navigation.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./src/js/components/Navigation.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4!../../../node_modules/vue-loader/lib??vue-loader-options!./Navigation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/Navigation.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/components/Navigation.vue?vue&type=template&id=739d49e0&":
/*!*************************************************************************!*\
  !*** ./src/js/components/Navigation.vue?vue&type=template&id=739d49e0& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_739d49e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Navigation.vue?vue&type=template&id=739d49e0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/Navigation.vue?vue&type=template&id=739d49e0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_739d49e0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_739d49e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/PageFinalize.vue":
/*!********************************************!*\
  !*** ./src/js/components/PageFinalize.vue ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageFinalize_vue_vue_type_template_id_5c6c6219___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageFinalize.vue?vue&type=template&id=5c6c6219& */ "./src/js/components/PageFinalize.vue?vue&type=template&id=5c6c6219&");
/* harmony import */ var _PageFinalize_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageFinalize.vue?vue&type=script&lang=js& */ "./src/js/components/PageFinalize.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _PageFinalize_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _PageFinalize_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PageFinalize_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PageFinalize_vue_vue_type_template_id_5c6c6219___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PageFinalize_vue_vue_type_template_id_5c6c6219___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/components/PageFinalize.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/PageFinalize.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./src/js/components/PageFinalize.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PageFinalize_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4!../../../node_modules/vue-loader/lib??vue-loader-options!./PageFinalize.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/PageFinalize.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PageFinalize_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PageFinalize_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PageFinalize_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PageFinalize_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PageFinalize_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/components/PageFinalize.vue?vue&type=template&id=5c6c6219&":
/*!***************************************************************************!*\
  !*** ./src/js/components/PageFinalize.vue?vue&type=template&id=5c6c6219& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageFinalize_vue_vue_type_template_id_5c6c6219___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PageFinalize.vue?vue&type=template&id=5c6c6219& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/PageFinalize.vue?vue&type=template&id=5c6c6219&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageFinalize_vue_vue_type_template_id_5c6c6219___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageFinalize_vue_vue_type_template_id_5c6c6219___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/PagePreview.vue":
/*!*******************************************!*\
  !*** ./src/js/components/PagePreview.vue ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PagePreview_vue_vue_type_template_id_7d99f0c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PagePreview.vue?vue&type=template&id=7d99f0c6& */ "./src/js/components/PagePreview.vue?vue&type=template&id=7d99f0c6&");
/* harmony import */ var _PagePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PagePreview.vue?vue&type=script&lang=js& */ "./src/js/components/PagePreview.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _PagePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _PagePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PagePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PagePreview_vue_vue_type_template_id_7d99f0c6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PagePreview_vue_vue_type_template_id_7d99f0c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/components/PagePreview.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/PagePreview.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./src/js/components/PagePreview.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PagePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4!../../../node_modules/vue-loader/lib??vue-loader-options!./PagePreview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/PagePreview.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PagePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PagePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PagePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PagePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PagePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/components/PagePreview.vue?vue&type=template&id=7d99f0c6&":
/*!**************************************************************************!*\
  !*** ./src/js/components/PagePreview.vue?vue&type=template&id=7d99f0c6& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PagePreview_vue_vue_type_template_id_7d99f0c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PagePreview.vue?vue&type=template&id=7d99f0c6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/PagePreview.vue?vue&type=template&id=7d99f0c6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PagePreview_vue_vue_type_template_id_7d99f0c6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PagePreview_vue_vue_type_template_id_7d99f0c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/PageSelectObjects.vue":
/*!*************************************************!*\
  !*** ./src/js/components/PageSelectObjects.vue ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageSelectObjects_vue_vue_type_template_id_b12502e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageSelectObjects.vue?vue&type=template&id=b12502e6& */ "./src/js/components/PageSelectObjects.vue?vue&type=template&id=b12502e6&");
/* harmony import */ var _PageSelectObjects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageSelectObjects.vue?vue&type=script&lang=js& */ "./src/js/components/PageSelectObjects.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _PageSelectObjects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _PageSelectObjects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PageSelectObjects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PageSelectObjects_vue_vue_type_template_id_b12502e6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PageSelectObjects_vue_vue_type_template_id_b12502e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/components/PageSelectObjects.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/PageSelectObjects.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./src/js/components/PageSelectObjects.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PageSelectObjects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4!../../../node_modules/vue-loader/lib??vue-loader-options!./PageSelectObjects.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/PageSelectObjects.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PageSelectObjects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PageSelectObjects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PageSelectObjects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PageSelectObjects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PageSelectObjects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/components/PageSelectObjects.vue?vue&type=template&id=b12502e6&":
/*!********************************************************************************!*\
  !*** ./src/js/components/PageSelectObjects.vue?vue&type=template&id=b12502e6& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageSelectObjects_vue_vue_type_template_id_b12502e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PageSelectObjects.vue?vue&type=template&id=b12502e6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/PageSelectObjects.vue?vue&type=template&id=b12502e6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageSelectObjects_vue_vue_type_template_id_b12502e6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageSelectObjects_vue_vue_type_template_id_b12502e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/PageSetup.vue":
/*!*****************************************!*\
  !*** ./src/js/components/PageSetup.vue ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageSetup_vue_vue_type_template_id_22382712___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageSetup.vue?vue&type=template&id=22382712& */ "./src/js/components/PageSetup.vue?vue&type=template&id=22382712&");
/* harmony import */ var _PageSetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageSetup.vue?vue&type=script&lang=js& */ "./src/js/components/PageSetup.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _PageSetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _PageSetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PageSetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PageSetup_vue_vue_type_template_id_22382712___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PageSetup_vue_vue_type_template_id_22382712___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/components/PageSetup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/PageSetup.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./src/js/components/PageSetup.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PageSetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4!../../../node_modules/vue-loader/lib??vue-loader-options!./PageSetup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/PageSetup.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PageSetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PageSetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PageSetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PageSetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PageSetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/components/PageSetup.vue?vue&type=template&id=22382712&":
/*!************************************************************************!*\
  !*** ./src/js/components/PageSetup.vue?vue&type=template&id=22382712& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageSetup_vue_vue_type_template_id_22382712___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PageSetup.vue?vue&type=template&id=22382712& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/PageSetup.vue?vue&type=template&id=22382712&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageSetup_vue_vue_type_template_id_22382712___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageSetup_vue_vue_type_template_id_22382712___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/ResetLocalStorage.vue":
/*!*************************************************!*\
  !*** ./src/js/components/ResetLocalStorage.vue ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResetLocalStorage_vue_vue_type_template_id_86619e3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResetLocalStorage.vue?vue&type=template&id=86619e3a& */ "./src/js/components/ResetLocalStorage.vue?vue&type=template&id=86619e3a&");
/* harmony import */ var _ResetLocalStorage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResetLocalStorage.vue?vue&type=script&lang=js& */ "./src/js/components/ResetLocalStorage.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ResetLocalStorage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ResetLocalStorage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ResetLocalStorage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResetLocalStorage_vue_vue_type_template_id_86619e3a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ResetLocalStorage_vue_vue_type_template_id_86619e3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/components/ResetLocalStorage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/ResetLocalStorage.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./src/js/components/ResetLocalStorage.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetLocalStorage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4!../../../node_modules/vue-loader/lib??vue-loader-options!./ResetLocalStorage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/ResetLocalStorage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetLocalStorage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetLocalStorage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetLocalStorage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetLocalStorage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetLocalStorage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/components/ResetLocalStorage.vue?vue&type=template&id=86619e3a&":
/*!********************************************************************************!*\
  !*** ./src/js/components/ResetLocalStorage.vue?vue&type=template&id=86619e3a& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetLocalStorage_vue_vue_type_template_id_86619e3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ResetLocalStorage.vue?vue&type=template&id=86619e3a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/ResetLocalStorage.vue?vue&type=template&id=86619e3a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetLocalStorage_vue_vue_type_template_id_86619e3a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetLocalStorage_vue_vue_type_template_id_86619e3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/lib/actionTypes.js":
/*!***********************************!*\
  !*** ./src/js/lib/actionTypes.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CLEAR_LOCAL_STORAGE = exports.PROGRESS_PAGE_IF_NEEDED = exports.SAVE_TO_LOCAL_STORAGE = void 0;
const SAVE_TO_LOCAL_STORAGE = 'SAVE_TO_LOCAL_STORAGE';
exports.SAVE_TO_LOCAL_STORAGE = SAVE_TO_LOCAL_STORAGE;
const PROGRESS_PAGE_IF_NEEDED = 'PROGRESS_PAGE_IF_NEEDED';
exports.PROGRESS_PAGE_IF_NEEDED = PROGRESS_PAGE_IF_NEEDED;
const CLEAR_LOCAL_STORAGE = 'CLEAR_LOCAL_STORAGE';
exports.CLEAR_LOCAL_STORAGE = CLEAR_LOCAL_STORAGE;

/***/ }),

/***/ "./src/js/lib/actions.js":
/*!*******************************!*\
  !*** ./src/js/lib/actions.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var C = _interopRequireWildcard(__webpack_require__(/*! ./constants */ "./src/js/lib/constants.js"));

var AT = _interopRequireWildcard(__webpack_require__(/*! ./actionTypes */ "./src/js/lib/actionTypes.js"));

var ST = _interopRequireWildcard(__webpack_require__(/*! ./stateTypes */ "./src/js/lib/stateTypes.js"));

var MT = _interopRequireWildcard(__webpack_require__(/*! ./mutationTypes */ "./src/js/lib/mutationTypes.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = {
  [AT.SAVE_TO_LOCAL_STORAGE](context) {
    C.PERSIST_KEYS.forEach(key => {
      window.localStorage.setItem(key, JSON.stringify(context.state[key]));
    });
  },

  [AT.PROGRESS_PAGE_IF_NEEDED](context) {
    for (let i = context.state[ST.PAGES].length - 1; i >= 0; i--) {
      if (context.state[ST.PAGES][i].active === true) {
        context.commit(MT.SET_CURRENT_PAGE, context.state[ST.PAGES][i].title);
        return;
      }
    }
  },

  [AT.CLEAR_LOCAL_STORAGE](context) {
    window.localStorage.clear();
    window.location.reload();
  }

};
exports.default = _default;

/***/ }),

/***/ "./src/js/lib/constants.js":
/*!*********************************!*\
  !*** ./src/js/lib/constants.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KNACK_BASE_URL = exports.PERSIST_KEYS = void 0;

var ST = _interopRequireWildcard(__webpack_require__(/*! ./stateTypes */ "./src/js/lib/stateTypes.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const PERSIST_KEYS = [ST.KNACK, ST.SF, ST.OBJECT_MAPPINGS, ST.OBJECT_MAPPINGS_ERROR, ST.OBJECT_MAPPINGS_REQUIRED_FIELDS_MISSING];
exports.PERSIST_KEYS = PERSIST_KEYS;
const KNACK_BASE_URL = 'https://api.knack.com/v1/';
exports.KNACK_BASE_URL = KNACK_BASE_URL;

/***/ }),

/***/ "./src/js/lib/getterTypes.js":
/*!***********************************!*\
  !*** ./src/js/lib/getterTypes.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KNACK_SELECTED_OBJECT_PRETTY_NAME = exports.SF_SELECTED_OBJECT_PRETTY_NAME_PLURAL = exports.SF_SELECTED_OBJECT_PRETTY_NAME = void 0;
const SF_SELECTED_OBJECT_PRETTY_NAME = 'SF_SELECTED_OBJECT_PRETTY_NAME';
exports.SF_SELECTED_OBJECT_PRETTY_NAME = SF_SELECTED_OBJECT_PRETTY_NAME;
const SF_SELECTED_OBJECT_PRETTY_NAME_PLURAL = 'SF_SELECTED_OBJECT_PRETTY_NAME_PLURAL';
exports.SF_SELECTED_OBJECT_PRETTY_NAME_PLURAL = SF_SELECTED_OBJECT_PRETTY_NAME_PLURAL;
const KNACK_SELECTED_OBJECT_PRETTY_NAME = 'KNACK_SELECTED_OBJECT_PRETTY_NAME';
exports.KNACK_SELECTED_OBJECT_PRETTY_NAME = KNACK_SELECTED_OBJECT_PRETTY_NAME;

/***/ }),

/***/ "./src/js/lib/getters.js":
/*!*******************************!*\
  !*** ./src/js/lib/getters.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var GT = _interopRequireWildcard(__webpack_require__(/*! ./getterTypes */ "./src/js/lib/getterTypes.js"));

var ST = _interopRequireWildcard(__webpack_require__(/*! ./stateTypes */ "./src/js/lib/stateTypes.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = {
  [GT.SF_SELECTED_OBJECT_PRETTY_NAME](state) {
    let obj = state[ST.SF].objects.find(o => {
      return o.name === state[ST.SF].selectedObject;
    });
    if (obj) return obj.label;
    return false;
  },

  [GT.SF_SELECTED_OBJECT_PRETTY_NAME_PLURAL](state) {
    let obj = state[ST.SF].objects.find(o => {
      return o.name === state[ST.SF].selectedObject;
    });
    if (obj) return obj.labelPlural;
    return false;
  },

  [GT.KNACK_SELECTED_OBJECT_PRETTY_NAME](state) {
    let obj = state[ST.KNACK].objects.find(o => {
      return o.key === state[ST.KNACK].selectedObject;
    });
    if (obj) return obj.name;
    return false;
  }

};
exports.default = _default;

/***/ }),

/***/ "./src/js/lib/mutationTypes.js":
/*!*************************************!*\
  !*** ./src/js/lib/mutationTypes.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RESET_EXPORT = exports.SET_EXPORT_SF_OBJECTS = exports.SET_EXPORT_ERR = exports.SET_EXPORT_FINISHED = exports.RESET_IMPORT = exports.PUSH_IMPORT_IMPORTED = exports.PUSH_IMPORT_ERR = exports.SET_IMPORT_FINISHED = exports.SET_IMPORT_EXPORT_STARTED = exports.RESET_KNACK_FIELD_MAPPINGS = exports.RESET_SF_FIELD_MAPPINGS = exports.SET_OBJECT_MAPPINGS_REQUIRED_FIELDS_MISSING = exports.SET_OBJECT_MAPPINGS_ERROR = exports.REMOVE_OBJECT_FIELD_MAPPING = exports.ADD_OBJECT_FIELD_MAPPING = exports.SET_KNACK_OBJECT_FIELDS = exports.SET_KNACK_SELECTED_OBJECT = exports.SET_KNACK_BASE_URL = exports.SET_KNACK_OBJECTS = exports.SET_KNACK_ERR = exports.SET_KNACK_AUTHORIZED = exports.STORE_VALID_KNACK_CREDENTIALS = exports.SET_SF_AUTHORIZED = exports.SET_SF_OBJECT_FIELDS = exports.SET_SF_SELECTED_OBJECT = exports.SET_SF_OBJECTS = exports.SET_SF_ERR = exports.STORE_VALID_SF_CREDENTIALS = exports.RESTORE_FROM_LOCAL_STORAGE = exports.UPDATE_ACTIVE_PAGES = exports.RESET_KNACK_AUTH = exports.SET_PAGE_INACTIVE = exports.SET_PAGE_ACTIVE = exports.SET_CURRENT_PAGE = exports.FINISHED_MOUNTING = void 0;
// src/js/lib/mutation-types.js
const FINISHED_MOUNTING = 'FINISHED_MOUNTING';
exports.FINISHED_MOUNTING = FINISHED_MOUNTING;
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
exports.SET_CURRENT_PAGE = SET_CURRENT_PAGE;
const SET_PAGE_ACTIVE = 'SET_PAGE_ACTIVE';
exports.SET_PAGE_ACTIVE = SET_PAGE_ACTIVE;
const SET_PAGE_INACTIVE = 'SET_PAGE_INACTIVE';
exports.SET_PAGE_INACTIVE = SET_PAGE_INACTIVE;
const RESET_KNACK_AUTH = 'RESET_KNACK_AUTH';
exports.RESET_KNACK_AUTH = RESET_KNACK_AUTH;
const UPDATE_ACTIVE_PAGES = 'UPDATE_ACTIVE_PAGES';
exports.UPDATE_ACTIVE_PAGES = UPDATE_ACTIVE_PAGES;
const RESTORE_FROM_LOCAL_STORAGE = 'RESTORE_FROM_LOCAL_STORAGE';
exports.RESTORE_FROM_LOCAL_STORAGE = RESTORE_FROM_LOCAL_STORAGE;
const STORE_VALID_SF_CREDENTIALS = 'STORE_VALID_SF_CREDENTIALS';
exports.STORE_VALID_SF_CREDENTIALS = STORE_VALID_SF_CREDENTIALS;
const SET_SF_ERR = 'SET_SF_ERR';
exports.SET_SF_ERR = SET_SF_ERR;
const SET_SF_OBJECTS = 'SET_SF_OBJECTS';
exports.SET_SF_OBJECTS = SET_SF_OBJECTS;
const SET_SF_SELECTED_OBJECT = 'SET_SF_SELECTED_OBJECT';
exports.SET_SF_SELECTED_OBJECT = SET_SF_SELECTED_OBJECT;
const SET_SF_OBJECT_FIELDS = 'SET_SF_OBJECT_FIELDS';
exports.SET_SF_OBJECT_FIELDS = SET_SF_OBJECT_FIELDS;
const SET_SF_AUTHORIZED = 'SET_SF_AUTHORIZED';
exports.SET_SF_AUTHORIZED = SET_SF_AUTHORIZED;
const STORE_VALID_KNACK_CREDENTIALS = 'STORE_VALID_KNACK_CREDENTIALS';
exports.STORE_VALID_KNACK_CREDENTIALS = STORE_VALID_KNACK_CREDENTIALS;
const SET_KNACK_AUTHORIZED = 'SET_KNACK_AUTHORIZED';
exports.SET_KNACK_AUTHORIZED = SET_KNACK_AUTHORIZED;
const SET_KNACK_ERR = 'SET_KNACK_ERR';
exports.SET_KNACK_ERR = SET_KNACK_ERR;
const SET_KNACK_OBJECTS = 'SET_KNACK_OBJECTS';
exports.SET_KNACK_OBJECTS = SET_KNACK_OBJECTS;
const SET_KNACK_BASE_URL = 'SET_KNACK_BASE_URL';
exports.SET_KNACK_BASE_URL = SET_KNACK_BASE_URL;
const SET_KNACK_SELECTED_OBJECT = 'SET_KNACK_SELECTED_OBJECT';
exports.SET_KNACK_SELECTED_OBJECT = SET_KNACK_SELECTED_OBJECT;
const SET_KNACK_OBJECT_FIELDS = 'SET_KNACK_OBJECT_FIELDS';
/* OBJECT MAPPINGS */

exports.SET_KNACK_OBJECT_FIELDS = SET_KNACK_OBJECT_FIELDS;
const ADD_OBJECT_FIELD_MAPPING = 'ADD_OBJECT_FIELD_MAPPING';
exports.ADD_OBJECT_FIELD_MAPPING = ADD_OBJECT_FIELD_MAPPING;
const REMOVE_OBJECT_FIELD_MAPPING = 'REMOVE_OBJECT_FIELD_MAPPING';
exports.REMOVE_OBJECT_FIELD_MAPPING = REMOVE_OBJECT_FIELD_MAPPING;
const SET_OBJECT_MAPPINGS_ERROR = 'SET_OBJECT_MAPPINGS_ERROR';
exports.SET_OBJECT_MAPPINGS_ERROR = SET_OBJECT_MAPPINGS_ERROR;
const SET_OBJECT_MAPPINGS_REQUIRED_FIELDS_MISSING = 'SET_OBJECT_MAPPINGS_REQUIRED_FIELDS_MISSING';
exports.SET_OBJECT_MAPPINGS_REQUIRED_FIELDS_MISSING = SET_OBJECT_MAPPINGS_REQUIRED_FIELDS_MISSING;
const RESET_SF_FIELD_MAPPINGS = 'RESET_SF_FIELD_MAPPINGS';
exports.RESET_SF_FIELD_MAPPINGS = RESET_SF_FIELD_MAPPINGS;
const RESET_KNACK_FIELD_MAPPINGS = 'RESET_KNACK_FIELD_MAPPINGS';
/* IMPORT / EXPORT */

exports.RESET_KNACK_FIELD_MAPPINGS = RESET_KNACK_FIELD_MAPPINGS;
const SET_IMPORT_EXPORT_STARTED = 'SET_IMPORT_EXPORT_STARTED';
exports.SET_IMPORT_EXPORT_STARTED = SET_IMPORT_EXPORT_STARTED;
const SET_IMPORT_FINISHED = 'SET_IMPORT_FINISHED';
exports.SET_IMPORT_FINISHED = SET_IMPORT_FINISHED;
const PUSH_IMPORT_ERR = 'PUSH_IMPORT_ERR';
exports.PUSH_IMPORT_ERR = PUSH_IMPORT_ERR;
const PUSH_IMPORT_IMPORTED = 'PUSH_IMPORT_IMPORTED';
exports.PUSH_IMPORT_IMPORTED = PUSH_IMPORT_IMPORTED;
const RESET_IMPORT = 'RESET_IMPORT';
exports.RESET_IMPORT = RESET_IMPORT;
const SET_EXPORT_FINISHED = 'SET_EXPORT_FINISHED';
exports.SET_EXPORT_FINISHED = SET_EXPORT_FINISHED;
const SET_EXPORT_ERR = 'SET_EXPORT_ERR';
exports.SET_EXPORT_ERR = SET_EXPORT_ERR;
const SET_EXPORT_SF_OBJECTS = 'SET_EXPORT_SF_OBJECTS';
exports.SET_EXPORT_SF_OBJECTS = SET_EXPORT_SF_OBJECTS;
const RESET_EXPORT = 'RESET_EXPORT';
exports.RESET_EXPORT = RESET_EXPORT;

/***/ }),

/***/ "./src/js/lib/mutations.js":
/*!*********************************!*\
  !*** ./src/js/lib/mutations.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var MT = _interopRequireWildcard(__webpack_require__(/*! ./mutationTypes */ "./src/js/lib/mutationTypes.js"));

var ST = _interopRequireWildcard(__webpack_require__(/*! ./stateTypes */ "./src/js/lib/stateTypes.js"));

var C = _interopRequireWildcard(__webpack_require__(/*! ./constants */ "./src/js/lib/constants.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = {
  [MT.FINISHED_MOUNTING](state) {
    state[ST.MOUNTED] = true;
  },

  [MT.SET_CURRENT_PAGE](state, pageTitle) {
    state[ST.CURRENT_PAGE] = pageTitle;
  },

  [MT.SET_PAGE_ACTIVE](state, pageTitle) {
    let page = state[ST.PAGES].find(p => {
      return p.title === pageTitle;
    });
    console.log(page);
    console.log('Setting page active');
    if (page) page.active = true;else throw new Error("No page exists with title '" + pageTitle + "'");
  },

  [MT.SET_PAGE_INACTIVE](state, pageTitle) {
    let page = state[ST.PAGES].find(p => {
      return p.title === pageTitle;
    });
    if (page) page.active = false;else throw new Error("No page exists with title '" + pageTitle + "'");
  },

  [MT.RESET_KNACK_AUTH](state) {
    state.isAuthorized = false;
  },

  [MT.RESTORE_FROM_LOCAL_STORAGE](state) {
    console.log('restoring from local storage', state);
    C.PERSIST_KEYS.forEach(key => {
      let data = JSON.parse(window.localStorage.getItem(key));
      if (data !== null) state[key] = data;
    });
  },

  /* SF */
  [MT.STORE_VALID_SF_CREDENTIALS](state, credentials) {
    state[ST.SF].accessToken = credentials.accessToken;
    state[ST.SF].instanceUrl = credentials.instanceUrl;
  },

  [MT.SET_SF_AUTHORIZED](state, isAuthorized) {
    state[ST.SF].authorized = isAuthorized;
  },

  [MT.SET_SF_ERR](state, err) {
    state[ST.SF].error = err;
  },

  [MT.SET_SF_OBJECTS](state, objects) {
    state[ST.SF].objects = objects;
  },

  [MT.SET_SF_SELECTED_OBJECT](state, object) {
    state[ST.SF].selectedObject = object;
  },

  [MT.SET_SF_OBJECT_FIELDS](state, objectFields) {
    state[ST.SF].objectFields = objectFields;
  },

  /* KNACK */
  [MT.STORE_VALID_KNACK_CREDENTIALS](state, credentials) {
    state[ST.KNACK].appId = credentials.appId;
    state[ST.KNACK].apiKey = credentials.apiKey;
  },

  [MT.SET_KNACK_AUTHORIZED](state, isAuthorized) {
    state[ST.KNACK].authorized = isAuthorized;
  },

  [MT.SET_KNACK_ERR](state, err) {
    state[ST.KNACK].error = err;
  },

  [MT.SET_KNACK_OBJECTS](state, objects) {
    state[ST.KNACK].objects = objects;
  },

  [MT.SET_KNACK_SELECTED_OBJECT](state, object) {
    state[ST.KNACK].selectedObject = object;
  },

  [MT.SET_KNACK_OBJECT_FIELDS](state, fields) {
    state[ST.KNACK].objectFields = fields;
  },

  /* OBJECT MAPPINGS */
  [MT.ADD_OBJECT_FIELD_MAPPING](state) {
    state[ST.OBJECT_MAPPINGS].push({
      sfField: '',
      knackField: ''
    });
  },

  [MT.REMOVE_OBJECT_FIELD_MAPPING](state, index) {
    if (state[ST.OBJECT_MAPPINGS].length > 1) {
      state[ST.OBJECT_MAPPINGS].splice(index, 1);
    }
  },

  [MT.SET_OBJECT_MAPPINGS_ERROR](state, err) {
    state[ST.OBJECT_MAPPINGS_ERROR] = err;
  },

  [MT.SET_OBJECT_MAPPINGS_REQUIRED_FIELDS_MISSING](state, requiredFieldsMissing) {
    state[ST.OBJECT_MAPPINGS_REQUIRED_FIELDS_MISSING] = requiredFieldsMissing;
  },

  [MT.RESET_KNACK_FIELD_MAPPINGS](state) {
    for (let i = 0; i < state[ST.OBJECT_MAPPINGS].length; i++) {
      state[ST.OBJECT_MAPPINGS][i].knackField = '';
    }
  },

  [MT.RESET_SF_FIELD_MAPPINGS](state) {
    for (let i = 0; i < state[ST.OBJECT_MAPPINGS].length; i++) {
      state[ST.OBJECT_MAPPINGS][i].sfField = '';
    }
  },

  /* IMPORT / EXPORT */
  [MT.SET_IMPORT_EXPORT_STARTED](state, started) {
    state[ST.IMPORT_EXPORT_STARTED] = started;
  },

  [MT.SET_IMPORT_FINISHED](state, finished) {
    state[ST.IMPORT_INFO].finished = finished;
  },

  [MT.PUSH_IMPORT_ERR](state, err) {
    state[ST.IMPORT_INFO].errors.push(err);
  },

  [MT.PUSH_IMPORT_IMPORTED](state, obj) {
    state[ST.IMPORT_INFO].imported.push(obj);
  },

  [MT.RESET_IMPORT](state) {
    state[ST.IMPORT_INFO].errors = [];
    state[ST.IMPORT_INFO].imported = [];
    state[ST.IMPORT_INFO].finished = false;
  },

  [MT.SET_EXPORT_FINISHED](state, finished) {
    state[ST.EXPORT_INFO].finished = finished;
  },

  [MT.SET_EXPORT_ERR](state, err) {
    state[ST.EXPORT_INFO].error = err;
  },

  [MT.SET_EXPORT_SF_OBJECTS](state, objects) {
    state[ST.EXPORT_INFO].sfObjects = objects;
  },

  [MT.RESET_EXPORT](state) {
    state[ST.EXPORT_INFO].error = false;
    state[ST.EXPORT_INFO].finished = false;
    state[ST.EXPORT_INFO].sfObjects = false;
  }

};
exports.default = _default;

/***/ }),

/***/ "./src/js/lib/state.js":
/*!*****************************!*\
  !*** ./src/js/lib/state.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ST = _interopRequireWildcard(__webpack_require__(/*! ./stateTypes */ "./src/js/lib/stateTypes.js"));

var C = _interopRequireWildcard(__webpack_require__(/*! ./constants */ "./src/js/lib/constants.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

module.exports = function () {
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
      objectFields: []
    },
    [ST.SF]: {
      accessToken: false,
      instanceUrl: false,
      error: false,
      authorized: false,
      objects: false,
      selectedObject: '',
      objectFields: []
    },
    [ST.OBJECT_MAPPINGS]: [{
      sfField: '',
      knackField: ''
    }],
    [ST.OBJECT_MAPPINGS_ERROR]: false,
    [ST.OBJECT_MAPPINGS_REQUIRED_FIELDS_MISSING]: [],
    [ST.IMPORT_EXPORT_STARTED]: false,
    [ST.EXPORT_INFO]: {
      error: false,
      finished: false,
      sfObjects: false
    },
    [ST.IMPORT_INFO]: {
      errors: [],
      imported: [],
      finished: false
    }
  };
}();

/***/ }),

/***/ "./src/js/lib/stateTypes.js":
/*!**********************************!*\
  !*** ./src/js/lib/stateTypes.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EXPORT_INFO = exports.IMPORT_INFO = exports.IMPORT_EXPORT_STARTED = exports.OBJECT_MAPPINGS_REQUIRED_FIELDS_MISSING = exports.OBJECT_MAPPINGS_ERROR = exports.OBJECT_MAPPINGS = exports.SF = exports.KNACK = exports.PAGES = exports.MOUNTED = exports.CURRENT_PAGE = void 0;
// src/js/lib/stateTypes.js
const CURRENT_PAGE = 'CURRENT_PAGE';
exports.CURRENT_PAGE = CURRENT_PAGE;
const MOUNTED = 'MOUNTED';
exports.MOUNTED = MOUNTED;
const PAGES = 'PAGES';
exports.PAGES = PAGES;
const KNACK = 'KNACK';
exports.KNACK = KNACK;
const SF = 'SF';
exports.SF = SF;
const OBJECT_MAPPINGS = 'OBJECT_MAPPINGS';
exports.OBJECT_MAPPINGS = OBJECT_MAPPINGS;
const OBJECT_MAPPINGS_ERROR = 'OBJECT_MAPPINGS_ERROR';
exports.OBJECT_MAPPINGS_ERROR = OBJECT_MAPPINGS_ERROR;
const OBJECT_MAPPINGS_REQUIRED_FIELDS_MISSING = 'OBJECT_MAPPINGS_REQUIRED_FIELDS_MISSING';
exports.OBJECT_MAPPINGS_REQUIRED_FIELDS_MISSING = OBJECT_MAPPINGS_REQUIRED_FIELDS_MISSING;
const IMPORT_EXPORT_STARTED = 'IMPORT_EXPORT_STARTED';
exports.IMPORT_EXPORT_STARTED = IMPORT_EXPORT_STARTED;
const IMPORT_INFO = 'IMPORT_INFO';
exports.IMPORT_INFO = IMPORT_INFO;
const EXPORT_INFO = 'EXPORT_INFO';
exports.EXPORT_INFO = EXPORT_INFO;

/***/ })

}]);
//# sourceMappingURL=0.app.js.map