"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var lang_1 = require('angular2/src/facade/lang');
var atexo_pipe_1 = require('../../../../common/pipe/atexo.pipe');
var atexo_service_1 = require('../../../../common/services/atexo.service');
var atexo_chart_component_1 = require('../../../../common/components/atexo-chart.component');
var panel_body_chart_provider_1 = require('./providers/panel-body-chart.provider');
var atexo_spinner_component_1 = require('../../../../common/components/atexo-spinner.component');
var PanelBodyChart = (function () {
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
    PanelBodyChart.prototype.chartClicked = function (e) {
        e.ngElement.getElementsByClassName('c3-chart-arcs-title').item(0).textContent = e.data.name + '  ' + (Math.round(e.data.ratio * 1000) / 10) + '%';
    };
    PanelBodyChart.prototype.chartMouseOvered = function (e) {
        e.ngElement.getElementsByClassName('c3-chart-arcs-title').item(0).textContent = e.data.value;
    };
    PanelBodyChart.prototype.chartMouseOuted = function (e) {
        e.ngElement.getElementsByClassName('c3-chart-arcs-title').item(0).textContent = '';
    };
    PanelBodyChart.prototype.preventDefault = function (event) {
        event.preventDefault();
    };
    PanelBodyChart.prototype.panelBodyChartServiceGetData = function () {
        var _this = this;
        this.panelBodyChartProvider.get(this.panelBodyObj).subscribe(function (res) {
            _this.xhrStatusDisplaySpinner = false;
            if (res.status === 200) {
                _this.xhrResponse = res;
                _this.xhrStatusDisplayResources = true;
                _this.getChartArrayData();
                _this.chartData = _this.chartArrayData;
            }
        }, (function (err) {
            if (err.status === 404) {
                _this.xhrStatusDisplayError = true;
                _this.xhrStatusDisplaySpinner = false;
                console.log(err);
            }
        }));
    };
    PanelBodyChart.prototype.getChartArrayObject = function () {
        this.convert.cvsToJson(this.xhrResponse.text());
        this.chartArrayObject = this.convert.getData();
        return this.chartArrayObject;
    };
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
    PanelBodyChart.prototype.filterChartArrayObject = function (property, value) {
        this.chartArrayData = this.getChartArray(atexo_service_1.Util.getInstance().Json().getByProperty(this.chartArrayObject, property, value));
        console.log(this.chartArrayData);
        this.chartData = this.chartArrayData;
    };
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
        _chartArrayData.push(new Array(this.panelBodyObj.chart.config.data.x).concat(_eastingLabels));
        return _chartArrayData;
    };
    PanelBodyChart.prototype.panelBodyChartServiceGetOptions = function () {
        var _this = this;
        if (lang_1.isPresent(this.panelBodyObj.chart.type) && this.panelBodyObj.chart.type !== '') {
            this.chartType = this.panelBodyObj.chart.type;
        }
        if (lang_1.isPresent(this.panelBodyObj.chart.types) && !lang_1.isBlank(this.panelBodyObj.chart.types)) {
            this.chartTypes = this.panelBodyObj.chart.types;
            var i = atexo_service_1.Util.getInstance().arrayObjectFindIndex(this.chartTypes, function (e) {
                return e.type === _this.chartType;
            });
            if (i === -1) {
                i = 0;
                this.chartType = this.chartTypes[0].type;
            }
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
exports.PanelBodyChart = PanelBodyChart;
//# sourceMappingURL=panel-body-chart.component.js.map