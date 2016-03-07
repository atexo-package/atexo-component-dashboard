import { ElementRef } from 'angular2/core';
export declare class AtexoChart {
    private element;
    private bindTo;
    private chart;
    private chartConfig;
    private _data;
    private _type;
    private _configOption;
    private _configData;
    private chartClick;
    private chartMouseOver;
    private chartMouseOut;
    constructor(element: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): boolean;
    ngAfterViewInit(): boolean;
    private data;
    private type;
    private configOption;
    private configData;
    private assignChartConfig();
    init(): void;
    refresh(): void;
    refreshData(): void;
    onclick(data: any, element: any): void;
    onmouseover(data: any, element: any): void;
    onmouseout(data: any, element: any): void;
}
