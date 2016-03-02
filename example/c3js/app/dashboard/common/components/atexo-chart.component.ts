import {Component, Directive, View, ElementRef, Input, Inject, Attribute, EventEmitter} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from 'angular2/common';
import {RouteParams} from 'angular2/router';
import {HTTP_PROVIDERS, Http, RequestOptions, Request, Response, RequestMethod} from 'angular2/http';

declare var c3:any;

@Component({
    selector: 'chart',
    properties: [
        'data',
        'type',
        'colors',
        'option'
    ],
    events: ['chartClick', 'chartMouseOver', 'chartMouseOut']
})

@View({
    template: `<div class="chart-bindto-wrap atexo-chart-bindto-wrap"></div>`
})

export class AtexoChart {

    private bindTo:HTMLCanvasElement;
    private chart:any;
    private chartConfig:Object;
    private _data:Array<any> = [];
    private _type:String = 'spline';
    private _colors:Object;
    private _option:Object;
    private chartClick:EventEmitter<any> = new EventEmitter();
    private chartMouseOver:EventEmitter<any> = new EventEmitter();
    private chartMouseOut:EventEmitter<any> = new EventEmitter();


    constructor(private element:ElementRef) {
    }


    ngOnInit() {
        this.init();
        this.refresh();
    }

    ngOnDestroy() {
        return true;
    }

    ngAfterViewInit() {

        return true;
    }

    // private get data
    private get data() {
        return this._data;
    }

    // private set data
    private set data(value) {
        this._data = value;
    }

    // private get type
    private get type() {
        return this._type;
    }

    // private set type
    private set type(value) {
        this._type = value;
    }

    // private get type
    private get colors() {
        return this._colors;
    }

    // private set type
    private set colors(value) {
        this._colors = value;
    }

    // private get option
    private get option() {
        return this._option;
    }

    // private set option
    private set option(value) {
        this._option = value;
    }


    // private get option
    private assignChartConfig() {

        this.chartConfig = {
            bindto: this.bindTo,
            data: {
                columns: this.data,
                type: this.type,
                colors: this.colors,
                onclick: (d, i) => {
                    this.onclick(d, i);
                },
                onmouseover: (d, i) => {
                    this.onmouseover(d, i);
                },
                onmouseout: (d, i) => {
                    this.onmouseout(d, i);
                }
            }
        };

        this.chartConfig = Object.assign(this.chartConfig, this.option);
    }

    init() {
        this.bindTo = <HTMLCanvasElement> this.element.nativeElement;
    }

    refresh() {
        this.assignChartConfig();
        this.chart = c3.generate(this.chartConfig);
    }

    public onclick(data:any, element:any) {
        this.chartClick.emit({
            chart: this.chart,
            data: data,
            element: element,
            ngElement: this.bindTo
        });
    }

    public onmouseover(data:any, element:any) {
        this.chartMouseOver.emit({
            chart: this.chart,
            data: data,
            element: element,
            ngElement: this.bindTo
        });
    }

    public onmouseout(data:any, element:any) {
        this.chartMouseOut.emit({
            chart: this.chart,
            data: data,
            element: element,
            ngElement: this.bindTo
        });
    }

}