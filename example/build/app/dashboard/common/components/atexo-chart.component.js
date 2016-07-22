System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var AtexoChart;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AtexoChart = (function () {
                function AtexoChart(element) {
                    this.element = element;
                    this._data = [];
                    this._type = 'spline';
                    this.chartClick = new core_1.EventEmitter();
                    this.chartMouseOver = new core_1.EventEmitter();
                    this.chartMouseOut = new core_1.EventEmitter();
                }
                AtexoChart.prototype.ngOnInit = function () {
                    this.init();
                    this.refresh();
                };
                AtexoChart.prototype.ngOnDestroy = function () {
                    return true;
                };
                AtexoChart.prototype.ngAfterViewInit = function () {
                    return true;
                };
                Object.defineProperty(AtexoChart.prototype, "data", {
                    // private get data
                    get: function () {
                        return this._data;
                    },
                    // private set data
                    set: function (value) {
                        this._data = value;
                        if (this._type && this._type.length > 0) {
                            this.refresh();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AtexoChart.prototype, "type", {
                    // private get type
                    get: function () {
                        return this._type;
                    },
                    // private set type
                    set: function (value) {
                        this._type = value;
                        if (this._type && this._type.length > 0) {
                            this.refresh();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AtexoChart.prototype, "configOption", {
                    // private get configOption
                    get: function () {
                        return this._configOption;
                    },
                    // private set configOption
                    set: function (value) {
                        this._configOption = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AtexoChart.prototype, "configData", {
                    // private get configData
                    get: function () {
                        return this._configData;
                    },
                    // private set configData
                    set: function (value) {
                        this._configData = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                // private get config
                AtexoChart.prototype.assignChartConfig = function () {
                    var _this = this;
                    this.chartConfig = {
                        bindto: this.bindTo,
                        data: {
                            columns: this.data,
                            type: this.type,
                            onclick: function (d, i) {
                                _this.onclick(d, i);
                            },
                            onmouseover: function (d, i) {
                                _this.onmouseover(d, i);
                            },
                            onmouseout: function (d, i) {
                                _this.onmouseout(d, i);
                            }
                        }
                    };
                    this.chartConfig['data'] = Object.assign(this.chartConfig['data'], this.configData);
                    this.chartConfig = Object.assign(this.chartConfig, this.configOption);
                };
                AtexoChart.prototype.init = function () {
                    this.bindTo = this.element.nativeElement;
                };
                AtexoChart.prototype.refresh = function () {
                    this.assignChartConfig();
                    this.chart = c3.generate(this.chartConfig);
                };
                AtexoChart.prototype.refreshData = function () {
                    this.chart.load({
                        columns: this.data
                    });
                };
                AtexoChart.prototype.onclick = function (data, element) {
                    this.chartClick.emit({
                        chart: this.chart,
                        data: data,
                        element: element,
                        ngElement: this.bindTo
                    });
                };
                AtexoChart.prototype.onmouseover = function (data, element) {
                    this.chartMouseOver.emit({
                        chart: this.chart,
                        data: data,
                        element: element,
                        ngElement: this.bindTo
                    });
                };
                AtexoChart.prototype.onmouseout = function (data, element) {
                    this.chartMouseOut.emit({
                        chart: this.chart,
                        data: data,
                        element: element,
                        ngElement: this.bindTo
                    });
                };
                AtexoChart = __decorate([
                    core_1.Component({
                        selector: 'chart',
                        properties: [
                            'data',
                            'type',
                            'configOption',
                            'configData'
                        ],
                        events: ['chartClick', 'chartMouseOver', 'chartMouseOut']
                    }),
                    core_1.View({
                        template: "<div class=\"chart-bindto-wrap atexo-chart-bindto-wrap\"></div>"
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], AtexoChart);
                return AtexoChart;
            }());
            exports_1("AtexoChart", AtexoChart);
        }
    }
});

//# sourceMappingURL=atexo-chart.component.js.map
