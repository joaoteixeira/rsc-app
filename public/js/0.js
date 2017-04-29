webpackJsonp([0],{

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(42)(
  /* script */
  __webpack_require__(44),
  /* template */
  __webpack_require__(53),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joao/Documents/Development/PHP/rsc-app/resources/assets/js/components/dashboard/Dashboard.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Dashboard.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-62a6cf0b", Component.options)
  } else {
    hotAPI.reload("data-v-62a6cf0b", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 42:
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Indicadores__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Indicadores___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Indicadores__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ProcessosAberto__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ProcessosAberto___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__ProcessosAberto__);
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
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'dashboard',
    components: { Indicadores: __WEBPACK_IMPORTED_MODULE_1__Indicadores___default.a, ProcessosAberto: __WEBPACK_IMPORTED_MODULE_2__ProcessosAberto___default.a },

    data: function data() {
        return {};
    }
});

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'indicadores',

    data: function data() {
        return {
            indicadores: {
                andamento: 0,
                abertos: 0,
                financeira: 0,
                total: 0
            }
        };
    },


    mounted: function mounted() {
        this.indicadorShow();
    },

    methods: {
        indicadorShow: function indicadorShow() {

            var self = this;

            this.$http.get('/api/indicadores').then(function (response) {
                var data = response.data,
                    ind = self.indicadores;

                ind.total = data.total > 0 ? pad(data.total, 2) : 0;
                ind.abertos = data.abertos > 0 ? pad(data.abertos, 2) : 0;
                ind.andamento = data.andamento > 0 ? pad(data.andamento, 2) : 0;
                ind.financeira = data.financeira > 0 ? pad(data.financeira, 2) : 0;
            }, function (response) {
                // error callback
                console.log('Error');
            });
        }
    }
});

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__processo_Modal__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__processo_Modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__processo_Modal__);
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
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'processos-aberto',
    components: { ProcessoModal: __WEBPACK_IMPORTED_MODULE_1__processo_Modal___default.a },

    data: function data() {
        return {
            processoModalVisible: false,
            processos: [{}]
        };
    },


    mounted: function mounted() {
        this.getProcessosNovos();
    },

    methods: {
        getProcessosNovos: function getProcessosNovos() {
            var _this = this;

            this.$http.get('/api/processos-novos').then(function (response) {
                _this.processos = response.data;
            }, function (response) {
                // error callback
                console.log('Error');
            });
        }
    }
});

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
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



