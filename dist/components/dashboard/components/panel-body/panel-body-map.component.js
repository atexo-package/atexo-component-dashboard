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
var atexo_pipe_1 = require('../../../../common/pipe/atexo.pipe');
var atexo_spinner_component_1 = require('../../../../common/components/atexo-spinner.component');
var PanelBodyMap = (function () {
    function PanelBodyMap() {
        this.xhrStatusDisplaySpinner = true;
        this.xhrStatusDisplayResources = false;
        this.xhrStatusDisplayError = false;
        this.mapId = '#mapd3';
        this.mapScale = 1;
        this.mapWidth = 600;
        this.mapHeight = 550;
        this.centerX = 2.454071;
        this.centerY = 46.279229;
    }
    PanelBodyMap.prototype.ngOnInit = function () {
        return true;
    };
    PanelBodyMap.prototype.ngAfterViewInit = function () {
        var _this = this;
        var selectedData = 'Attribution';
        var width = this.mapWidth, height = this.mapHeight;
        var path = d3.geo.path();
        var projection = d3.geo.conicConformal()
            .center([this.centerX, this.centerY])
            .scale(3000)
            .translate([width / 2, height / 2]);
        path.projection(projection);
        var mapTag = d3.select(this.mapId);
        var svg = d3.select(this.mapId).append('svg')
            .attr('id', 'svg')
            .attr('width', '100%')
            .attr('height', height)
            .attr('class', 'Blues');
        var deps = svg.append('g')
            .attr('transform', 'translate(20, 0)');
        var div = d3.select('body').append('div')
            .attr('class', 'tooltip')
            .style('opacity', 0);
        d3.json('server/mocks/departments.json', function (req, geojson) {
            var features = deps
                .selectAll('path')
                .data(geojson.features)
                .enter()
                .append('path')
                .attr('id', function (d) {
                return 'd' + d.properties.CODE_DEPT;
            })
                .attr('d', path);
            d3.csv('server/mocks/data.csv', function (csv) {
                var quantile = d3.scale.quantile().domain([0, d3.max(csv, function (e) {
                        return +e[selectedData];
                    })]).range(d3.range(9));
                var legend = svg.append('g')
                    .attr('transform', 'translate(525, 150)')
                    .attr('id', 'legend');
                legend.selectAll('.colorbar')
                    .data(d3.range(9))
                    .enter().append('svg:rect')
                    .attr('y', function (d) {
                    return d * 20 + 'px';
                })
                    .attr('height', '20px')
                    .attr('width', '20px')
                    .attr('x', '0px')
                    .attr('class', function (d) {
                    return 'q' + d + '-9';
                });
                var legendScale = d3.scale.linear()
                    .domain([0, d3.max(csv, function (e) {
                        return +e[selectedData];
                    })])
                    .range([0, 9 * 20]);
                var legendAxis = d3.svg.axis()
                    .scale(legendScale)
                    .orient('right')
                    .tickSize(6)
                    .ticks(9);
                var legendLabels = svg.append('g')
                    .attr('transform', 'translate(550, 150)')
                    .attr('class', 'y axis')
                    .call(legendAxis);
                csv.forEach(function (e, i) {
                    d3.select('#d' + e.CODE_DEPT)
                        .attr('class', function (d) {
                        return 'department q' + quantile(+e[selectedData]) + '-9';
                    })
                        .on('mouseover', function (d) {
                        div.transition()
                            .duration(200)
                            .style('opacity', .9);
                        div.html('<b>Région : </b>' + e.NOM_REGION + '<br>'
                            + '<b>Département : </b>' + e.NOM_DEPT + '<br>'
                            + '<b>' + selectedData + ' : </b>' + e[selectedData] + '<br>')
                            .style('left', (d3.event.pageX + 30) + 'px')
                            .style('top', (d3.event.pageY - 30) + 'px');
                    })
                        .on('mouseout', function (d) {
                        div.transition()
                            .duration(500)
                            .style('opacity', 0);
                        div.html('')
                            .style('left', '0px')
                            .style('top', '0px');
                    })
                        .on('click', function (d) {
                        if (d.properties.CODE_REG === '11' && _this.mapScale === 1) {
                            _this.mapScale = 6;
                            var wt = -250;
                            var ht = -108;
                            deps.transition().duration(500).attr('transform', 'scale(' + _this.mapScale + ') translate(' + wt + ', ' + ht + ')');
                            csv.forEach(function (e, i) {
                                if (e.CODE_REG !== '11') {
                                    d3.select('#d' + e.CODE_DEPT).transition()
                                        .duration(500)
                                        .style('opacity', 0.1);
                                }
                            });
                        }
                        else {
                            _this.mapScale = 1;
                            deps.transition().duration(500).attr('transform', 'scale(' + _this.mapScale + ') translate(20, 0)');
                            csv.forEach(function (e, i) {
                                d3.select('#d' + e.CODE_DEPT).transition()
                                    .duration(500)
                                    .style('opacity', 1);
                            });
                        }
                    });
                });
                _this.xhrStatusDisplayResources = true;
                _this.xhrStatusDisplaySpinner = false;
            });
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PanelBodyMap.prototype, "panelBodyObj", void 0);
    PanelBodyMap = __decorate([
        core_1.Component({
            selector: 'panel-body-map',
            providers: []
        }),
        core_1.View({
            template: "\n            <div class=\"clearfix sub-header\">\n                <atexo-spinner *ngIf=\"xhrStatusDisplaySpinner\"></atexo-spinner>\n                <div [ngClass]=\"{active: xhrStatusDisplayResources}\" id=\"mapd3\" class=\"mapd3\"></div>\n            </div>\n\n            ",
            pipes: [atexo_pipe_1.ToClassPipe],
            directives: [atexo_spinner_component_1.AtexoSpinner]
        }), 
        __metadata('design:paramtypes', [])
    ], PanelBodyMap);
    return PanelBodyMap;
}());
exports.PanelBodyMap = PanelBodyMap;
//# sourceMappingURL=panel-body-map.component.js.map