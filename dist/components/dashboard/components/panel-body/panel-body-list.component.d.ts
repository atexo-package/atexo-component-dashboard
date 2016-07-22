import { PanelBodyListProvider } from './providers/panel-body-list.provider';
export declare class PanelBodyList {
    panelBodyObj: any;
    panelBodyListProvider: PanelBodyListProvider;
    items: Array<any>;
    xhrStatusDisplaySpinner: boolean;
    xhrStatusDisplayResources: boolean;
    xhrStatusDisplayError: boolean;
    private chartData;
    private chartLabels;
    private chartType;
    private chartConfigOption;
    private displayType;
    private displayTypes;
    constructor(panelBodyListProvider: PanelBodyListProvider);
    ngOnInit(): boolean;
    updateDisplayType(i?: number): boolean;
    chartClicked(e: any): void;
    chartMouseOvered(e: any): void;
    panelBodyListServiceAll(url: any): void;
}
