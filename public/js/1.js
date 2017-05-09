webpackJsonp([1],{

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(44)(
  /* script */
  __webpack_require__(49),
  /* template */
  __webpack_require__(57),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joao/Documents/Development/PHP/rsc-app/resources/assets/js/components/processo/Index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-72761261", Component.options)
  } else {
    hotAPI.reload("data-v-72761261", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 44:
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

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_filter__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_filter__);
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
    name: 'processo-index',

    data: function data() {
        return {
            loading: true,
            searchTerm: '',
            processos: [{}]
        };
    },


    created: function created() {
        this.getProcessos();
    },

    computed: {
        filteredSearchTerm: function filteredSearchTerm() {
            var term = this.searchTerm.toUpperCase(),
                reg = new RegExp(term);

            if (!this.loading) {
                return this.processos.filter(function (item) {
                    return item.servidor.nome.indexOf(term) > -1 || reg.test(item.servidor.siape) || reg.test(item.processo) || reg.test(item.banca);
                });
            }
        }
    },

    updated: function updated() {
        //jQuery('.itens-processos').pinbox();
        //swal("Good job!", "You clicked the button!", "success");
    },

    methods: {
        getProcessos: function getProcessos() {
            var self = this;

            this.$http.get('/api/processos').then(function (response) {
                self.processos = response.data.data;
                self.loading = false;
            }, function (response) {
                // error callback
                console.log('Error');
            });
        }
    }
});

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row",
    attrs: {
      "id": "processo-index"
    }
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "box box-primary itens-processos"
  }, [_vm._m(0), _vm._v(" "), _c('form', {
    attrs: {
      "action": ""
    }
  }, [_c('div', {
    staticClass: "box-body"
  }, [_c('div', {
    staticClass: "input-group input-group-lg"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.searchTerm),
      expression: "searchTerm"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "Digite o nome do servidor, Nº do processo, Siape, Banca"
    },
    domProps: {
      "value": (_vm.searchTerm)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.searchTerm = $event.target.value
      }
    }
  }), _vm._v(" "), _vm._m(1)])])])])]), _vm._v(" "), _vm._l((_vm.filteredSearchTerm), function(item) {
    return (!_vm.loading) ? _c('div', {
      staticClass: "col-md-4"
    }, [_c('div', {
      staticClass: "box box-widget widget-user-2"
    }, [_c('div', {
      staticClass: "widget-user-header bg-orange"
    }, [_c('h3', {
      staticClass: "widget-user-username",
      staticStyle: {
        "margin-left": "0"
      }
    }, [_c('b', [_vm._v(_vm._s(item.servidor.nome))])]), _vm._v(" "), _c('h5', {
      staticClass: "widget-user-desc",
      staticStyle: {
        "margin-left": "0"
      }
    }, [_c('b', [_vm._v("\n                        Siape: " + _vm._s(item.servidor.siape) + " Tipo: " + _vm._s(item.tipo ? item.tipo : '?')), _c('br'), _vm._v("\n                        Banca: " + _vm._s(item.banca ? item.banca : '?') + " "), _c('br'), _vm._v("\n                        Processo: " + _vm._s(item.processo ? item.processo : '?') + "\n                    ")])])]), _vm._v(" "), _c('div', {
      staticClass: "box-footer no-padding"
    }, [_c('div', {
      staticClass: "box-body"
    }, [_c('h4', [_vm._v("Avaliadores")]), _vm._v(" "), _c('table', {
      staticClass: "table table-condensed"
    }, [_c('tbody', _vm._l((item.avaliadores), function(avaliador) {
      return _c('tr', [_c('td', {
        attrs: {
          "width": "1"
        }
      }, [_c('small', {
        staticClass: "label label-default",
        class: [avaliador.tipo == 'externo' ? 'label-info' : '']
      }, [_vm._v("\n                                    " + _vm._s(_vm._f("uppercase")(avaliador.tipo)))])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm._f("uppercase")(avaliador.nome)) + "\n                                    "), _c('small', {
        staticClass: "label",
        class: [avaliador.status_pagamento == 'pago' ? 'label-primary' : 'label-danger']
      }, [_c('i', {
        staticClass: "fa ",
        class: [avaliador.status_pagamento == 'pago' ? 'fa-check' : 'fa-exclamation']
      }), _vm._v("\n                                        " + _vm._s(avaliador.status_pagamento) + " ")])])])
    }))])]), _vm._v(" "), _vm._m(2, true)])])]) : _vm._e()
  })], 2)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "box-header with-border"
  }, [_c('h3', {
    staticClass: "box-title"
  }, [_vm._v("Pesquisar Processos")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "input-group-btn"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button"
    }
  }, [_c('span', {
    staticClass: "fa fa-search"
  }), _vm._v(" Buscar")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "box-body"
  }, [_c('a', {
    staticClass: "btn btn-app btn-block",
    staticStyle: {
      "margin": "0 0 5px"
    }
  }, [_c('i', {
    staticClass: "fa fa-cloud-download"
  }), _vm._v(" Gerar Declaração de Avaliação\n                    ")]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-app btn-block",
    staticStyle: {
      "margin": "0 0 5px"
    }
  }, [_c('i', {
    staticClass: "fa fa-send"
  }), _vm._v(" Enviar link de Execução de Atividade\n                    ")]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-app btn-block",
    staticStyle: {
      "margin": "0 0 5px"
    }
  }, [_c('i', {
    staticClass: "fa fa-check-square-o"
  }), _vm._v(" Adicionar a Lista de Pagamento\n                    ")]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-app btn-block",
    staticStyle: {
      "margin": "0 0 5px"
    }
  }, [_c('i', {
    staticClass: "fa fa-check"
  }), _vm._v(" Finalizar Processo\n                    ")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-72761261", module.exports)
  }
}

/***/ })

});