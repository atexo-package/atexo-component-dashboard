System.register(['angular2/core', 'angular2/http', '../../../../../common/services/atexo.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, atexo_service_1;
    var PanelBodySearchProvider;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (atexo_service_1_1) {
                atexo_service_1 = atexo_service_1_1;
            }],
        execute: function() {
            PanelBodySearchProvider = (function () {
                function PanelBodySearchProvider(http) {
                    this.http = http;
                }
                PanelBodySearchProvider.prototype.all = function (_url, _search) {
                    var options = new http_1.RequestOptions({
                        method: http_1.RequestMethod.Get,
                        url: _url,
                        search: atexo_service_1.Util.getInstance().URLParams().parse(_search)
                    });
                    var req = new http_1.Request(options);
                    return this.http.request(req);
                };
                PanelBodySearchProvider = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], PanelBodySearchProvider);
                return PanelBodySearchProvider;
            }());
            exports_1("PanelBodySearchProvider", PanelBodySearchProvider);
        }
    }
});

//# sourceMappingURL=panel-body-search.provider.js.map
