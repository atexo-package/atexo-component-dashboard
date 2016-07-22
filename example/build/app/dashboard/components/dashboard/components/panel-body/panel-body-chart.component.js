System.register(['angular2/core', 'angular2/src/facade/lang', '../../../../common/pipe/atexo.pipe', '../../../../common/services/atexo.service', '../../../../common/components/atexo-chart.component', './providers/panel-body-chart.provider', '../../../../common/components/atexo-spinner.component'], function(exports_1, context_1) {
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
    var core_1, lang_1, atexo_pipe_1, atexo_service_1, atexo_chart_component_1, panel_body_chart_provider_1, atexo_spinner_component_1;
    var PanelBodyChart;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (atexo_pipe_1_1) {
                atexo_pipe_1 = atexo_pipe_1_1;
            },
            function (atexo_service_1_1) {
                atexo_service_1 = atexo_service_1_1;
            },
            function (atexo_chart_component_1_1) {
                atexo_chart_component_1 = atexo_chart_component_1_1;
            },
            function (panel_body_chart_provider_1_1) {
                panel_body_chart_provider_1 = panel_body_chart_provider_1_1;
            },
            function (atexo_spinner_component_1_1) {
                atexo_spinner_component_1 = atexo_spinner_component_1_1;
            }],
        execute: function() {
            PanelBodyChart = (function () {
                function PanelBodyChart(panelBodyChartProvider) {
                    this.xhrStatusDisplaySpinner = true;
                    this.xhrStatusDisplayResources = false;
                    this.xhrStatusDisplayError = false;
                    this.convert = new atexo_service_1.Convert();
                    this.chartTypes = [];
                    this.arrayOrdered = new Array();
                    this.panelBodyChartProvider = panelBodyChartProvider;
                    this.chartData = [];
                    this.currentYear = new Date().getFullYear().toString();
                }
                PanelBodyChart.prototype.ngOnInit = function () {
                    this.chartType = this.panelBodyObj.chart.type;
                    this.chartConfigData = this.panelBodyObj.chart.config.data;
                    this.chartConfigOption = this.panelBodyObj.chart.config.options;
                    this.panelBodyChartServiceGetOptions();
                    this.panelBodyChartServiceGetData();
                    return true;
                };
                PanelBodyChart.prototype.ngAfterViewInit = function () {
                    return true;
                };
                // events
                PanelBodyChart.prototype.chartClicked = function (e) {
                    if (this.chartType === 'donut') {
                        e.ngElement.getElementsByClassName('c3-chart-arcs-title').item(0).style = 'font-size: 3em; text-align: center; baseline-shift: -24%; fill:' + e.element.style.fill + ';';
                        e.ngElement.getElementsByClassName('c3-chart-arcs-title').item(0).setAttribute('text-anchor', 'middle');
                        e.ngElement.getElementsByClassName('c3-chart-arcs-title').item(0).textContent = e.data.value;
                    }
                };
                PanelBodyChart.prototype.chartMouseOvered = function (e) {
                    if (this.chartType === 'donut') {
                        e.ngElement.getElementsByClassName('c3-chart-arcs-title').item(0).style = 'font-size: 3em; text-align: center; baseline-shift: -24%; fill:' + e.element.style.fill + ';';
                        e.ngElement.getElementsByClassName('c3-chart-arcs-title').item(0).setAttribute('text-anchor', 'middle');
                        e.ngElement.getElementsByClassName('c3-chart-arcs-title').item(0).textContent = e.data.value;
                    }
                };
                PanelBodyChart.prototype.chartMouseOuted = function (e) {
                    e.ngElement.getElementsByClassName('c3-chart-arcs-title').item(0).textContent = '';
                };
                PanelBodyChart.prototype.preventDefault = function (event) {
                    event.preventDefault();
                };
                PanelBodyChart.prototype.panelBodyChartServiceGetData = function () {
                    var _this = this;
                    this.panelBodyChartProvider.get(this.panelBodyObj).subscribe(
                    // Http Success
                    function (res) {
                        _this.xhrStatusDisplaySpinner = false;
                        if (res.status === 200) {
                            _this.xhrResponse = res;
                            _this.xhrStatusDisplayResources = true;
                            _this.getChartArrayData();
                            _this.chartData = _this.chartArrayData;
                            console.log(_this.chartData);
                        }
                    }, 
                    // Http Error
                    (function (err) {
                        if (err.status === 404) {
                            _this.xhrStatusDisplayError = true;
                            _this.xhrStatusDisplaySpinner = false;
                            console.log(err);
                        }
                    }));
                };
                /**
                 *
                 * @private getChartArrayObject
                 * @name getChartArrayObject
                 * @description Get Array Object of ChartData after convert SVS to JSON
                 * @param res:any
                 * @returns {Array<Object>}
                 */
                PanelBodyChart.prototype.getChartArrayObject = function () {
                    this.convert.cvsToJson(this.xhrResponse.text());
                    this.chartArrayObject = this.convert.getData();
                    return this.chartArrayObject;
                };
                /**
                 *
                 * @private getChartArrayData
                 * @name getChartArrayData
                 * @description Get Array of ChartData
                 * @param res:any
                 * @returns {Array<Array>}
                 */
                PanelBodyChart.prototype.getChartArrayData = function () {
                    var _filterName = this.panelBodyObj.chart.axes.filter.name, _filterLabels = this.panelBodyObj.chart.axes.filter.labels, _filterDefault = this.panelBodyObj.chart.axes.filter.default;
                    this.getChartArrayObject();
                    this.filterYear = this.convert.getAllPropertyValueByName('annee');
                    if (!this.panelBodyObj.chart.axes.filter.active) {
                        this.chartArrayData = this.getChartArray(this.chartArrayObject);
                    }
                    else {
                        this.filterChartArrayObject(['annee'], [this.currentYear]);
                    }
                    return {
                        'chartArrayData': this.chartArrayData,
                        'chartArrayObject': this.chartArrayObject
                    };
                };
                /**
                 *
                 * @private getChartArrayData
                 * @name getChartArrayData
                 * @description Get Array of ChartData
                 * @param res:any
                 * @returns {Array<Array>}
                 */
                PanelBodyChart.prototype.filterChartArrayObject = function (property, value) {
                    this.chartArrayData = this.getChartArray(atexo_service_1.Util.getInstance().Json().getByProperty(this.chartArrayObject, property, value));
                    this.chartData = this.chartArrayData;
                };
                /**
                 *
                 * @private getChartArray
                 * @name getChartArray
                 * @param arrayObject
                 * @returns {Array[]}
                 */
                PanelBodyChart.prototype.getChartArray = function (arrayObject) {
                    var _this = this;
                    var _orderedName = this.panelBodyObj.chart.axes.ordered.name, _abscissaName = this.panelBodyObj.chart.axes.abscissa.name, _eastingName = this.panelBodyObj.chart.axes.easting.name, _eastingArray = this.panelBodyObj.chart.axes.easting.array, _eastingLabels = this.panelBodyObj.chart.axes.easting.labels, _chartArrayData = [[]];
                    this.arrayOrdered = new Array();
                    arrayObject.forEach(function (obj) {
                        if (_this.arrayOrdered.indexOf(obj[_orderedName]) === -1) {
                            _this.arrayOrdered.push(obj[_orderedName]);
                            _chartArrayData[_this.arrayOrdered.indexOf(obj[_orderedName])]
                                = atexo_service_1.Util.getInstance().newArray(_eastingArray.length + 1);
                            _chartArrayData[_this.arrayOrdered.indexOf(obj[_orderedName])][0]
                                = obj[_orderedName];
                        }
                        _chartArrayData[_this.arrayOrdered.indexOf(obj[_orderedName])][_eastingArray.indexOf(obj[_eastingName]) + 1]
                            += Number(obj[_abscissaName]);
                    });
                    if (lang_1.isPresent(this.panelBodyObj.chart.config.data.x)) {
                        _chartArrayData.push(new Array(this.panelBodyObj.chart.config.data.x).concat(_eastingLabels));
                    }
                    return _chartArrayData;
                };
                PanelBodyChart.prototype.panelBodyChartServiceGetOptions = function () {
                    var _this = this;
                    // Set Chart default display Type
                    if (lang_1.isPresent(this.panelBodyObj.chart.type) && this.panelBodyObj.chart.type !== '') {
                        this.chartType = this.panelBodyObj.chart.type;
                    }
                    // Set Chart Types
                    if (lang_1.isPresent(this.panelBodyObj.chart.types) && !lang_1.isBlank(this.panelBodyObj.chart.types)) {
                        this.chartTypes = this.panelBodyObj.chart.types;
                        // Find index active type
                        var i = atexo_service_1.Util.getInstance().arrayObjectFindIndex(this.chartTypes, function (e) {
                            return e.type === _this.chartType;
                        });
                        // Test if this.panelBodyObj.chart.type not exist in this.panelBodyObj.chart.types
                        // All so Chart.Types[0].type affected to Chart.types
                        if (i === -1) {
                            i = 0;
                            this.chartType = this.chartTypes[0].type;
                        }
                        // Active chart type
                        this.panelBodyChartUpdateType(i);
                    }
                };
                PanelBodyChart.prototype.panelBodyChartUpdateType = function (i) {
                    this.chartType = this.chartTypes[i].type;
                    for (var j = 0; j < this.chartTypes.length; j++) {
                        this.chartTypes[j].active = false;
                        if (j === i) {
                            this.chartTypes[j].active = true;
                        }
                    }
                    this.chartType = this.chartTypes[i].type;
                    return false;
                };
                PanelBodyChart.prototype.panelBodyChartUpdateFilerYear = function (event, currentYear) {
                    this.currentYear = currentYear;
                    this.filterChartArrayObject(['annee'], [this.currentYear]);
                    event.preventDefault();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], PanelBodyChart.prototype, "panelBodyObj", void 0);
                PanelBodyChart = __decorate([
                    core_1.Component({
                        selector: 'panel-body-chart',
                        providers: [panel_body_chart_provider_1.PanelBodyChartProvider]
                    }),
                    core_1.View({
                        template: "\n            <div class=\"clearfix sub-header\" *ngIf=\"xhrStatusDisplayResources\">\n                <div class=\"pull-left\">\n                    <form class=\"sub-header-form-horizontal\" action=\"\">\n                        <div *ngIf=\"panelBodyObj.chart.axes.filter.active\" class=\"filter-item\">\n                            <label class=\"control-label\" for=\"\">Ann\u00E9e</label>\n                            <select\n                                [(ngModel)]=\"currentYear\"\n                                class=\"input-select\"\n                                (change)=\"panelBodyChartUpdateFilerYear($event, $event.target.value)\">\n                                <option *ngFor=\"#year of filterYear\" [value]=\"year\" (click)=\"preventDefault($event)\">{{year}}</option>\n                            </select>\n                        </div>\n                    </form>\n                </div>\n                <ul class=\"atexoui-list right horizontal\">\n                    <li *ngFor=\"#type of chartTypes; #i=index\"\n                        [ngClass]=\"{ available: chartTypes[i].active, disabled: !chartTypes[i].active }\">\n                        <a\n                           href=\"\"\n                           [ngClass]=\"{ available: chartTypes[i].active, disabled: !chartTypes[i].active }\"\n                           (click)=\"panelBodyChartUpdateType(i);\"\n                           title=\"{{type.name}}\"\n                           name=\"{{type.name}}\">\n                            <span class=\"{{type.icons}}\"></span>\n\n                        </a>\n                    </li>\n                </ul>\n            </div>\n            <atexo-spinner *ngIf=\"xhrStatusDisplaySpinner\"></atexo-spinner>\n\n            <div class=\"\">\n                <chart\n                    *ngIf=\"xhrStatusDisplayResources\"\n                    class=\"c3-responsive\"\n                    [data]=\"chartData\"\n                    [type]=\"chartType\"\n                    [configOption]=\"chartConfigOption\"\n                    [configData]=\"chartConfigData\"\n                    (chartClick)=\"chartClicked($event)\"\n                    (chartMouseOver)=\"chartMouseOvered($event)\"\n                    (chartMouseOut)=\"chartMouseOuted($event)\">\n                </chart>\n            </div>\n\n            <div class=\"error\" *ngIf=\"xhrStatusDisplayError\">\n                <p class=\"text-danger text-center\"><strong>Donn\u00E9es temporairement indisponible</strong></p>\n            </div>\n\n            ",
                        pipes: [atexo_pipe_1.ToClassPipe],
                        directives: [atexo_chart_component_1.AtexoChart, atexo_spinner_component_1.AtexoSpinner]
                    }), 
                    __metadata('design:paramtypes', [panel_body_chart_provider_1.PanelBodyChartProvider])
                ], PanelBodyChart);
                return PanelBodyChart;
            }());
            exports_1("PanelBodyChart", PanelBodyChart);
        }
    }
});

//# sourceMappingURL=panel-body-chart.component.js.map
