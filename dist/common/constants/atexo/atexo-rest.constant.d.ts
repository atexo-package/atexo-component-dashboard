import { RequestMethod } from 'angular2/http';
import { RequestUrlType } from './atexo-enum.constant';
export declare var AtexoRestConstant: {
    baseUrl: string;
    _format: string;
    request: {
        panel: {
            all: {
                method: RequestMethod;
                header: {};
                url: string;
                type: RequestUrlType;
                _format: string;
                parameter: {
                    limit: number;
                    offset: number;
                };
            };
            byId: {
                method: RequestMethod;
                url: string;
                type: RequestUrlType;
            };
        };
        alert: {
            all: {
                method: RequestMethod;
                header: {};
                url: string;
                type: RequestUrlType;
                _format: string;
                parameter: {
                    limit: number;
                    offset: number;
                };
            };
        };
        news: {
            all: {
                method: RequestMethod;
                header: {};
                url: string;
                type: RequestUrlType;
                _format: string;
                parameter: {
                    limit: number;
                    offset: number;
                };
            };
            byId: {
                method: RequestMethod;
                header: {};
                url: string;
                type: RequestUrlType;
            };
        };
    };
};
