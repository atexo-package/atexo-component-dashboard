System.register(['angular2/core', '../../../../common/components/atexo-chart.component', '../../../../common/pipe/atexo.pipe', './providers/panel-body-list.provider'], function(exports_1, context_1) {
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
    var core_1, atexo_chart_component_1, atexo_pipe_1, panel_body_list_provider_1;
    var PanelBodyList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (atexo_chart_component_1_1) {
                atexo_chart_component_1 = atexo_chart_component_1_1;
            },
            function (atexo_pipe_1_1) {
                atexo_pipe_1 = atexo_pipe_1_1;
            },
            function (panel_body_list_provider_1_1) {
                panel_body_list_provider_1 = panel_body_list_provider_1_1;
            }],
        execute: function() {
            PanelBodyList = (function () {
                function PanelBodyList(panelBodyListProvider) {
                    this.chartData = [[]];
                    this.chartLabels = [];
                    this.chartType = 'donut';
                    this.chartConfigOption = {};
                    this.displayType = 'Table';
                    this.displayTypes = [
                        {
                            active: true,
                            type: 'Tableau',
                            icons: 'fa fa-table'
                        }, {
                            active: false,
                            type: 'Camembert',
                            icons: 'fa fa-pie-chart'
                        }];
                    this.items = [];
                    this.panelBodyListProvider = panelBodyListProvider;
                }
                PanelBodyList.prototype.ngOnInit = function () {
                    this.panelBodyListServiceAll(this.panelBodyObj.urlData);
                    return true;
                };
                PanelBodyList.prototype.updateDisplayType = function (i) {
                    this.displayType = this.displayTypes[i].type;
                    for (var j = 0; j < this.displayTypes.length; j++) {
                        this.displayTypes[j].active = false;
                        if (j === i) {
                            this.displayTypes[j].active = true;
                        }
                    }
                    return false;
                };
                // events
                PanelBodyList.prototype.chartClicked = function (e) {
                    e.ngElement.getElementsByClassName('c3-chart-arcs-title').item(0).textContent = e.data.name + '  ' + (Math.round(e.data.ratio * 1000) / 10) + '%';
                };
                PanelBodyList.prototype.chartMouseOvered = function (e) {
                    e.ngElement.getElementsByClassName('c3-chart-arcs-title').item(0).textContent = e.data.value + ' Consultations';
                };
                PanelBodyList.prototype.panelBodyListServiceAll = function (url) {
                    var _this = this;
                    this.panelBodyListProvider.all(url).subscribe(function (res) {
                        if (res.status === 200) {
                            _this.items = res.json();
                            var i_1 = 0;
                            _this.items.forEach(function (obj) {
                                var arr = [];
                                arr.push(obj.status.replace('En cours - ', ''));
                                arr.push(obj.count);
                                _this.chartData.push(arr);
                                i_1++;
                            });
                        }
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], PanelBodyList.prototype, "panelBodyObj", void 0);
                PanelBodyList = __decorate([
                    core_1.Component({
                        selector: 'panel-body-list',
                        providers: [panel_body_list_provider_1.PanelBodyListProvider]
                    }),
                    core_1.View({
                        template: "\n            <div class=\"{{ panelBodyObj.type.category | toClass }}\">\n\n                <div class=\"clearfix sub-header\">\n                    <ul class=\"atexoui-list right horizontal\">\n                        <li *ngFor=\"#displayType of displayTypes; #i=index\"\n                            [ngClass]=\"{ available: displayTypes[i].active, disabled: !displayTypes[i].active }\">\n                            <a href=\"\"\n                               [ngClass]=\"{ available: displayTypes[i].active, disabled: !displayTypes[i].active }\"\n                               (click)=\"updateDisplayType(i)\"\n                               title=\"{{displayType.type}}\"\n                               name=\"{{displayType.type}}\">\n                                <span class=\"{{displayType.icons}}\"></span>\n\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n\n                <div class=\"display-table list-group\" role=\"list\" *ngIf=\"displayTypes[0].active\">\n                    <a class=\"list-group-item\" href=\"{{item.url}}\" role=\"listitem\"\n                       *ngFor=\"#item of items; #i=index\">\n                        {{item.status}}\n                        <span class=\"badge\" [ngClass]=\"{ 'badge-success': item.active }\">{{item.count}}</span>\n                    </a>\n                </div>\n\n                <div class=\"display-chart chart chart-pie\" *ngIf=\"displayTypes[1].active\">\n                    <chart\n                        class=\"c3-responsive\"\n                        [data]=\"chartData\"\n                        [type]=\"chartType\"\n                        [configOption]=\"chartConfigOption\"\n                        (chartClick)=\"chartClicked($event)\"\n                        (chartMouseOver)=\"chartMouseOvered($event)\"></chart>\n                </div>\n\n            </div>\n            ",
                        pipes: [atexo_pipe_1.ToClassPipe],
                        directives: [atexo_chart_component_1.AtexoChart]
                    }), 
                    __metadata('design:paramtypes', [panel_body_list_provider_1.PanelBodyListProvider])
                ], PanelBodyList);
                return PanelBodyList;
            }());
            exports_1("PanelBodyList", PanelBodyList);
        }
    }
});

//# sourceMappingURL=panel-body-list.component.js.map
