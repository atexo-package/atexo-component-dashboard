System.register(['angular2/core', 'angular2/src/facade/lang', '../../common/constants/atexo.constant', '../../common/services/atexo.service', './providers/panel.provider', './components/alert/alert.component', './components/panel/panel.component'], function(exports_1, context_1) {
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
    var core_1, lang_1, atexo_constant_1, atexo_service_1, panel_provider_1, alert_component_1, panel_component_1;
    var Dashboard;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (atexo_constant_1_1) {
                atexo_constant_1 = atexo_constant_1_1;
            },
            function (atexo_service_1_1) {
                atexo_service_1 = atexo_service_1_1;
            },
            function (panel_provider_1_1) {
                panel_provider_1 = panel_provider_1_1;
            },
            function (alert_component_1_1) {
                alert_component_1 = alert_component_1_1;
            },
            function (panel_component_1_1) {
                panel_component_1 = panel_component_1_1;
            }],
        execute: function() {
            Dashboard = (function () {
                function Dashboard(panelProvider) {
                    this.progress = atexo_service_1.Progress.getInstance();
                    this.panels = [];
                    this.panelsZones = {
                        a: new Array(),
                        b: new Array(),
                        c: new Array(),
                        d: new Array(),
                        z: new Array()
                    };
                    this.panelsZonesArray = [];
                    this.offset = 0;
                    this.limit = 5;
                    this.endContent = false;
                    this.startsortable = '';
                    this.namePage = 'Dashboard';
                    this.panelProvider = panelProvider;
                }
                Dashboard.prototype.ngOnInit = function () {
                    if (!lang_1.isPresent(this.config)) {
                        console.error('ViewError:  Missing identifier "config"');
                    }
                    else {
                        this.initConfig();
                        this.panelServiceAll();
                    }
                    return true;
                };
                Dashboard.prototype.ngAfterViewChecked = function () {
                    $('#sortable .column').sortable({
                        connectWith: '.column',
                        handle: '.panel-heading',
                        placeholder: 'portlet-placeholder ui-corner-all'
                    });
                    return true;
                };
                Dashboard.prototype.initConfig = function () {
                    atexo_constant_1.AtexoRestConstant.baseUrl = this.config.json.baseUrl;
                    atexo_constant_1.AtexoRestConstant.request.panel.all.url = this.config.json.panel;
                    atexo_constant_1.AtexoRestConstant.request.alert.all.url = this.config.json.alert;
                };
                Dashboard.prototype.panelServiceAll = function () {
                    var _this = this;
                    var param = {
                        limit: this.limit,
                        offset: this.offset
                    };
                    atexo_service_1.Progress.getInstance().incrementNbrProgress();
                    this.panelProvider.all(param).subscribe(function (res) {
                        if (res.status === 200) {
                            _this.endContent = false;
                            _this.panelsZonesArray = res.json();
                            atexo_service_1.Progress.getInstance().decrementNbrProgress();
                        }
                        else {
                            _this.endContent = true;
                        }
                    });
                };
                __decorate([
                    core_1.Input('config'), 
                    __metadata('design:type', Object)
                ], Dashboard.prototype, "config", void 0);
                Dashboard = __decorate([
                    core_1.Component({
                        selector: 'dashboard',
                        providers: [panel_provider_1.PanelProvider]
                    }),
                    core_1.View({
                        template: "\n            <div class=\"dashboard parent\">\n                <alert></alert>\n                <div class=\"row\" id=\"sortable\" [ngClass]=\"{'sortable-start': startsortable}\">\n                    <div localtion=\"zone-a\"\n                         class=\"column container\"\n                         [ngClass]=\"zone.zone.custom_class\"\n                         id=\"{{zone.zone.id}}\"\n                         *ngFor=\"#zone of panelsZonesArray; #i=index\">\n                        <!-- Panel -->\n                        <div [panelObj]=\"panelObj\"\n                               class=\"panel-component\"\n                               *ngFor=\"#panelObj of zone.panels; #i=index\"></div>\n                        <!-- End Panel -->\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-backdrop  in\" *ngIf=\"progress.showBackdrop()\"></div>\n            ",
                        directives: [panel_component_1.Panel, alert_component_1.Alert]
                    }), 
                    __metadata('design:paramtypes', [panel_provider_1.PanelProvider])
                ], Dashboard);
                return Dashboard;
            }());
            exports_1("Dashboard", Dashboard);
        }
    }
});

//# sourceMappingURL=dashboard.component.js.map
