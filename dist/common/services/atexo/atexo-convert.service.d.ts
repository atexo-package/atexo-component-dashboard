export declare class Convert {
    static instance: Convert;
    static isCreating: Boolean;
    private strDelimiter;
    private arrayObject;
    private jsonData;
    private arrayProperty;
    private arrayPropertyValue;
    cvsToJson(csv: string, strDelimiter?: string): String;
    getData(): any[];
    getJson(): String;
    getProperty(): any[];
    getAllPropertyValue(): Object;
    getAllPropertyValueByName(name: string): any;
    getArrayProperty(lineProperty: String): String[];
}
