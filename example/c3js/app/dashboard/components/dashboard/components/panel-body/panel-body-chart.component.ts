import {Component, Directive, View, ElementRef, Input, Inject, Attribute} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from 'angular2/common';
import {RouteParams} from 'angular2/router';
import {HTTP_PROVIDERS, Http, RequestOptions, Request, Response, RequestMethod} from 'angular2/http';
import {isPresent, isBlank } from 'angular2/src/facade/lang';


import {AtexoColorChartConstant, AtexoChartConstant} from '../../../../common/constants/atexo.constant';
import {ToClassPipe} from '../../../../common/pipe/atexo.pipe';
import {Util, Convert} from '../../../../common/services/atexo.service';
import {AtexoChart} from '../../../../common/components/atexo-chart.component';

//import {PanelBodyChartProvider} from './providers/panel-body-chart.provider';
import {AtexoSpinner} from '../../../../common/components/atexo-spinner.component';

//PanelBodyEditorProvider

declare var c3:any;

@Component({
    selector: 'panel-body-chart'
    //providers: [PanelBodyChartProvider]
    //inputs: ['panelObj']
})

@View({
    template: `
            <div class="">
                <chart
                    class="c3-responsive"
                    [data]="chartData"
                    [type]="chartType"
                    [option]="chartOption">
                </chart>
            </div>

            `,
    pipes: [ToClassPipe],
    directives: [AtexoChart]
})

export class PanelBodyChart {

    @Input() panelBodyObj;
    private chartData:Array<any>;
    private chartType:String;
    private chartOption:Object;


    constructor() {
        this.chartData = [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 50, 20, 10, 40, 15, 25]
        ];

        this.chartType = 'pie';

        this.chartOption = {
            bar:{
                width: {
                    ratio: 0.25 // this makes bar width 50% of length between ticks
                }
                // or
                //width: 100 // this makes bar width 100px
            }
        };
    }

    private ngOnInit() {
        return true;
    }

    private ngAfterViewInit() {
        return true;
    }
}