/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'processo-modal',

    data: function data() {
        return {
            processo: {
                processo: '',
                banca: '',
                link: '',
                tipo: '',
                nome: '',
                siape: '',
                email: '',
                atribuir: false
            },

            error: {
                processo: '',
                banca: '',
                link: '',
                tipo: '',
                nome: '',
                siape: '',
                email: ''
            }
        };
    },


    methods: {
        nullErrors: function nullErrors() {
            this.error = {
                processo: '',
                banca: '',
                link: '',
                tipo: '',
                nome: '',
                siape: '',
                email: ''
            };
        },
        save: function save() {
            var self = this;

            this.$http.post('/api/processo', this.processo).then(function (response) {
                var data = response.data;
                console.log(data);
                if (!data.success) {
                    var error = self.error,
                        errors = data.errors;

                    error.processo = errors.processo[0];
                    error.banca = errors.banca[0];
                    error.link = errors.link[0];
                    error.tipo = errors.tipo[0];
                    error.nome = errors.nome[0];
                    error.siape = errors.siape[0];
                    error.email = errors.email[0];
                } else {}
            }).catch(function (response) {
                console.log('Error');
            });
        }
    }
});

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(42)(
  /* script */
  __webpack_require__(45),
  /* template */
  __webpack_require__(54),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joao/Documents/Development/PHP/rsc-app/resources/assets/js/components/dashboard/Indicadores.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Indicadores.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c81cc1b8", Component.options)
  } else {
    hotAPI.reload("data-v-c81cc1b8", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(42)(
  /* script */
  __webpack_require__(46),
  /* template */
  __webpack_require__(52),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joao/Documents/Development/PHP/rsc-app/resources/assets/js/components/dashboard/ProcessosAberto.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ProcessosAberto.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4b8f4333", Component.options)
  } else {
    hotAPI.reload("data-v-4b8f4333", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(42)(
  /* script */
  __webpack_require__(47),
  /* template */
  __webpack_require__(51),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joao/Documents/Development/PHP/rsc-app/resources/assets/js/components/processo/Modal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Modal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-23ec7ebc", Component.options)
  } else {
    hotAPI.reload("data-v-23ec7ebc", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "processo-modal"
    }
  }, [_c('div', {
    staticClass: "modal fade",
    attrs: {
      "id": "processo_modal"
    }
  }, [_c('div', {
    staticClass: "modal-dialog modal-lg"
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_c('div', {
    staticClass: "modal-header"
  }, [_c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-dismiss": "modal",
      "aria-label": "Close"
    }
  }, [_c('span', {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])]), _vm._v(" "), _c('h4', {
    staticClass: "modal-title"
  }, [_vm._v("Processo")])]), _vm._v(" "), _c('div', {
    staticClass: "modal-body"
  }, [_c('form', {
    attrs: {
      "role": "form"
    }
  }, [_c('div', {
    staticClass: "box-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "processo"
    }
  }, [_vm._v("Número do processo")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.processo.processo),
      expression: "processo.processo"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "processo",
      "placeholder": "Ex.: 0001/2017"
    },
    domProps: {
      "value": (_vm.processo.processo)
    },
    on: {
      "focus": function($event) {
        _vm.nullErrors()
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.processo.processo = $event.target.value
      }
    }
  }), _vm._v(" "), (_vm.error.processo) ? _c('span', {
    staticClass: "text-danger small",
    domProps: {
      "textContent": _vm._s(_vm.error.processo)
    }
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-2"
  }, [_c('label', {
    attrs: {
      "for": "banca"
    }
  }, [_vm._v("Número da banca")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.processo.banca),
      expression: "processo.banca"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "banca",
      "placeholder": "Ex.: 150"
    },
    domProps: {
      "value": (_vm.processo.banca)
    },
    on: {
      "focus": function($event) {
        _vm.nullErrors()
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.processo.banca = $event.target.value
      }
    }
  }), _vm._v(" "), (_vm.error.banca) ? _c('span', {
    staticClass: "text-danger small",
    domProps: {
      "textContent": _vm._s(_vm.error.banca)
    }
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', [_vm._v("Tipo")]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.processo.tipo),
      expression: "processo.tipo"
    }],
    staticClass: "form-control select2",
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "aria-hidden": "true"
    },
    on: {
      "focus": function($event) {
        _vm.nullErrors()
      },
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.processo.tipo = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, [_c('option', {
    attrs: {
      "selected": "selected"
    }
  }, [_vm._v("Selecione um tipo")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "rsc-I"
    }
  }, [_vm._v("RSC-I")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "rsc-II"
    }
  }, [_vm._v("RSC-II")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "rsc-III"
    }
  }, [_vm._v("RSC-III")])]), _vm._v(" "), (_vm.error.tipo) ? _c('span', {
    staticClass: "text-danger small",
    domProps: {
      "textContent": _vm._s(_vm.error.tipo)
    }
  }) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "link"
    }
  }, [_vm._v("Link")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.processo.link),
      expression: "processo.link"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "link",
      "placeholder": "Ex.: http://ifro.edu.br"
    },
    domProps: {
      "value": (_vm.processo.link)
    },
    on: {
      "focus": function($event) {
        _vm.nullErrors()
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.processo.link = $event.target.value
      }
    }
  }), _vm._v(" "), (_vm.error.link) ? _c('span', {
    staticClass: "text-danger small",
    domProps: {
      "textContent": _vm._s(_vm.error.link)
    }
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', [_vm._v("Responsável")]), _vm._v(" "), _c('div', {
    staticClass: "checkbox"
  }, [_c('label', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.processo.atribuir),
      expression: "processo.atribuir"
    }],
    attrs: {
      "type": "checkbox"
    },
    domProps: {
      "checked": Array.isArray(_vm.processo.atribuir) ? _vm._i(_vm.processo.atribuir, null) > -1 : (_vm.processo.atribuir)
    },
    on: {
      "__c": function($event) {
        var $$a = _vm.processo.atribuir,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$c) {
            $$i < 0 && (_vm.processo.atribuir = $$a.concat($$v))
          } else {
            $$i > -1 && (_vm.processo.atribuir = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.processo.atribuir = $$c
        }
      }
    }
  }), _vm._v(" Atribuir a mim\n                                        ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('hr'), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "nome"
    }
  }, [_vm._v("Nome do servidor (Avaliado)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.processo.nome),
      expression: "processo.nome"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "nome",
      "placeholder": "Nome"
    },
    domProps: {
      "value": (_vm.processo.nome)
    },
    on: {
      "focus": function($event) {
        _vm.nullErrors()
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.processo.nome = $event.target.value
      }
    }
  }), _vm._v(" "), (_vm.error.nome) ? _c('span', {
    staticClass: "text-danger small",
    domProps: {
      "textContent": _vm._s(_vm.error.nome)
    }
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-2"
  }, [_c('label', {
    attrs: {
      "for": "siape"
    }
  }, [_vm._v("Siape")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.processo.siape),
      expression: "processo.siape"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "siape",
      "placeholder": "Siape"
    },
    domProps: {
      "value": (_vm.processo.siape)
    },
    on: {
      "focus": function($event) {
        _vm.nullErrors()
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.processo.siape = $event.target.value
      }
    }
  }), _vm._v(" "), (_vm.error.siape) ? _c('span', {
    staticClass: "text-danger small",
    domProps: {
      "textContent": _vm._s(_vm.error.siape)
    }
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "email"
    }
  }, [_vm._v("E-mail")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.processo.email),
      expression: "processo.email"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "email",
      "id": "email",
      "placeholder": "E-mail"
    },
    domProps: {
      "value": (_vm.processo.email)
    },
    on: {
      "focus": function($event) {
        _vm.nullErrors()
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.processo.email = $event.target.value
      }
    }
  }), _vm._v(" "), (_vm.error.email) ? _c('span', {
    staticClass: "text-danger small",
    domProps: {
      "textContent": _vm._s(_vm.error.email)
    }
  }) : _vm._e()])])])])]), _vm._v(" "), _c('div', {
    staticClass: "modal-footer"
  }, [_c('button', {
    staticClass: "btn btn-default pull-left",
    attrs: {
      "type": "button",
      "data-dismiss": "modal"
    }
  }, [_vm._v("Cancelar")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.save()
      }
    }
  }, [_vm._v("Salvar")])])])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-23ec7ebc", module.exports)
  }
}

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "processos_aberto"
    }
  }, [_c('div', {
    staticClass: "box box-primary"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "box-body"
  }, [_c('ul', {
    staticClass: "todo-list ui-sortable"
  }, [_vm._l((_vm.processos), function(processo) {
    return _c('li', {}, [_vm._m(1, true), _vm._v(" "), _c('span', {
      staticClass: "text"
    }, [_vm._v(_vm._s(processo.processo) + " - " + _vm._s(processo.tipo))]), _vm._v(" "), _vm._m(2, true), _vm._v(" "), _vm._m(3, true)])
  }), _vm._v(" "), _vm._m(4), _vm._v(" "), _vm._m(5), _vm._v(" "), _vm._m(6), _vm._v(" "), _vm._m(7), _vm._v(" "), _vm._m(8)], 2)])]), _vm._v(" "), _c('processo-modal')], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "box-header ui-sortable-handle",
    staticStyle: {
      "cursor": "move"
    }
  }, [_c('i', {
    staticClass: "ion ion-clipboard"
  }), _vm._v(" "), _c('h3', {
    staticClass: "box-title"
  }, [_vm._v("Últimos processos abertos")]), _vm._v(" "), _c('div', {
    staticClass: "pull-right box-tools",
    staticStyle: {
      "margin-top": "5px"
    }
  }, [_c('a', {
    staticClass: "btn btn-default btn-sm",
    attrs: {
      "href": "#",
      "data-toggle": "modal",
      "data-target": "#processo_modal"
    }
  }, [_c('i', {
    staticClass: "fa fa-plus"
  }), _vm._v(" Novo Processo\n                ")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "handle ui-sortable-handle"
  }, [_c('i', {
    staticClass: "fa fa-ellipsis-v"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-ellipsis-v"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('small', {
    staticClass: "label label-danger"
  }, [_c('i', {
    staticClass: "fa fa-clock-o"
  }), _vm._v(" 2 mins")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tools"
  }, [_c('i', {
    staticClass: "fa fa-edit"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-trash-o"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_c('span', {
    staticClass: "handle ui-sortable-handle"
  }, [_c('i', {
    staticClass: "fa fa-ellipsis-v"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-ellipsis-v"
  })]), _vm._v(" "), _c('span', {
    staticClass: "text"
  }, [_vm._v("Make the theme responsive")]), _vm._v(" "), _c('small', {
    staticClass: "label label-info"
  }, [_c('i', {
    staticClass: "fa fa-clock-o"
  }), _vm._v(" 4 hours")]), _vm._v(" "), _c('div', {
    staticClass: "tools"
  }, [_c('i', {
    staticClass: "fa fa-edit"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-trash-o"
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_c('span', {
    staticClass: "handle ui-sortable-handle"
  }, [_c('i', {
    staticClass: "fa fa-ellipsis-v"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-ellipsis-v"
  })]), _vm._v(" "), _c('span', {
    staticClass: "text"
  }, [_vm._v("Let theme shine like a star")]), _vm._v(" "), _c('small', {
    staticClass: "label label-warning"
  }, [_c('i', {
    staticClass: "fa fa-clock-o"
  }), _vm._v(" 1 day")]), _vm._v(" "), _c('div', {
    staticClass: "tools"
  }, [_c('i', {
    staticClass: "fa fa-edit"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-trash-o"
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_c('span', {
    staticClass: "handle ui-sortable-handle"
  }, [_c('i', {
    staticClass: "fa fa-ellipsis-v"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-ellipsis-v"
  })]), _vm._v(" "), _c('span', {
    staticClass: "text"
  }, [_vm._v("Let theme shine like a star")]), _vm._v(" "), _c('small', {
    staticClass: "label label-success"
  }, [_c('i', {
    staticClass: "fa fa-clock-o"
  }), _vm._v(" 3 days")]), _vm._v(" "), _c('div', {
    staticClass: "tools"
  }, [_c('i', {
    staticClass: "fa fa-edit"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-trash-o"
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_c('span', {
    staticClass: "handle ui-sortable-handle"
  }, [_c('i', {
    staticClass: "fa fa-ellipsis-v"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-ellipsis-v"
  })]), _vm._v(" "), _c('span', {
    staticClass: "text"
  }, [_vm._v("Check your messages and notifications")]), _vm._v(" "), _c('small', {
    staticClass: "label label-primary"
  }, [_c('i', {
    staticClass: "fa fa-clock-o"
  }), _vm._v(" 1 week")]), _vm._v(" "), _c('div', {
    staticClass: "tools"
  }, [_c('i', {
    staticClass: "fa fa-edit"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-trash-o"
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_c('span', {
    staticClass: "handle ui-sortable-handle"
  }, [_c('i', {
    staticClass: "fa fa-ellipsis-v"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-ellipsis-v"
  })]), _vm._v(" "), _c('span', {
    staticClass: "text"
  }, [_vm._v("Let theme shine like a star")]), _vm._v(" "), _c('small', {
    staticClass: "label label-default"
  }, [_c('i', {
    staticClass: "fa fa-clock-o"
  }), _vm._v(" 1 month")]), _vm._v(" "), _c('div', {
    staticClass: "tools"
  }, [_c('i', {
    staticClass: "fa fa-edit"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-trash-o"
  })])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4b8f4333", module.exports)
  }
}

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "dashboard"
    }
  }, [_c('router-link', {
    attrs: {
      "to": "example"
    }
  }, [_vm._v("Example")]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('indicadores')], 1), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('section', {
    staticClass: "col-lg-7"
  }, [_c('processos-aberto')], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-62a6cf0b", module.exports)
  }
}

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "indicadores"
    }
  }, [_c('div', {
    staticClass: "col-lg-3 col-xs-6"
  }, [_c('div', {
    staticClass: "small-box bg-aqua"
  }, [_c('div', {
    staticClass: "inner"
  }, [_c('h3', [_vm._v(_vm._s(_vm.indicadores.andamento))]), _vm._v(" "), _c('p', [_vm._v("Processos em andamento")])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1)])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-3 col-xs-6"
  }, [_c('div', {
    staticClass: "small-box bg-green"
  }, [_c('div', {
    staticClass: "inner"
  }, [_c('h3', [_vm._v(_vm._s(_vm.indicadores.abertos))]), _vm._v(" "), _c('p', [_vm._v("Processos abertos")])]), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3)])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-3 col-xs-6"
  }, [_c('div', {
    staticClass: "small-box bg-yellow"
  }, [_c('div', {
    staticClass: "inner"
  }, [_c('h3', [_vm._v(_vm._s(_vm.indicadores.financeira))]), _vm._v(" "), _c('p', [_vm._v("Pendência financeiras")])]), _vm._v(" "), _vm._m(4), _vm._v(" "), _vm._m(5)])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-3 col-xs-6"
  }, [_c('div', {
    staticClass: "small-box bg-red"
  }, [_c('div', {
    staticClass: "inner"
  }, [_c('h3', [_vm._v(_vm._s(_vm.indicadores.total))]), _vm._v(" "), _c('p', [_vm._v("Total de processos")])]), _vm._v(" "), _vm._m(6), _vm._v(" "), _vm._m(7)])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "icon"
  }, [_c('i', {
    staticClass: "ion ion-bag"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    staticClass: "small-box-footer",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("More info "), _c('i', {
    staticClass: "fa fa-arrow-circle-right"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "icon"
  }, [_c('i', {
    staticClass: "ion ion-stats-bars"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    staticClass: "small-box-footer",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("More info "), _c('i', {
    staticClass: "fa fa-arrow-circle-right"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "icon"
  }, [_c('i', {
    staticClass: "ion ion-person-add"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    staticClass: "small-box-footer",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("More info "), _c('i', {
    staticClass: "fa fa-arrow-circle-right"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "icon"
  }, [_c('i', {
    staticClass: "ion ion-pie-graph"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    staticClass: "small-box-footer",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("More info "), _c('i', {
    staticClass: "fa fa-arrow-circle-right"
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c81cc1b8", module.exports)
  }
}

/***/ })

});