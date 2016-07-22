// app/common/constants/atexo/atexo-rest.constant.ts
/**
 *
 * @name atexo-rest.constant.ts
 *
 */
System.register(['angular2/http', './atexo-enum.constant'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var http_1, atexo_enum_constant_1;
    var AtexoRestConstant;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (atexo_enum_constant_1_1) {
                atexo_enum_constant_1 = atexo_enum_constant_1_1;
            }],
        execute: function() {
            exports_1("AtexoRestConstant", AtexoRestConstant = {
                baseUrl: 'http://localhost:5600/',
                _format: 'json',
                request: {
                    panel: {
                        all: {
                            method: http_1.RequestMethod.Get,
                            header: {},
                            url: 'panel',
                            type: atexo_enum_constant_1.RequestUrlType.Relative,
                            _format: 'json',
                            parameter: {
                                limit: 5,
                                offset: 0
                            }
                        },
                        byId: {
                            method: http_1.RequestMethod.Get,
                            url: 'panel',
                            type: atexo_enum_constant_1.RequestUrlType.Relative
                        }
                    },
                    alert: {
                        all: {
                            method: http_1.RequestMethod.Get,
                            header: {},
                            url: 'alert',
                            type: atexo_enum_constant_1.RequestUrlType.Relative,
                            _format: 'json',
                            parameter: {
                                limit: 5,
                                offset: 0
                            }
                        }
                    },
                    news: {
                        all: {
                            method: http_1.RequestMethod.Get,
                            header: {},
                            url: 'news',
                            type: atexo_enum_constant_1.RequestUrlType.Relative,
                            _format: 'json',
                            parameter: {
                                limit: 5,
                                offset: 0
                            }
                        },
                        byId: {
                            method: http_1.RequestMethod.Get,
                            header: {},
                            url: 'news',
                            type: atexo_enum_constant_1.RequestUrlType.Relative
                        }
                    }
                }
            });
        }
    }
});

//# sourceMappingURL=atexo-rest.constant.js.map
