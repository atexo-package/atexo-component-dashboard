var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define("common/constants/atexo/atexo-enum.constant", ["require", "exports"], function (require, exports) {
    "use strict";
    (function (RequestUrlType) {
        RequestUrlType[RequestUrlType["Static"] = 0] = "Static";
        RequestUrlType[RequestUrlType["Relative"] = 1] = "Relative";
        RequestUrlType[RequestUrlType["Absolute"] = 2] = "Absolute";
    })(exports.RequestUrlType || (exports.RequestUrlType = {}));
    var RequestUrlType = exports.RequestUrlType;
});
define("common/constants/atexo/atexo-path.constant", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.AtexoPathConstant = {
        base: './app/',
        folder: {
            common: './app/common/'
        }
    };
});
define("common/constants/atexo/atexo-rest.constant", ["require", "exports", 'angular2/http', "common/constants/atexo/atexo-enum.constant"], function (require, exports, http_1, atexo_enum_constant_1) {
    "use strict";
    exports.AtexoRestConstant = {
        baseUrl: 'http://localhost:5600/',
        _format: 'json',
        request: {
            panel: {
                all: {
                    method: http_1.RequestMethod.Get,
                    header: {},
                    url: 'panel',
                    type: atexo_enum_constant_1.RequestUrlType.Relative,
                    _format: 'json',
                    parameter: {
                        limit: 5,
                        offset: 0
                    }
                },
                byId: {
                    method: http_1.RequestMethod.Get,
                    url: 'panel',
                    type: atexo_enum_constant_1.RequestUrlType.Relative
                }
            },
            alert: {
                all: {
                    method: http_1.RequestMethod.Get,
                    header: {},
                    url: 'alert',
                    type: atexo_enum_constant_1.RequestUrlType.Relative,
                    _format: 'json',
                    parameter: {
                        limit: 5,
                        offset: 0
                    }
                }
            },
            news: {
                all: {
                    method: http_1.RequestMethod.Get,
                    header: {},
                    url: 'news',
                    type: atexo_enum_constant_1.RequestUrlType.Relative,
                    _format: 'json',
                    parameter: {
                        limit: 5,
                        offset: 0
                    }
                },
                byId: {
                    method: http_1.RequestMethod.Get,
                    header: {},
                    url: 'news',
                    type: atexo_enum_constant_1.RequestUrlType.Relative
                }
            }
        }
    };
});
define("common/constants/atexo/atexo-colors-chart.constant", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.AtexoColorChartConstant = [
        {
            fillColor: 'rgba(253, 216, 53,0.2)',
            strokeColor: 'rgba(253, 216, 53,1)',
            pointColor: 'rgba(253, 216, 53,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(253, 216, 53,0.8)',
            color: 'rgba(253, 216, 53,1)',
            highlight: 'rgba(253, 216, 53,0.8)'
        }, {
            fillColor: 'rgba(236, 64, 122,0.2)',
            strokeColor: 'rgba(236, 64, 122,1)',
            pointColor: 'rgba(236, 64, 122,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(236, 64, 122,0.8)',
            color: 'rgba(236, 64, 122,1)',
            highlight: 'rgba(236, 64, 122,0.8)'
        }, {
            fillColor: 'rgba(205, 220, 57,0.2)',
            strokeColor: 'rgba(205, 220, 57,1)',
            pointColor: 'rgba(205, 220, 57,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(205, 220, 57,0.8)',
            color: 'rgba(205, 220, 57,1)',
            highlight: 'rgba(205, 220, 57,0.8)'
        }, {
            fillColor: 'rgba(41, 182, 246,0.2)',
            strokeColor: 'rgba(41, 182, 246,1)',
            pointColor: 'rgba(41, 182, 246,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(41, 182, 246,0.8)',
            color: 'rgba(41, 182, 246,1)',
            highlight: 'rgba(41, 182, 246,0.8)'
        }, {
            fillColor: 'rgba(142, 68, 173,0.2)',
            strokeColor: 'rgba(142, 68, 173,1)',
            pointColor: 'rgba(142, 68, 173,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(142, 68, 173,0.8)',
            color: 'rgba(142, 68, 173,1)',
            highlight: 'rgba(142, 68, 173,0.8)'
        }, {
            fillColor: 'rgba(88, 214, 141,0.2)',
            strokeColor: 'rgba(88, 214, 141,1)',
            pointColor: 'rgba(88, 214, 141,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(88, 214, 141,0.8)',
            color: 'rgba(88, 214, 141,1)',
            highlight: 'rgba(88, 214, 141,0.8)'
        }, {
            fillColor: 'rgba(255, 193, 7,0.2)',
            strokeColor: 'rgba(255, 193, 7,1)',
            pointColor: 'rgba(255, 193, 7,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(255, 193, 7,0.8)',
            color: 'rgba(255, 193, 7,1)',
            highlight: 'rgba(255, 193, 7,0.8)'
        }, {
            fillColor: 'rgba(13, 71, 161,0.2)',
            strokeColor: 'rgba(13, 71, 161,1)',
            pointColor: 'rgba(13, 71, 161,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(13, 71, 161,0.8)',
            color: 'rgba(13, 71, 161,1)',
            highlight: 'rgba(13, 71, 161,0.8)'
        }, {
            fillColor: 'rgba(165, 105, 189,0.2)',
            strokeColor: 'rgba(165, 105, 189,1)',
            pointColor: 'rgba(165, 105, 189,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(165, 105, 189,0.8)',
            color: 'rgba(165, 105, 189,1)',
            highlight: 'rgba(165, 105, 189,0.8)'
        }, {
            fillColor: 'rgba(142, 68, 173,0.2)',
            strokeColor: 'rgba(142, 68, 173,1)',
            pointColor: 'rgba(142, 68, 173,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(142, 68, 173,0.8)',
            color: 'rgba(142, 68, 173,1)',
            highlight: 'rgba(142, 68, 173,0.8)'
        }, {
            fillColor: 'rgba(171, 178, 185,0.2)',
            strokeColor: 'rgba(171, 178, 185,1)',
            pointColor: 'rgba(171, 178, 185,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(171, 178, 185,0.8)',
            color: 'rgba(171, 178, 185,1)',
            highlight: 'rgba(171, 178, 185,0.8)'
        }, {
            fillColor: 'rgba(255, 160, 122,0.2)',
            strokeColor: 'rgba(255, 160, 122,1)',
            pointColor: 'rgba(255, 160, 122,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(255, 160, 122,0.8)',
            color: 'rgba(255, 160, 122,1)',
            highlight: 'rgba(255, 160, 122,0.8)'
        }, {
            fillColor: 'rgba(250, 128, 114,0.2)',
            strokeColor: 'rgba(250, 128, 114,1)',
            pointColor: 'rgba(250, 128, 114,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(250, 128, 114,0.8)',
            color: 'rgba(250, 128, 114,1)',
            highlight: 'rgba(250, 128, 114,0.8)'
        }];
});
define("common/constants/atexo/atexo-chart.constant", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.AtexoChartConstant = {
        typeCategory: {
            single: ['Pie', 'Doughnut', 'PolarArea'],
            multiple: ['Line', 'Bar', 'Radar']
        },
        colors: ['#']
    };
});
define("common/constants/atexo.constant", ["require", "exports", "common/constants/atexo/atexo-enum.constant", "common/constants/atexo/atexo-path.constant", "common/constants/atexo/atexo-rest.constant", "common/constants/atexo/atexo-colors-chart.constant", "common/constants/atexo/atexo-chart.constant"], function (require, exports, atexo_enum_constant_2, atexo_path_constant_1, atexo_rest_constant_1, atexo_colors_chart_constant_1, atexo_chart_constant_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    __export(atexo_enum_constant_2);
    __export(atexo_path_constant_1);
    __export(atexo_rest_constant_1);
    __export(atexo_colors_chart_constant_1);
    __export(atexo_chart_constant_1);
});
define("common/services/atexo/atexo-util.service", ["require", "exports", 'angular2/core', 'angular2/http', 'angular2/src/facade/lang', "common/constants/atexo.constant"], function (require, exports, core_1, http_2, lang_1, atexo_constant_1) {
    "use strict";
    var Util = (function () {
        function Util() {
            if (!Util.isCreating) {
                throw new Error('[Util] You can\'t call new in Singleton instances!');
            }
        }
        Util.getInstance = function () {
            if (Util.instance == null) {
                Util.isCreating = true;
                Util.instance = new Util();
                Util.isCreating = false;
            }
            return Util.instance;
        };
        Util.prototype.Path = function () {
            return new Path();
        };
        Util.prototype.Rest = function () {
            return new Rest();
        };
        Util.prototype.RequestOptions = function () {
            return new RequestOptions();
        };
        Util.prototype.RequestHeader = function () {
            return new RequestHeader();
        };
        Util.prototype.Json = function () {
            return new Json();
        };
        Util.prototype.URLParams = function () {
            return new URLParams();
        };
        Util.prototype.filterYear = function (offset) {
            var _year = new Date().getFullYear(), _offset = 5, arrayYear = [], i;
            if (lang_1.isPresent(offset)) {
                _offset = offset;
            }
            for (i = 0; i < _offset; i++) {
                arrayYear.push(_year--);
            }
            return arrayYear;
        };
        Util.prototype.arrayObjectFindIndex = function (arr, callback) {
            var len = arr.length, index, i;
            for (i = 0; i < len; i++) {
                var e = arr[i];
                if (callback(e)) {
                    index = i;
                }
            }
            if (index === undefined) {
                index = -1;
            }
            return index;
        };
        Util.prototype.newArray = function (length, defaultValue) {
            var i = 0, _defaultValue = 0, arr = new Array(length);
            if (lang_1.isPresent(defaultValue)) {
                _defaultValue = defaultValue;
            }
            for (i; i < length; i++) {
                arr[i] = _defaultValue;
            }
            return arr;
        };
        Util.prototype.Grep = function (arr, callback) {
            var newArr = [], len = arr.length, i;
            for (i = 0; i < len; i++) {
                var e = arr[i];
                if (callback(e)) {
                    newArr.push(e);
                }
            }
            return newArr;
        };
        Util.prototype.Map = function (arr, callback) {
            var newArr = [], len = arr.length, i;
            for (i = 0; i < len; i++) {
                var e = arr[i];
                var n = callback(e);
                newArr.push(n);
            }
            return newArr;
        };
        Util.isCreating = false;
        Util = __decorate([
            core_1.Injectable(), 
            __metadata('design:paramtypes', [])
        ], Util);
        return Util;
    }());
    exports.Util = Util;
    var Rewriter = (function () {
        function Rewriter(base, uri) {
            this.base = '';
            this.uri = '';
            this.type = atexo_constant_1.RequestUrlType.Relative;
            uri = lang_1.isPresent(uri) ? uri : '';
            this.base = base;
            this.checkUri(uri);
        }
        Rewriter.prototype.checkUri = function (uri) {
            if (lang_1.isString(uri)) {
                this.type = atexo_constant_1.RequestUrlType.Relative;
                this.uri = uri;
            }
            else {
                this.type = uri['type'];
                this.uri = uri['url'];
            }
            return this;
        };
        Rewriter.prototype.setPath = function (uri) {
            this.checkUri(uri);
            return this;
        };
        Rewriter.prototype.build = function () {
            if (this.type === atexo_constant_1.RequestUrlType.Relative) {
                return this.base + this.uri;
            }
            return this.uri;
        };
        return Rewriter;
    }());
    var Path = (function (_super) {
        __extends(Path, _super);
        function Path(path) {
            path = lang_1.isPresent(path) ? path : '';
            _super.call(this, atexo_constant_1.AtexoPathConstant.base, path);
        }
        return Path;
    }(Rewriter));
    var Rest = (function (_super) {
        __extends(Rest, _super);
        function Rest(url) {
            url = lang_1.isPresent(url) ? url : '';
            _super.call(this, atexo_constant_1.AtexoRestConstant.baseUrl, url);
        }
        return Rest;
    }(Rewriter));
    var RequestOptions = (function () {
        function RequestOptions() {
            this.searchParams = new http_2.URLSearchParams();
        }
        RequestOptions.prototype.setSearchParams = function (data) {
            if (!lang_1.isPresent(data)) {
                return;
            }
            else {
                if (lang_1.isJsObject(data)) {
                    for (var item in data) {
                        if (data.hasOwnProperty(item)) {
                            this.searchParams.set(item, data[item]);
                        }
                    }
                }
                return this.searchParams;
            }
        };
        return RequestOptions;
    }());
    var RequestHeader = (function () {
        function RequestHeader() {
            this.header = new http_2.Headers();
        }
        RequestHeader.prototype.setHeaderParams = function (data) {
            if (!lang_1.isPresent(data)) {
                return;
            }
            else {
                if (lang_1.isJsObject(data)) {
                    for (var item in data) {
                        if (data.hasOwnProperty(item)) {
                            this.header.append(item, data[item]);
                        }
                    }
                }
                return this.header;
            }
        };
        return RequestHeader;
    }());
    var URLParams = (function () {
        function URLParams() {
            return this;
        }
        URLParams.prototype.parse = function (_params) {
            var params = new http_2.URLSearchParams();
            if (lang_1.isPresent(_params)) {
                for (var k in _params) {
                    if (_params.hasOwnProperty(k)) {
                        params.set(k, _params[k]);
                    }
                }
                this.params = params;
            }
            return this.params;
        };
        return URLParams;
    }());
    var Json = (function () {
        function Json() {
            return this;
        }
        Json.prototype.getByProperty = function (arrayJson, property, value) {
            var arrayProperty = [], arrayValue = [];
            if (lang_1.isPresent(property) && lang_1.isPresent(value)) {
                if (lang_1.isString(property) && lang_1.isString(value)) {
                    arrayProperty.push(property);
                    arrayValue.push(value);
                }
                else {
                    arrayProperty = property;
                    arrayValue = value;
                }
            }
            if (lang_1.isPresent(arrayJson)) {
                this.result = arrayJson;
            }
            var i = 0, length = this.result.length, arrReturn = [];
            for (; i < length; i++) {
                if (arrayProperty.length === 0 || arrayValue.length === 0) {
                    arrReturn.push(this.result[i]);
                }
                else {
                    if (this.checkPropertyValue(this.result[i], arrayProperty, arrayValue)) {
                        arrReturn.push(this.result[i]);
                    }
                }
            }
            this.result = arrReturn;
            return arrReturn;
        };
        Json.prototype.groupByProperty = function (property, arrayJson) {
            var _this = this;
            var arrayProperty = [];
            if (lang_1.isString(property)) {
                arrayProperty.push(property);
            }
            else {
                arrayProperty = property;
            }
            if (lang_1.isPresent(arrayJson)) {
                this.result = arrayJson;
            }
            var i = 0, length = this.result.length, arrReturn = [[]], arrEasting = [], arrOrdered = [], easting = this.easting;
            this.result.map(function (obj) {
                if (arrOrdered.indexOf(obj[arrayProperty[0]]) === -1) {
                    arrOrdered
                        .push(obj[arrayProperty[0]]);
                    arrReturn[arrOrdered.indexOf(obj[arrayProperty[0]])] = Util.getInstance().newArray(_this.easting.length);
                }
                arrReturn[arrOrdered.indexOf(obj[property[0]])][easting.indexOf(obj[property[1]])] += Number(obj[property[2]]);
            });
            this.arrayResult = arrReturn;
            this.ordered = arrOrdered;
            return arrReturn;
        };
        Json.prototype.setArrayJson = function (arrayJson) {
            this.result = arrayJson;
        };
        Json.prototype.getArrayJson = function () {
            return this.result;
        };
        Json.prototype.getResult = function () {
            return this.result;
        };
        Json.prototype.getOrdered = function () {
            return this.ordered;
        };
        Json.prototype.getArrayResult = function () {
            return this.arrayResult;
        };
        Json.prototype.getEasting = function () {
            return this.easting;
        };
        Json.prototype.setEasting = function (easting) {
            this.easting = easting;
            this.setEastingArray();
        };
        Json.prototype.setEastingArray = function () {
            return true;
        };
        Json.prototype.getAbscissa = function () {
            return this.abscissa;
        };
        Json.prototype.setAbscissa = function (abscissa) {
            this.abscissa = abscissa;
            this.setAbscissaArray();
        };
        Json.prototype.setAbscissaArray = function () {
            return true;
        };
        Json.prototype.checkPropertyValue = function (arrayJson, property, value) {
            var i = 0, length = property.length, result = true;
            for (; i < length; i++) {
                if (arrayJson[property[i]].toString() !== value[i].toString()) {
                    result = false;
                    return result;
                }
            }
            return result;
        };
        return Json;
    }());
});
define("common/services/atexo/atexo-progress.service", ["require", "exports", 'angular2/core'], function (require, exports, core_2) {
    "use strict";
    var Progress = (function () {
        function Progress() {
            this.nbrProgress = 0;
            if (!Progress.isCreating) {
                throw new Error('[Progress] You can\'t call new in Singleton instances!');
            }
        }
        Progress.getInstance = function () {
            if (Progress.instance == null) {
                Progress.isCreating = true;
                Progress.instance = new Progress();
                Progress.isCreating = false;
            }
            return Progress.instance;
        };
        Progress.prototype.getNbrProgress = function () {
            return this.nbrProgress;
        };
        Progress.prototype.showBackdrop = function () {
            return this.getNbrProgress();
        };
        Progress.prototype.incrementNbrProgress = function () {
            this.nbrProgress++;
        };
        Progress.prototype.decrementNbrProgress = function () {
            if (this.nbrProgress !== 0) {
                this.nbrProgress--;
            }
        };
        Progress.isCreating = false;
        Progress = __decorate([
            core_2.Injectable(), 
            __metadata('design:paramtypes', [])
        ], Progress);
        return Progress;
    }());
    exports.Progress = Progress;
});
define("common/services/atexo/atexo-convert.service", ["require", "exports", 'angular2/core', 'angular2/src/facade/lang'], function (require, exports, core_3, lang_2) {
    "use strict";
    var Convert = (function () {
        function Convert() {
            this.strDelimiter = ';';
            this.arrayObject = [];
            this.arrayProperty = [];
            this.arrayPropertyValue = {};
        }
        Convert.prototype.cvsToJson = function (csv, strDelimiter) {
            var lines = csv.split('\n'), linesLength = (lines[lines.length - 1] === '') ? lines.length - 1 : lines.length;
            if (lang_2.isPresent(strDelimiter)) {
                this.strDelimiter = strDelimiter;
            }
            this.getArrayProperty(lines[0]);
            for (var i = 1; i < linesLength; i++) {
                var obj = {}, currentline = lines[i].split(this.strDelimiter);
                for (var j = 0; j < this.arrayProperty.length; j++) {
                    obj[this.arrayProperty[j]] = currentline[j];
                    if (lang_2.isBlank(this.arrayPropertyValue[this.arrayProperty[j]])) {
                        this.arrayPropertyValue[this.arrayProperty[j]] = new Array();
                        this.arrayPropertyValue[this.arrayProperty[j]].push(currentline[j]);
                    }
                    else {
                        if (this.arrayPropertyValue[this.arrayProperty[j]].indexOf(currentline[j]) === -1) {
                            this.arrayPropertyValue[this.arrayProperty[j]].push(currentline[j]);
                        }
                    }
                }
                this.arrayObject.push(obj);
            }
            this.jsonData = JSON.stringify(this.arrayObject);
            return this.jsonData;
        };
        Convert.prototype.getData = function () {
            return this.arrayObject;
        };
        Convert.prototype.getJson = function () {
            return this.jsonData;
        };
        Convert.prototype.getProperty = function () {
            return this.arrayProperty;
        };
        Convert.prototype.getAllPropertyValue = function () {
            return this.arrayPropertyValue;
        };
        Convert.prototype.getAllPropertyValueByName = function (name) {
            return this.getAllPropertyValue()[name];
        };
        Convert.prototype.getArrayProperty = function (lineProperty) {
            var arrayProperty = [];
            arrayProperty = lineProperty.split(this.strDelimiter);
            if (arrayProperty[arrayProperty.length - 1] === '') {
                arrayProperty.pop();
            }
            return this.arrayProperty = arrayProperty;
        };
        Convert.isCreating = false;
        Convert = __decorate([
            core_3.Injectable(), 
            __metadata('design:paramtypes', [])
        ], Convert);
        return Convert;
    }());
    exports.Convert = Convert;
});
define("common/services/atexo.service", ["require", "exports", "common/services/atexo/atexo-util.service", "common/services/atexo/atexo-progress.service", "common/services/atexo/atexo-convert.service"], function (require, exports, atexo_util_service_1, atexo_progress_service_1, atexo_convert_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    __export(atexo_util_service_1);
    __export(atexo_progress_service_1);
    __export(atexo_convert_service_1);
});
define("components/dashboard/providers/panel.provider", ["require", "exports", 'angular2/core', 'angular2/http', "common/services/atexo.service", "common/constants/atexo.constant"], function (require, exports, core_4, http_3, atexo_service_1, atexo_constant_2) {
    "use strict";
    var PanelProvider = (function () {
        function PanelProvider(http) {
            this.http = http;
        }
        PanelProvider.prototype.all = function (_parameter) {
            _parameter = (typeof _parameter !== 'undefined') ? _parameter : atexo_constant_2.AtexoRestConstant.request.panel.all.parameter;
            var options = new http_3.RequestOptions({
                method: atexo_constant_2.AtexoRestConstant.request.panel.all.method,
                url: atexo_service_1.Util.getInstance().Rest().setPath(atexo_constant_2.AtexoRestConstant.request.panel.all.url).build(),
                search: atexo_service_1.Util.getInstance().RequestOptions().setSearchParams(_parameter)
            });
            var req = new http_3.Request(options);
            return this.http.request(req);
        };
        PanelProvider = __decorate([
            core_4.Injectable(), 
            __metadata('design:paramtypes', [(typeof (_a = typeof http_3.Http !== 'undefined' && http_3.Http) === 'function' && _a) || Object])
        ], PanelProvider);
        return PanelProvider;
        var _a;
    }());
    exports.PanelProvider = PanelProvider;
});
define("common/pipe/atexo/atexo-class.pipe", ["require", "exports", 'angular2/core', 'angular2/src/facade/lang'], function (require, exports, core_5, lang_3) {
    "use strict";
    var ToClassPipe = (function () {
        function ToClassPipe() {
        }
        ToClassPipe.prototype.transform = function (value, args) {
            this.postClass = lang_3.isPresent(args[0]) ? args[0] : 'panel-body-type-';
            return this.postClass.concat(value.toLowerCase());
        };
        ToClassPipe = __decorate([
            core_5.Pipe({ name: 'toClass' }), 
            __metadata('design:paramtypes', [])
        ], ToClassPipe);
        return ToClassPipe;
    }());
    exports.ToClassPipe = ToClassPipe;
});
define("common/pipe/atexo/atexo-timestamp-to-date.pipe", ["require", "exports", 'angular2/core', 'angular2/src/facade/lang'], function (require, exports, core_6, lang_4) {
    "use strict";
    var ToDatePipe = (function () {
        function ToDatePipe() {
        }
        ToDatePipe.prototype.transform = function (value) {
            if (lang_4.isNumber(value)) {
                return new Date(value * 1000);
            }
            else {
                if (lang_4.isString(value)) {
                    return new Date(value);
                }
            }
        };
        ToDatePipe = __decorate([
            core_6.Pipe({ name: 'toDate' }), 
            __metadata('design:paramtypes', [])
        ], ToDatePipe);
        return ToDatePipe;
    }());
    exports.ToDatePipe = ToDatePipe;
});
define("common/pipe/atexo/atexo-trancate.pipe", ["require", "exports", 'angular2/core', 'angular2/src/facade/lang'], function (require, exports, core_7, lang_5) {
    "use strict";
    var TrancatePipe = (function () {
        function TrancatePipe() {
        }
        TrancatePipe.prototype.transform = function (value, args) {
            this.length = lang_5.isPresent(args[0]) ? args[0] : 100;
            this.placeholderEnd = (value.length < this.length) ? '' : lang_5.isPresent(args[1]) ? args[1] : ' ...';
            return value.substring(0, this.length).concat(this.placeholderEnd);
        };
        TrancatePipe = __decorate([
            core_7.Pipe({ name: 'trancate' }), 
            __metadata('design:paramtypes', [])
        ], TrancatePipe);
        return TrancatePipe;
    }());
    exports.TrancatePipe = TrancatePipe;
});
define("common/pipe/atexo.pipe", ["require", "exports", "common/pipe/atexo/atexo-class.pipe", "common/pipe/atexo/atexo-timestamp-to-date.pipe", "common/pipe/atexo/atexo-trancate.pipe"], function (require, exports, atexo_class_pipe_1, atexo_timestamp_to_date_pipe_1, atexo_trancate_pipe_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    __export(atexo_class_pipe_1);
    __export(atexo_timestamp_to_date_pipe_1);
    __export(atexo_trancate_pipe_1);
});
define("components/dashboard/components/alert/providers/alert.provider", ["require", "exports", 'angular2/core', 'angular2/http', "common/services/atexo.service", "common/constants/atexo.constant"], function (require, exports, core_8, http_4, atexo_service_2, atexo_constant_3) {
    "use strict";
    var AlertProvider = (function () {
        function AlertProvider(http) {
            this.http = http;
        }
        AlertProvider.prototype.all = function (_search, _header) {
            _search = (typeof _search !== 'undefined') ? _search : atexo_constant_3.AtexoRestConstant.request.alert.all.parameter;
            _header = (typeof _header !== 'undefined') ? _header : atexo_constant_3.AtexoRestConstant.request.alert.all.header;
            var options = new http_4.RequestOptions({
                method: atexo_constant_3.AtexoRestConstant.request.alert.all.method,
                headers: atexo_service_2.Util.getInstance().RequestHeader().setHeaderParams(_header),
                url: atexo_service_2.Util.getInstance().Rest().setPath(atexo_constant_3.AtexoRestConstant.request.alert.all.url).build(),
                search: atexo_service_2.Util.getInstance().RequestOptions().setSearchParams(_search)
            });
            var req = new http_4.Request(options);
            return this.http.request(req);
        };
        AlertProvider = __decorate([
            core_8.Injectable(), 
            __metadata('design:paramtypes', [(typeof (_a = typeof http_4.Http !== 'undefined' && http_4.Http) === 'function' && _a) || Object])
        ], AlertProvider);
        return AlertProvider;
        var _a;
    }());
    exports.AlertProvider = AlertProvider;
});
define("common/components/atexo-spinner.component", ["require", "exports", 'angular2/core'], function (require, exports, core_9) {
    "use strict";
    var AtexoSpinner = (function () {
        function AtexoSpinner() {
            return true;
        }
        AtexoSpinner = __decorate([
            core_9.Component({
                selector: 'atexo-spinner'
            }),
            core_9.View({
                template: "\n                <div class=\"atexo-spinner center\">\n                    <div class=\"rect1\"></div>\n                    <div class=\"rect2\"></div>\n                    <div class=\"rect3\"></div>\n                    <div class=\"rect4\"></div>\n                    <div class=\"rect5\"></div>\n                </div>\n            ",
                styles: ["\n            .atexo-spinner {\n              width: 25px;\n              height: 20px;\n              text-align: center;\n              font-size: 5px;\n              -moz-transition-duration: 1s;\n              -webkit-transition-duration: 1s;\n              -o-transition-duration: 1s;\n              transition-duration: 1s;\n            }\n\n            .atexo-spinner.center{\n               margin: 0 auto;\n            }\n\n            .hide-atexo-spinner .atexo-spinner,\n            .atexo-spinner:hover{\n                opacity: 0;\n            }\n\n            .atexo-spinner > div {\n              background-color: #BBDEFB;\n              height: 100%;\n              width: 3px;\n              display: inline-block;\n\n              -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n              animation: sk-stretchdelay 1.2s infinite ease-in-out;\n            }\n\n            .atexo-spinner .rect2 {\n              -webkit-animation-delay: -1.1s;\n              animation-delay: -1.1s;\n              background-color: #64B5F6;\n            }\n\n            .atexo-spinner .rect3 {\n              -webkit-animation-delay: -1.0s;\n              animation-delay: -1.0s;\n              background-color: #2196F3;\n            }\n\n            .atexo-spinner .rect4 {\n              -webkit-animation-delay: -0.9s;\n              animation-delay: -0.9s;\n              background-color: #1976D2;\n            }\n\n            .atexo-spinner .rect5 {\n              -webkit-animation-delay: -0.8s;\n              animation-delay: -0.8s;\n              background-color: #0D47A1;\n            }\n\n            @-webkit-keyframes sk-stretchdelay {\n              0%, 40%, 100% { -webkit-transform: scaleY(0.4) }\n              20% { -webkit-transform: scaleY(1.0) }\n            }\n\n            @keyframes sk-stretchdelay {\n              0%, 40%, 100% {\n                transform: scaleY(0.4);\n                -webkit-transform: scaleY(0.4);\n              }  20% {\n                transform: scaleY(1.0);\n                -webkit-transform: scaleY(1.0);\n              }\n            }\n    "]
            }), 
            __metadata('design:paramtypes', [])
        ], AtexoSpinner);
        return AtexoSpinner;
    }());
    exports.AtexoSpinner = AtexoSpinner;
});
define("components/dashboard/components/alert/alert.component", ["require", "exports", 'angular2/core', "common/pipe/atexo.pipe", "components/dashboard/components/alert/providers/alert.provider", "common/components/atexo-spinner.component"], function (require, exports, core_10, atexo_pipe_1, alert_provider_1, atexo_spinner_component_1) {
    "use strict";
    var Alert = (function () {
        function Alert(el, alertProvider) {
            this.el = el;
            this.items = [];
            this.limit = 3;
            this.el = el;
            this.offset = this.limit;
            this.alertProvider = alertProvider;
        }
        Alert.prototype.ngOnInit = function () {
            this.alertServiceAll();
            return true;
        };
        Alert.prototype.alertServiceAll = function () {
            var _this = this;
            this.alertProvider.all().subscribe(function (res) {
                if (res.status === 200) {
                    _this.items = res.json();
                }
            });
        };
        __decorate([
            core_10.Input(), 
            __metadata('design:type', Object)
        ], Alert.prototype, "panelBodyObj", void 0);
        Alert = __decorate([
            core_10.Component({
                selector: 'alert',
                providers: [alert_provider_1.AlertProvider]
            }),
            core_10.View({
                template: "\n            <div role=\"alert\" class=\"alert\" [ngClass]=\"item.custom_class\" *ngFor=\"#item of items; #i=index\">\n                <strong>{{item.title}}</strong>\n                <p>{{item.content}}</p>\n            </div>\n            ",
                pipes: [atexo_pipe_1.ToClassPipe, atexo_pipe_1.ToDatePipe, atexo_pipe_1.TrancatePipe],
                directives: [atexo_spinner_component_1.AtexoSpinner]
            }), 
            __metadata('design:paramtypes', [(typeof (_a = typeof core_10.ElementRef !== 'undefined' && core_10.ElementRef) === 'function' && _a) || Object, alert_provider_1.AlertProvider])
        ], Alert);
        return Alert;
        var _a;
    }());
    exports.Alert = Alert;
});
define("common/components/atexo-chart.component", ["require", "exports", 'angular2/core'], function (require, exports, core_11) {
    "use strict";
    var AtexoChart = (function () {
        function AtexoChart(element) {
            this.element = element;
            this._data = [];
            this._type = 'spline';
            this.chartClick = new core_11.EventEmitter();
            this.chartMouseOver = new core_11.EventEmitter();
            this.chartMouseOut = new core_11.EventEmitter();
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
            get: function () {
                return this._data;
            },
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
            get: function () {
                return this._type;
            },
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
            get: function () {
                return this._configOption;
            },
            set: function (value) {
                this._configOption = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AtexoChart.prototype, "configData", {
            get: function () {
                return this._configData;
            },
            set: function (value) {
                this._configData = value;
            },
            enumerable: true,
            configurable: true
        });
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
            core_11.Component({
                selector: 'chart',
                properties: [
                    'data',
                    'type',
                    'configOption',
                    'configData'
                ],
                events: ['chartClick', 'chartMouseOver', 'chartMouseOut']
            }),
            core_11.View({
                template: "<div class=\"chart-bindto-wrap atexo-chart-bindto-wrap\"></div>"
            }), 
            __metadata('design:paramtypes', [(typeof (_a = typeof core_11.ElementRef !== 'undefined' && core_11.ElementRef) === 'function' && _a) || Object])
        ], AtexoChart);
        return AtexoChart;
        var _a;
    }());
    exports.AtexoChart = AtexoChart;
});
define("components/dashboard/components/panel-body/providers/panel-body-list.provider", ["require", "exports", 'angular2/core', 'angular2/http'], function (require, exports, core_12, http_5) {
    "use strict";
    var PanelBodyListProvider = (function () {
        function PanelBodyListProvider(http) {
            this.http = http;
        }
        PanelBodyListProvider.prototype.all = function (url) {
            var options = new http_5.RequestOptions({
                method: http_5.RequestMethod.Get,
                url: url
            });
            var req = new http_5.Request(options);
            return this.http.request(req);
        };
        PanelBodyListProvider = __decorate([
            core_12.Injectable(), 
            __metadata('design:paramtypes', [(typeof (_a = typeof http_5.Http !== 'undefined' && http_5.Http) === 'function' && _a) || Object])
        ], PanelBodyListProvider);
        return PanelBodyListProvider;
        var _a;
    }());
    exports.PanelBodyListProvider = PanelBodyListProvider;
});
define("components/dashboard/components/panel-body/panel-body-list.component", ["require", "exports", 'angular2/core', "common/components/atexo-chart.component", "common/pipe/atexo.pipe", "components/dashboard/components/panel-body/providers/panel-body-list.provider"], function (require, exports, core_13, atexo_chart_component_1, atexo_pipe_2, panel_body_list_provider_1) {
    "use strict";
    var PanelBodyList = (function () {
        function PanelBodyList(panelBodyListProvider) {
            this.xhrStatusDisplaySpinner = true;
            this.xhrStatusDisplayResources = false;
            this.xhrStatusDisplayError = false;
            this.chartData = [[]];
            this.chartLabels = [];
            this.chartType = 'donut';
            this.chartConfigOption = {};
            this.displayType = 'Table';
            this.displayTypes = [
                {
                    active: true,
                    type: 'Tableau',
                    icons: 'fa fa-table'
                }, {
                    active: false,
                    type: 'Camembert',
                    icons: 'fa fa-pie-chart'
                }];
            this.items = [];
            this.panelBodyListProvider = panelBodyListProvider;
        }
        PanelBodyList.prototype.ngOnInit = function () {
            this.panelBodyListServiceAll(this.panelBodyObj.urlData);
            return true;
        };
        PanelBodyList.prototype.updateDisplayType = function (i) {
            this.displayType = this.displayTypes[i].type;
            for (var j = 0; j < this.displayTypes.length; j++) {
                this.displayTypes[j].active = false;
                if (j === i) {
                    this.displayTypes[j].active = true;
                }
            }
            return false;
        };
        PanelBodyList.prototype.chartClicked = function (e) {
            e.ngElement.getElementsByClassName('c3-chart-arcs-title').item(0).textContent = e.data.name + '  ' + (Math.round(e.data.ratio * 1000) / 10) + '%';
        };
        PanelBodyList.prototype.chartMouseOvered = function (e) {
            e.ngElement.getElementsByClassName('c3-chart-arcs-title').item(0).textContent = e.data.value + ' Consultations';
        };
        PanelBodyList.prototype.panelBodyListServiceAll = function (url) {
            var _this = this;
            this.panelBodyListProvider.all(url).subscribe(function (res) {
                if (res.status === 200) {
                    _this.items = res.json();
                    var i_1 = 0;
                    _this.items.forEach(function (obj) {
                        var arr = [];
                        arr.push(obj.status.replace('En cours - ', ''));
                        arr.push(obj.count);
                        _this.chartData.push(arr);
                        i_1++;
                    });
                }
            }, (function (err) {
                if (err.status === 404 || err.status === 401) {
                    _this.xhrStatusDisplayError = true;
                    _this.xhrStatusDisplaySpinner = false;
                    console.log(err);
                }
            }));
        };
        __decorate([
            core_13.Input(), 
            __metadata('design:type', Object)
        ], PanelBodyList.prototype, "panelBodyObj", void 0);
        PanelBodyList = __decorate([
            core_13.Component({
                selector: 'panel-body-list',
                providers: [panel_body_list_provider_1.PanelBodyListProvider]
            }),
            core_13.View({
                template: "\n            <div class=\"{{ panelBodyObj.type.category | toClass }}\">\n\n                <div class=\"clearfix sub-header\">\n                    <ul class=\"atexoui-list right horizontal\">\n                        <li *ngFor=\"#displayType of displayTypes; #i=index\"\n                            [ngClass]=\"{ available: displayTypes[i].active, disabled: !displayTypes[i].active }\">\n                            <a href=\"\"\n                               [ngClass]=\"{ available: displayTypes[i].active, disabled: !displayTypes[i].active }\"\n                               (click)=\"updateDisplayType(i)\"\n                               title=\"{{displayType.type}}\"\n                               name=\"{{displayType.type}}\">\n                                <span class=\"{{displayType.icons}}\"></span>\n\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n\n                <div class=\"display-table list-group\" role=\"list\" *ngIf=\"displayTypes[0].active\">\n                    <a class=\"list-group-item\" href=\"{{item.url}}\" role=\"listitem\"\n                       *ngFor=\"#item of items; #i=index\">\n                        {{item.status}}\n                        <span class=\"badge\" [ngClass]=\"{ 'badge-success': item.active }\">{{item.count}}</span>\n                    </a>\n                </div>\n\n                <div class=\"display-chart chart chart-pie\" *ngIf=\"displayTypes[1].active\">\n                    <chart\n                        class=\"c3-responsive\"\n                        [data]=\"chartData\"\n                        [type]=\"chartType\"\n                        [configOption]=\"chartConfigOption\"\n                        (chartClick)=\"chartClicked($event)\"\n                        (chartMouseOver)=\"chartMouseOvered($event)\"></chart>\n                </div>\n\n            </div>\n            ",
                pipes: [atexo_pipe_2.ToClassPipe],
                directives: [atexo_chart_component_1.AtexoChart]
            }), 
            __metadata('design:paramtypes', [panel_body_list_provider_1.PanelBodyListProvider])
        ], PanelBodyList);
        return PanelBodyList;
    }());
    exports.PanelBodyList = PanelBodyList;
});
define("components/dashboard/components/panel-body/providers/panel-body-chart.provider", ["require", "exports", 'angular2/core', 'angular2/http', "common/services/atexo.service", "common/constants/atexo.constant", 'angular2/src/facade/lang'], function (require, exports, core_14, http_6, atexo_service_3, atexo_constant_4, lang_6) {
    "use strict";
    var PanelBodyChartProvider = (function () {
        function PanelBodyChartProvider(http) {
            this.http = http;
        }
        PanelBodyChartProvider.prototype.get = function (panelBodyObj) {
            var _search = (!lang_6.isBlank(panelBodyObj['search'])) ? panelBodyObj['search'] : atexo_constant_4.AtexoRestConstant.request.panel.all.parameter;
            var _header = (!lang_6.isBlank(panelBodyObj['header'])) ? panelBodyObj['header'] : atexo_constant_4.AtexoRestConstant.request.panel.all.header;
            var options = new http_6.RequestOptions({
                method: atexo_constant_4.AtexoRestConstant.request.alert.all.method,
                headers: atexo_service_3.Util.getInstance().RequestHeader().setHeaderParams(_header),
                url: panelBodyObj['urlData'],
                search: atexo_service_3.Util.getInstance().RequestOptions().setSearchParams(_search)
            });
            var req = new http_6.Request(options);
            return this.http.request(req);
        };
        PanelBodyChartProvider = __decorate([
            core_14.Injectable(), 
            __metadata('design:paramtypes', [(typeof (_a = typeof http_6.Http !== 'undefined' && http_6.Http) === 'function' && _a) || Object])
        ], PanelBodyChartProvider);
        return PanelBodyChartProvider;
        var _a;
    }());
    exports.PanelBodyChartProvider = PanelBodyChartProvider;
});
define("components/dashboard/components/panel-body/panel-body-chart.component", ["require", "exports", 'angular2/core', 'angular2/src/facade/lang', "common/pipe/atexo.pipe", "common/services/atexo.service", "common/components/atexo-chart.component", "components/dashboard/components/panel-body/providers/panel-body-chart.provider", "common/components/atexo-spinner.component"], function (require, exports, core_15, lang_7, atexo_pipe_3, atexo_service_4, atexo_chart_component_2, panel_body_chart_provider_1, atexo_spinner_component_2) {
    "use strict";
    var PanelBodyChart = (function () {
        function PanelBodyChart(panelBodyChartProvider) {
            this.xhrStatusDisplaySpinner = true;
            this.xhrStatusDisplayResources = false;
            this.xhrStatusDisplayError = false;
            this.convert = new atexo_service_4.Convert();
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
            this.panelBodyChartProvider.get(this.panelBodyObj).subscribe(function (res) {
                _this.xhrStatusDisplaySpinner = false;
                if (res.status === 200) {
                    _this.xhrResponse = res;
                    _this.xhrStatusDisplayResources = true;
                    _this.getChartArrayData();
                    _this.chartData = _this.chartArrayData;
                }
            }, (function (err) {
                if (err.status === 404 || err.status === 401) {
                    _this.xhrStatusDisplayError = true;
                    _this.xhrStatusDisplaySpinner = false;
                    console.log(err);
                }
            }));
        };
        PanelBodyChart.prototype.getChartArrayObject = function () {
            if (this.panelBodyObj.dataType === 'JSON') {
                var _chartArrayObject = this.xhrResponse.json();
                this.chartArrayObject = _chartArrayObject;
            }
            else {
                this.convert.cvsToJson(this.xhrResponse.text());
                this.chartArrayObject = this.convert.getData();
            }
            return this.chartArrayObject;
        };
        PanelBodyChart.prototype.getChartArrayData = function () {
            var _filterName = this.panelBodyObj.chart.axes.filter.name, _filterLabels = this.panelBodyObj.chart.axes.filter.labels, _filterDefault = this.panelBodyObj.chart.axes.filter.default;
            this.getChartArrayObject();
            this.filterYear = atexo_service_4.Util.getInstance().filterYear();
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
            this.chartArrayData = this.getChartArray(atexo_service_4.Util.getInstance().Json().getByProperty(this.chartArrayObject, property, value));
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
                        = atexo_service_4.Util.getInstance().newArray(_eastingArray.length + 1);
                    _chartArrayData[_this.arrayOrdered.indexOf(obj[_orderedName])][0]
                        = obj[_orderedName];
                }
                _chartArrayData[_this.arrayOrdered.indexOf(obj[_orderedName])][_eastingArray.indexOf(obj[_eastingName]) + 1]
                    += Number(obj[_abscissaName]);
            });
            if (lang_7.isPresent(this.panelBodyObj.chart.config.data.x)) {
                _chartArrayData.push(new Array(this.panelBodyObj.chart.config.data.x).concat(_eastingLabels));
            }
            return _chartArrayData;
        };
        PanelBodyChart.prototype.panelBodyChartServiceGetOptions = function () {
            var _this = this;
            if (lang_7.isPresent(this.panelBodyObj.chart.type) && this.panelBodyObj.chart.type !== '') {
                this.chartType = this.panelBodyObj.chart.type;
            }
            if (lang_7.isPresent(this.panelBodyObj.chart.types) && !lang_7.isBlank(this.panelBodyObj.chart.types)) {
                this.chartTypes = this.panelBodyObj.chart.types;
                var i = atexo_service_4.Util.getInstance().arrayObjectFindIndex(this.chartTypes, function (e) {
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
            core_15.Input(), 
            __metadata('design:type', Object)
        ], PanelBodyChart.prototype, "panelBodyObj", void 0);
        PanelBodyChart = __decorate([
            core_15.Component({
                selector: 'panel-body-chart',
                providers: [panel_body_chart_provider_1.PanelBodyChartProvider]
            }),
            core_15.View({
                template: "\n            <div class=\"clearfix sub-header\" *ngIf=\"xhrStatusDisplayResources\">\n                <div class=\"pull-left\">\n                    <form class=\"sub-header-form-horizontal\" action=\"\">\n                        <div *ngIf=\"panelBodyObj.chart.axes.filter.active\" class=\"filter-item\">\n                            <label class=\"control-label\" for=\"\">Ann\u00E9e</label>\n                            <select\n                                [(ngModel)]=\"currentYear\"\n                                class=\"input-select\"\n                                (change)=\"panelBodyChartUpdateFilerYear($event, $event.target.value)\">\n                                <option *ngFor=\"#year of filterYear\" [value]=\"year\" (click)=\"preventDefault($event)\">{{year}}</option>\n                            </select>\n                        </div>\n                    </form>\n                </div>\n                <ul class=\"atexoui-list right horizontal\">\n                    <li *ngFor=\"#type of chartTypes; #i=index\"\n                        [ngClass]=\"{ available: chartTypes[i].active, disabled: !chartTypes[i].active }\">\n                        <a\n                           href=\"\"\n                           [ngClass]=\"{ available: chartTypes[i].active, disabled: !chartTypes[i].active }\"\n                           (click)=\"panelBodyChartUpdateType(i);\"\n                           title=\"{{type.name}}\"\n                           name=\"{{type.name}}\">\n                            <span class=\"{{type.icons}}\"></span>\n\n                        </a>\n                    </li>\n                </ul>\n            </div>\n            <atexo-spinner *ngIf=\"xhrStatusDisplaySpinner\"></atexo-spinner>\n\n            <div class=\"\">\n                <chart\n                    *ngIf=\"xhrStatusDisplayResources\"\n                    class=\"c3-responsive\"\n                    [data]=\"chartData\"\n                    [type]=\"chartType\"\n                    [configOption]=\"chartConfigOption\"\n                    [configData]=\"chartConfigData\"\n                    (chartClick)=\"chartClicked($event)\"\n                    (chartMouseOver)=\"chartMouseOvered($event)\"\n                    (chartMouseOut)=\"chartMouseOuted($event)\">\n                </chart>\n            </div>\n\n            <div class=\"error\" *ngIf=\"xhrStatusDisplayError\">\n                <p class=\"text-danger text-center\"><strong>Donn\u00E9es temporairement indisponible</strong></p>\n            </div>\n            <div class=\"clearfix\">\n                <div class=\"signature-atexo pull-right\"></div>\n            </div>\n\n            ",
                pipes: [atexo_pipe_3.ToClassPipe],
                directives: [atexo_chart_component_2.AtexoChart, atexo_spinner_component_2.AtexoSpinner]
            }), 
            __metadata('design:paramtypes', [panel_body_chart_provider_1.PanelBodyChartProvider])
        ], PanelBodyChart);
        return PanelBodyChart;
    }());
    exports.PanelBodyChart = PanelBodyChart;
});
define("components/dashboard/components/panel-body/providers/panel-body-search.provider", ["require", "exports", 'angular2/core', 'angular2/http', "common/services/atexo.service"], function (require, exports, core_16, http_7, atexo_service_5) {
    "use strict";
    var PanelBodySearchProvider = (function () {
        function PanelBodySearchProvider(http) {
            this.http = http;
        }
        PanelBodySearchProvider.prototype.all = function (_url, _search) {
            var options = new http_7.RequestOptions({
                method: http_7.RequestMethod.Get,
                url: _url,
                search: atexo_service_5.Util.getInstance().URLParams().parse(_search)
            });
            var req = new http_7.Request(options);
            return this.http.request(req);
        };
        PanelBodySearchProvider = __decorate([
            core_16.Injectable(), 
            __metadata('design:paramtypes', [(typeof (_a = typeof http_7.Http !== 'undefined' && http_7.Http) === 'function' && _a) || Object])
        ], PanelBodySearchProvider);
        return PanelBodySearchProvider;
        var _a;
    }());
    exports.PanelBodySearchProvider = PanelBodySearchProvider;
});
define("components/dashboard/components/panel-body/panel-body-search.component", ["require", "exports", 'angular2/core', 'angular2/src/facade/lang', "common/pipe/atexo.pipe", "components/dashboard/components/panel-body/providers/panel-body-search.provider", "common/components/atexo-spinner.component"], function (require, exports, core_17, lang_8, atexo_pipe_4, panel_body_search_provider_1, atexo_spinner_component_3) {
    "use strict";
    var PanelBodySearch = (function () {
        function PanelBodySearch(panelBodySearchProvider) {
            this.items = [];
            this.milliseconds = 500;
            this.panelBodySearchProvider = panelBodySearchProvider;
            this.q = '';
            this.display = false;
            this.displayQuickSearchSpinner = false;
        }
        PanelBodySearch.prototype.ngOnInit = function () {
            return true;
        };
        PanelBodySearch.prototype.quickSearch = function () {
            var _this = this;
            clearTimeout(this.timeOut);
            this.timeOut = setTimeout(function () {
                _this.panelBodySearchServiceAll();
            }, this.milliseconds);
        };
        PanelBodySearch.prototype.quickSearchClear = function () {
            this.q = '';
            this.items = [];
            return false;
        };
        PanelBodySearch.prototype.quickSearchDisplay = function (display) {
            var _this = this;
            var _timeOut, _milliseconds = 100;
            clearTimeout(_timeOut);
            _timeOut = setTimeout(function () {
                if (lang_8.isPresent(display)) {
                    _this.display = display;
                    _this.focusClass = display;
                }
                else {
                    _this.display = (_this.items.length > 0) ? true : false;
                }
            }, _milliseconds);
        };
        PanelBodySearch.prototype.panelBodySearchServiceAll = function () {
            var _this = this;
            if (this.q) {
                var arraySearch = {
                    motClef: this.q
                };
                this.displayQuickSearchSpinner = true;
                this.panelBodySearchProvider.all(this.panelBodyObj.urlData, arraySearch).subscribe(function (res) {
                    if (res.status === 200) {
                        _this.items = res.json();
                        _this.quickSearchDisplay();
                        _this.displayQuickSearchSpinner = false;
                    }
                });
            }
            else {
                this.items = [];
                this.quickSearchDisplay();
            }
            return true;
        };
        __decorate([
            core_17.Input(), 
            __metadata('design:type', Object)
        ], PanelBodySearch.prototype, "panelBodyObj", void 0);
        PanelBodySearch = __decorate([
            core_17.Component({
                selector: 'panel-body-search',
                providers: [panel_body_search_provider_1.PanelBodySearchProvider]
            }),
            core_17.View({
                template: "\n            <div class=\"{{ panelBodyObj.type.category | toClass}}\">\n                <form role=\"form\" class=\"form-horizontal\">\n                    <div class=\"form-group form-group-sm\">\n                        <div class=\"col-sm-12\">\n                            <div class=\"input-group quick-search\" [ngClass]=\"{focus: focusClass}\">\n                                <input type=\"text\"\n                                       placeholder=\"Mots cl\u00E9s, intitul\u00E9 ou objet\"\n                                       class=\"form-control input-sm quick-search-input\"\n                                       autocomplete=\"off\"\n                                       id=\"quickSearch\"\n                                       [(ngModel)]=\"q\"\n                                       (keyup)=\"quickSearch()\"\n                                       (keyup.escape)=\"quickSearchClear()\"\n                                       (blur)=\"quickSearchDisplay(false)\"\n                                       (focus)=\"quickSearchDisplay(true)\"\n                                       title=\"Recherche rapide par mots cl\u00E9s, intitul\u00E9 ou objet\"\n                                >\n\n                                <span class=\"input-group-btn\">\n                                    <button type=\"button\"\n                                            class=\"btn btn-primary btn-sm quick-search-btn\"\n                                            id=\"quickSearchBtn\">\n                                        <i class=\"fa fa-search fa-flip-horizontal\"></i>\n                                        <span class=\"sr-only\">Lancer la recherche</span>\n                                    </button>\n                                </span>\n                                <a href=\"\"\n                                   title=\"Annuler\"\n                                   name=\"Annuler\"\n                                   class=\"fa fa-close quick-search-clear\"\n                                   *ngIf=\"items.length\"\n                                   (click)=\"quickSearchClear()\"></a>\n\n                                   <atexo-spinner class=\"quick-search-spinner\" *ngIf=\"displayQuickSearchSpinner\"></atexo-spinner>\n\n                                <div class=\"quick-search-result\" *ngIf=\"display\">\n                                    <div class=\"list-group\">\n                                        <a *ngFor=\"#item of items; #i=index\"\n                                           href=\"{{item.url}}\"\n                                           class=\"list-group-item\">\n                                           <span [innerHtml]=\"item.reference\"></span> - <span [innerHtml]=\"item.title\"></span>\n                                        </a>\n                                    </div>\n                                </div>\n                            </div>\n\n                        </div>\n                    </div>\n                </form>\n            </div>\n            ",
                pipes: [atexo_pipe_4.ToClassPipe],
                directives: [atexo_spinner_component_3.AtexoSpinner]
            }), 
            __metadata('design:paramtypes', [panel_body_search_provider_1.PanelBodySearchProvider])
        ], PanelBodySearch);
        return PanelBodySearch;
    }());
    exports.PanelBodySearch = PanelBodySearch;
});
define("components/dashboard/components/panel-body/providers/panel-body-editor.provider", ["require", "exports", 'angular2/core', 'angular2/http'], function (require, exports, core_18, http_8) {
    "use strict";
    var PanelBodyEditorProvider = (function () {
        function PanelBodyEditorProvider(http) {
            this.http = http;
        }
        PanelBodyEditorProvider.prototype.get = function (url) {
            var options = new http_8.RequestOptions({
                method: http_8.RequestMethod.Get,
                url: url
            });
            var req = new http_8.Request(options);
            return this.http.request(req);
        };
        PanelBodyEditorProvider = __decorate([
            core_18.Injectable(), 
            __metadata('design:paramtypes', [(typeof (_a = typeof http_8.Http !== 'undefined' && http_8.Http) === 'function' && _a) || Object])
        ], PanelBodyEditorProvider);
        return PanelBodyEditorProvider;
        var _a;
    }());
    exports.PanelBodyEditorProvider = PanelBodyEditorProvider;
});
define("components/dashboard/components/panel-body/entitys/note.entity", ["require", "exports"], function (require, exports) {
    "use strict";
    var Note = (function () {
        function Note(obj, draft) {
            this.completed = false;
            this.editing = false;
            this.deleted = false;
            this.draft = draft;
            this.data = obj;
        }
        Object.defineProperty(Note.prototype, "data", {
            get: function () {
                return this._data;
            },
            set: function (value) {
                this._data = value;
            },
            enumerable: true,
            configurable: true
        });
        return Note;
    }());
    exports.Note = Note;
});
define("components/dashboard/components/panel-body/panel-body-editor.component", ["require", "exports", 'angular2/core', "common/pipe/atexo.pipe", "components/dashboard/components/panel-body/providers/panel-body-editor.provider", "components/dashboard/components/panel-body/entitys/note.entity"], function (require, exports, core_19, atexo_pipe_5, panel_body_editor_provider_1, note_entity_1) {
    "use strict";
    var PanelBodyEditor = (function () {
        function PanelBodyEditor(panelBodyEditorProvider) {
            this.editBoolean = false;
            this._milliseconds = 100;
            this.panelBodyEditorProvider = panelBodyEditorProvider;
            this.notes = [];
        }
        PanelBodyEditor.prototype.ngOnInit = function () {
            this.panelBodyEditorServiceGet(this.panelBodyObj.urlData);
            return true;
        };
        PanelBodyEditor.prototype.panelBodyEditorServiceGet = function (url) {
            var _this = this;
            this.panelBodyEditorProvider.get(url).subscribe(function (res) {
                if (res.status === 200) {
                    res.json().forEach(function (obj) {
                        _this.notes.push(new note_entity_1.Note(obj, obj.content));
                    });
                }
            });
        };
        PanelBodyEditor.prototype.ondblclick = function (note) {
            this.edit(note);
            return false;
        };
        PanelBodyEditor.prototype.cancel = function (note) {
            note.editing = false;
            return false;
        };
        PanelBodyEditor.prototype.edit = function (note) {
            note.editing = true;
            return false;
        };
        PanelBodyEditor.prototype.save = function (note) {
            note.data['content'] = note.draft;
            note.editing = false;
            return false;
        };
        PanelBodyEditor.prototype.remove = function (note) {
            return false;
        };
        PanelBodyEditor.prototype.add = function () {
            return false;
        };
        __decorate([
            core_19.Input(), 
            __metadata('design:type', Object)
        ], PanelBodyEditor.prototype, "panelBodyObj", void 0);
        PanelBodyEditor = __decorate([
            core_19.Component({
                selector: 'panel-body-editor',
                providers: [panel_body_editor_provider_1.PanelBodyEditorProvider]
            }),
            core_19.View({
                template: "\n            <div class=\"panel-body-editor-wrap {{ panelBodyObj.type.category | toClass }}\">\n\n                <ul class=\"list-unstyled notes note-list\">\n                    <li *ngFor=\"#note of notes; #i=index\">\n\n                        <article class=\"note note-item\">\n\n                            <ul class=\"overlay-options options top\">\n\n                                <li *ngIf=\"note.editing\">\n                                    <a href=\"#\"\n                                       title=\"Enregistrer\"\n                                       class=\"btn option option-item\"\n                                       (click)=\"save(note)\">\n                                        <i class=\"fa fa-check\"></i>\n                                    </a>\n                                </li>\n                                <li *ngIf=\"note.editing\">\n                                    <a href=\"#\"\n                                       title=\"Annuler\"\n                                       class=\"btn option option-item\"\n                                       (click)=\"cancel(note)\">\n                                        <i class=\"fa fa-close\"></i>\n                                    </a>\n                                </li>\n\n                                <li *ngIf=\"!note.editing\">\n                                    <a href=\"#\"\n                                       title=\"Modifier\"\n                                       class=\"btn option option-item\"\n                                       (click)=\"edit(note)\">\n                                        <i class=\"fa fa-pencil\"></i>\n                                    </a>\n                                </li>\n                            </ul>\n\n                            <div class=\"editor-view\" *ngIf=\"!note.editing\" (click)=\"ondblclick(note)\">\n                                {{ note.data.content }}\n                            </div>\n\n                            <div class=\"editor-textarea\" *ngIf=\"note.editing\">\n                                <textarea class=\"textarea\"\n                                          [(ngModel)]=\"note.draft\"\n                                          (keyup.escape)=\"cancel(note)\"\n                                          (keyup.enter)=\"save(note)\"></textarea>\n                            </div>\n\n                        </article>\n\n                    </li>\n                </ul>\n\n                <a href=\"\" class=\"atexoui-link center add\" (click)=\"add()\" *ngIf=\"false\">Ajouter une note</a>\n\n            </div>\n            ",
                pipes: [atexo_pipe_5.ToClassPipe]
            }), 
            __metadata('design:paramtypes', [panel_body_editor_provider_1.PanelBodyEditorProvider])
        ], PanelBodyEditor);
        return PanelBodyEditor;
    }());
    exports.PanelBodyEditor = PanelBodyEditor;
});
define("components/dashboard/components/panel-body/providers/panel-body-article.provider", ["require", "exports", 'angular2/core', 'angular2/http'], function (require, exports, core_20, http_9) {
    "use strict";
    var PanelBodyArticleProvider = (function () {
        function PanelBodyArticleProvider(http) {
            this.http = http;
        }
        PanelBodyArticleProvider.prototype.all = function (url) {
            var options = new http_9.RequestOptions({
                method: http_9.RequestMethod.Get,
                url: url
            });
            var req = new http_9.Request(options);
            return this.http.request(req);
        };
        PanelBodyArticleProvider = __decorate([
            core_20.Injectable(), 
            __metadata('design:paramtypes', [(typeof (_a = typeof http_9.Http !== 'undefined' && http_9.Http) === 'function' && _a) || Object])
        ], PanelBodyArticleProvider);
        return PanelBodyArticleProvider;
        var _a;
    }());
    exports.PanelBodyArticleProvider = PanelBodyArticleProvider;
});
define("components/dashboard/components/panel-body/panel-body-article.component", ["require", "exports", 'angular2/core', "common/pipe/atexo.pipe", "components/dashboard/components/panel-body/providers/panel-body-article.provider", "common/services/atexo.service", "common/components/atexo-spinner.component"], function (require, exports, core_21, atexo_pipe_6, panel_body_article_provider_1, atexo_service_6, atexo_spinner_component_4) {
    "use strict";
    var PanelBodyArticle = (function () {
        function PanelBodyArticle(el, panelBodyArticleProvider) {
            this.el = el;
            this.articles = [];
            this.limit = 3;
            this.el = el;
            this.offset = this.limit;
            this.panelBodyArticleProvider = panelBodyArticleProvider;
        }
        PanelBodyArticle.prototype.ngOnInit = function () {
            this.panelBodyArticleServiceAll(this.panelBodyObj.urlData);
            return true;
        };
        PanelBodyArticle.prototype.panelBodyArticleServiceAll = function (url) {
            var _this = this;
            this.panelBodyArticleProvider.all(url).subscribe(function (res) {
                if (res.status === 200) {
                    _this.articles = res.json();
                }
            });
        };
        PanelBodyArticle.prototype.more = function () {
            this.offset += this.limit;
            return false;
        };
        PanelBodyArticle.prototype.moreArticles = function () {
            this.offset = this.articles.length;
            return false;
        };
        PanelBodyArticle.prototype.lessArticles = function () {
            this.offset = this.limit;
            return false;
        };
        PanelBodyArticle.prototype.selectArticle = function (id) {
            this.articleSelected = atexo_service_6.Util.getInstance().Grep(this.articles, function (item) {
                return (item.id === id);
            });
            this.articleSelected = this.articleSelected[0];
            return false;
        };
        PanelBodyArticle.prototype.closeSelectArticle = function () {
            this.articleSelected = null;
            return false;
        };
        PanelBodyArticle.prototype.preventDefault = function () {
            return false;
        };
        __decorate([
            core_21.Input(), 
            __metadata('design:type', Object)
        ], PanelBodyArticle.prototype, "panelBodyObj", void 0);
        PanelBodyArticle = __decorate([
            core_21.Component({
                selector: 'panel-body-article',
                providers: [panel_body_article_provider_1.PanelBodyArticleProvider]
            }),
            core_21.View({
                template: "\n            <div class=\"panel-body-article-wrap {{ panelBodyObj.type.category | toClass}}\">\n\n                <ul class=\"list-unstyled articles article-list\">\n                    <li *ngFor=\"#article of articles; #i=index\">\n\n                        <article class=\"article article-item\"\n                                 *ngIf=\"i < offset\">\n                            <header class=\"header\">\n\n                                <h4 class=\"title\">\n                                    <a href=\"\"\n                                        (click)=\"selectArticle(article.id)\"\n                                       title=\"{{article.title}}\">&nbsp;{{article.title}}</a>\n                                    <span class=\"date\">{{article.date | toDate | date}}</span>\n                                </h4>\n\n                            </header>\n\n                            <div class=\"body\">\n\n                                <div class=\"content\">\n                                    <p>{{article.content_text | trancate:120}}</p>\n                                </div>\n\n                                <footer class=\"footer\">\n                                    <div class=\"links\">\n                                        <a href=\"\"\n                                           (click)=\"selectArticle(article.id)\"\n                                           title=\"lire la suite\">lire la suite</a>\n                                    </div>\n                                </footer>\n\n                            </div>\n\n\n                        </article>\n\n                    </li>\n                    <li *ngIf=\" offset < articles.length \">\n                        <a href=\"\" class=\"atexoui-link center more\"\n                           (click)=\"moreArticles()\">Plus d'actualit\u00E9s</a>\n                    </li>\n                    <li *ngIf=\" offset === articles.length \">\n                        <a href=\"\" class=\"atexoui-link center less\"\n                           (click)=\"lessArticles()\">Moins d'actualit\u00E9s</a>\n                    </li>\n                </ul>\n                <div class=\"article-full-screen\" *ngIf=\"articleSelected\">\n                    <article class=\"article article-selected\">\n                        <header class=\"header\">\n\n                            <div class=\"options row\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"pull-right\">\n                                        <a href=\"\"\n                                           title=\"Close Article\"\n                                           data-widgster=\"close\" (click)=\"closeSelectArticle()\"\n                                        class=\"btn btn-sm\">\n                                            <i class=\"fa fa-chevron-left\"></i> Retour\n                                        </a>\n                                    </div>\n                                    <div class=\"pull-left\">\n                                        <h4 class=\"title\">\n                                            {{articleSelected.title}}\n                                        </h4>\n                                        <span class=\"date\">{{articleSelected.date | toDate | date}}</span>\n                                    </div>\n\n                                </div>\n                            </div>\n\n                        </header>\n\n                        <div class=\"body\">\n\n                            <div class=\"content\">\n                                <div [innerHTML]=\"articleSelected.content\"></div>\n                            </div>\n\n                            <footer class=\"footer\" *ngIf=\"\">\n                                <div class=\"links\"\n                                     *ngIf=\"articleSelected.links.length\">\n                                    <a href=\"{{link.url}}\"\n                                       target=\"{{link.target}}\"\n                                       title=\"{{link.title}}\"\n                                       *ngFor=\"#link of articleSelected.links; #i=index\">{{link.title}}</a>\n                                </div>\n                            </footer>\n\n                        </div>\n\n                    </article>\n                </div>\n            </div>\n    ",
                pipes: [atexo_pipe_6.ToClassPipe, atexo_pipe_6.ToDatePipe, atexo_pipe_6.TrancatePipe],
                directives: [atexo_spinner_component_4.AtexoSpinner]
            }), 
            __metadata('design:paramtypes', [(typeof (_a = typeof core_21.ElementRef !== 'undefined' && core_21.ElementRef) === 'function' && _a) || Object, panel_body_article_provider_1.PanelBodyArticleProvider])
        ], PanelBodyArticle);
        return PanelBodyArticle;
        var _a;
    }());
    exports.PanelBodyArticle = PanelBodyArticle;
});
define("components/dashboard/components/panel-body/panel-body-map.component", ["require", "exports", 'angular2/core', "common/pipe/atexo.pipe", "common/components/atexo-spinner.component"], function (require, exports, core_22, atexo_pipe_7, atexo_spinner_component_5) {
    "use strict";
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
            core_22.Input(), 
            __metadata('design:type', Object)
        ], PanelBodyMap.prototype, "panelBodyObj", void 0);
        PanelBodyMap = __decorate([
            core_22.Component({
                selector: 'panel-body-map',
                providers: []
            }),
            core_22.View({
                template: "\n            <div class=\"clearfix sub-header\">\n                <atexo-spinner *ngIf=\"xhrStatusDisplaySpinner\"></atexo-spinner>\n                <div [ngClass]=\"{active: xhrStatusDisplayResources}\" id=\"mapd3\" class=\"mapd3\"></div>\n            </div>\n\n            ",
                pipes: [atexo_pipe_7.ToClassPipe],
                directives: [atexo_spinner_component_5.AtexoSpinner]
            }), 
            __metadata('design:paramtypes', [])
        ], PanelBodyMap);
        return PanelBodyMap;
    }());
    exports.PanelBodyMap = PanelBodyMap;
});
define("components/dashboard/components/panel-body/panel-body.component", ["require", "exports", 'angular2/core', "common/pipe/atexo.pipe", "components/dashboard/components/panel-body/panel-body-list.component", "components/dashboard/components/panel-body/panel-body-chart.component", "components/dashboard/components/panel-body/panel-body-search.component", "components/dashboard/components/panel-body/panel-body-editor.component", "components/dashboard/components/panel-body/panel-body-article.component", "components/dashboard/components/panel-body/panel-body-map.component"], function (require, exports, core_23, atexo_pipe_8, panel_body_list_component_1, panel_body_chart_component_1, panel_body_search_component_1, panel_body_editor_component_1, panel_body_article_component_1, panel_body_map_component_1) {
    "use strict";
    var PanelBody = (function () {
        function PanelBody(el) {
            this.el = el;
            this.el = el;
        }
        PanelBody.prototype.ngOnInit = function () {
            return true;
        };
        __decorate([
            core_23.Input(), 
            __metadata('design:type', Object)
        ], PanelBody.prototype, "panelBodyObj", void 0);
        PanelBody = __decorate([
            core_23.Component({
                selector: 'panel-body'
            }),
            core_23.View({
                template: "\n            <panel-body-map  *ngIf=\"panelBodyObj.type.category === 'MAP'\" [panelBodyObj]=\"panelBodyObj\"></panel-body-map>\n            <panel-body-list  *ngIf=\"panelBodyObj.type.category === 'LIST'\" [panelBodyObj]=\"panelBodyObj\"></panel-body-list>\n            <panel-body-chart  *ngIf=\"panelBodyObj.type.category === 'CHART'\" [panelBodyObj]=\"panelBodyObj\"></panel-body-chart>\n            <panel-body-search  *ngIf=\"panelBodyObj.type.category === 'SEARCH'\" [panelBodyObj]=\"panelBodyObj\"></panel-body-search>\n            <panel-body-editor  *ngIf=\"panelBodyObj.type.category === 'EDITOR'\" [panelBodyObj]=\"panelBodyObj\"></panel-body-editor>\n            <panel-body-article  *ngIf=\"panelBodyObj.type.category === 'ARTICLE'\" [panelBodyObj]=\"panelBodyObj\"></panel-body-article>\n            ",
                directives: [panel_body_list_component_1.PanelBodyList, panel_body_chart_component_1.PanelBodyChart, panel_body_search_component_1.PanelBodySearch, panel_body_article_component_1.PanelBodyArticle, panel_body_editor_component_1.PanelBodyEditor, panel_body_map_component_1.PanelBodyMap],
                pipes: [atexo_pipe_8.ToClassPipe]
            }), 
            __metadata('design:paramtypes', [(typeof (_a = typeof core_23.ElementRef !== 'undefined' && core_23.ElementRef) === 'function' && _a) || Object])
        ], PanelBody);
        return PanelBody;
        var _a;
    }());
    exports.PanelBody = PanelBody;
});
define("components/dashboard/components/panel/panel.component", ["require", "exports", 'angular2/core', "components/dashboard/components/panel-body/panel-body.component", "common/pipe/atexo.pipe"], function (require, exports, core_24, panel_body_component_1, atexo_pipe_9) {
    "use strict";
    var Panel = (function () {
        function Panel(el) {
            this.el = el;
            this.collapseClass = false;
            this.closeClass = false;
            this.el = el;
        }
        Panel.prototype.ngOnInit = function () {
            return true;
        };
        Panel.prototype.collapse = function () {
            this.collapseClass = !this.collapseClass;
            return false;
        };
        Panel.prototype.close = function () {
            this.closeClass = !this.closeClass;
            return false;
        };
        __decorate([
            core_24.Input(), 
            __metadata('design:type', Object)
        ], Panel.prototype, "panelObj", void 0);
        Panel = __decorate([
            core_24.Component({
                selector: 'div.panel-component'
            }),
            core_24.View({
                template: "\n            <div class=\"panel panel-default bloc-toggle\"\n                 [ngClass]=\"{close: closeClass}\"\n                 *ngIf=\"panelObj.active\">\n                <!-- Header -->\n                <header class=\"header panel-heading ui-sortable-handle\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"pull-left\">\n                                <h3 class=\"panel-title\">\n                                    <i class=\"{{panelObj.icons}}\"></i>\n                                    {{panelObj.title}}\n                                </h3>\n                            </div>\n                            <div class=\"pull-right\">\n                                <div class=\"widget-controls\">\n                                    <a href=\"\"\n                                       data-widgster=\"Collapse\"\n                                       title=\"{{ (panelObj.options.collapse.title !== '')? panelObj.options.collapse.title : 'R\u00E9duire le panneau' }}\"\n                                       (click)=\"collapse()\"\n                                       *ngIf=\"panelObj.options.collapse.active\">\n                                        <i class=\"{{ (panelObj.options.collapse.icons !== '')? panelObj.options.collapse.icons : 'fa fa-minus' }}\"></i>\n                                    </a>\n                                    <a href=\"\"\n                                       data-widgster=\"close\"\n                                       title=\"{{ (panelObj.options.close.title !== '')? panelObj.options.close.title : 'Fermer le panneau' }}\"\n                                       (click)=\"close()\"\n                                       *ngIf=\"panelObj.options.close.active\">\n                                        <i class=\"{{ (panelObj.options.close.icons !== '')? panelObj.options.close.icons : 'fa fa-close' }}\"></i>\n                                    </a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </header>\n                <!-- End Header -->\n\n                <!-- Body -->\n                <div class=\"panel-body body collapse\"\n                     aria-expanded=\"true\"\n                     [ngClass]=\"{collapse: collapseClass}\">\n                    <panel-body [panelBodyObj]=\"panelObj\"></panel-body>\n                </div>\n                <!-- End Body -->\n\n\n                <!-- Footer -->\n                <footer class=\"panel-footer footer text-right collapse\"\n                        aria-expanded=\"true\"\n                        [ngClass]=\"{collapse: collapseClass}\"\n                        *ngIf=\"panelObj.footer.list.length\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"pull-left\">\n                            </div>\n                            <div class=\"pull-right\">\n                                <div class=\"footer-item\" *ngFor=\"#item of panelObj.footer.list; #i=index\">\n                                    <a [href]=\"item.link\"\n                                    title=\"{{item.title}}\"\n                                    name=\"{{item.title}}\"\n                                    *ngIf=\"(item.type === 'LINK') && item.link\">\n                                        {{item.title}}\n                                        <i class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></i>\n                                    </a>\n\n                                    <a [href]=\"item.link\"\n                                    class=\"btn btn-sm\"\n                                    title=\"{{item.title}}\"\n                                    name=\"{{item.title}}\"\n                                    *ngIf=\"item.type === 'BUTTON'\">\n                                        {{item.title}}\n                                        <i class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></i>\n                                    </a>\n                                </div>\n\n                            </div>\n                        </div>\n                    </div>\n\n                </footer>\n                <!-- End Footer -->\n            </div>\n            ",
                directives: [panel_body_component_1.PanelBody],
                pipes: [atexo_pipe_9.ToClassPipe],
                encapsulation: core_24.ViewEncapsulation.Emulated
            }), 
            __metadata('design:paramtypes', [(typeof (_a = typeof core_24.ElementRef !== 'undefined' && core_24.ElementRef) === 'function' && _a) || Object])
        ], Panel);
        return Panel;
        var _a;
    }());
    exports.Panel = Panel;
});
define("components/dashboard/dashboard.component", ["require", "exports", 'angular2/core', 'angular2/src/facade/lang', "common/constants/atexo.constant", "common/services/atexo.service", "components/dashboard/providers/panel.provider", "components/dashboard/components/alert/alert.component", "components/dashboard/components/panel/panel.component"], function (require, exports, core_25, lang_9, atexo_constant_5, atexo_service_7, panel_provider_1, alert_component_1, panel_component_1) {
    "use strict";
    var Dashboard = (function () {
        function Dashboard(panelProvider) {
            this.progress = atexo_service_7.Progress.getInstance();
            this.panels = [];
            this.panelsZones = {
                a: new Array(),
                b: new Array(),
                c: new Array(),
                d: new Array(),
                z: new Array()
            };
            this.panelsZonesArray = [];
            this.offset = 0;
            this.limit = 5;
            this.endContent = false;
            this.startsortable = '';
            this.namePage = 'Dashboard';
            this.panelProvider = panelProvider;
        }
        Dashboard.prototype.ngOnInit = function () {
            if (!lang_9.isPresent(this.config)) {
                console.error('ViewError:  Missing identifier "config"');
            }
            else {
                this.initConfig();
                this.panelServiceAll();
            }
            return true;
        };
        Dashboard.prototype.ngAfterViewChecked = function () {
            return true;
        };
        Dashboard.prototype.initConfig = function () {
            atexo_constant_5.AtexoRestConstant.baseUrl = this.config.json.baseUrl;
            atexo_constant_5.AtexoRestConstant.request.panel.all.url = this.config.json.panel;
            atexo_constant_5.AtexoRestConstant.request.alert.all.url = this.config.json.alert;
        };
        Dashboard.prototype.panelServiceAll = function () {
            var _this = this;
            var param = {
                limit: this.limit,
                offset: this.offset
            };
            atexo_service_7.Progress.getInstance().incrementNbrProgress();
            this.panelProvider.all(param).subscribe(function (res) {
                if (res.status === 200) {
                    _this.endContent = false;
                    _this.panelsZonesArray = res.json();
                    atexo_service_7.Progress.getInstance().decrementNbrProgress();
                }
                else {
                    _this.endContent = true;
                }
            });
        };
        __decorate([
            core_25.Input('config'), 
            __metadata('design:type', Object)
        ], Dashboard.prototype, "config", void 0);
        Dashboard = __decorate([
            core_25.Component({
                selector: 'dashboard',
                providers: [panel_provider_1.PanelProvider]
            }),
            core_25.View({
                template: "\n            <div class=\"dashboard parent\">\n                <alert></alert>\n                <div class=\"row\" id=\"sortable\" [ngClass]=\"{'sortable-start': startsortable}\">\n                    <div localtion=\"zone-a\"\n                         class=\"column container\"\n                         [ngClass]=\"zone.zone.custom_class\"\n                         id=\"{{zone.zone.id}}\"\n                         *ngFor=\"#zone of panelsZonesArray; #i=index\">\n                        <!-- Panel -->\n                        <div [panelObj]=\"panelObj\"\n                               class=\"panel-component\"\n                               *ngFor=\"#panelObj of zone.panels; #i=index\"></div>\n                        <!-- End Panel -->\n                    </div>\n                </div>\n            </div>\n            <!--div class=\"modal-backdrop  in\" *ngIf=\"progress.showBackdrop()\"></div-->\n            ",
                directives: [panel_component_1.Panel, alert_component_1.Alert]
            }), 
            __metadata('design:paramtypes', [panel_provider_1.PanelProvider])
        ], Dashboard);
        return Dashboard;
    }());
    exports.Dashboard = Dashboard;
});
define("atexo-component-dashboard", ["require", "exports", "components/dashboard/dashboard.component"], function (require, exports, dashboard_component_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    __export(dashboard_component_1);
});
define("common/components/atexo-charts.component.old", ["require", "exports", 'angular2/core'], function (require, exports, core_26) {
    "use strict";
    var AtexoChartsJs = (function () {
        function AtexoChartsJs(element) {
            this.element = element;
            this._data = [];
            this._labels = [];
            this._options = { responsive: true };
            this._series = [];
            this._colours = [];
            this.initFlag = false;
            this.chartClick = new core_26.EventEmitter();
            this.chartHover = new core_26.EventEmitter();
            this.defaultsColours = [
                {
                    fillColor: 'rgba(253, 216, 53,0.2)',
                    strokeColor: 'rgba(253, 216, 53,1)',
                    pointColor: 'rgba(253, 216, 53,1)',
                    pointStrokeColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(253, 216, 53,0.8)',
                    color: 'rgba(253, 216, 53,1)',
                    highlight: 'rgba(253, 216, 53,0.8)'
                }, {
                    fillColor: 'rgba(236, 64, 122,0.2)',
                    strokeColor: 'rgba(236, 64, 122,1)',
                    pointColor: 'rgba(236, 64, 122,1)',
                    pointStrokeColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(236, 64, 122,0.8)',
                    color: 'rgba(236, 64, 122,1)',
                    highlight: 'rgba(236, 64, 122,0.8)'
                }, {
                    fillColor: 'rgba(205, 220, 57,0.2)',
                    strokeColor: 'rgba(205, 220, 57,1)',
                    pointColor: 'rgba(205, 220, 57,1)',
                    pointStrokeColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(205, 220, 57,0.8)',
                    color: 'rgba(205, 220, 57,1)',
                    highlight: 'rgba(205, 220, 57,0.8)'
                }, {
                    fillColor: 'rgba(41, 182, 246,0.2)',
                    strokeColor: 'rgba(41, 182, 246,1)',
                    pointColor: 'rgba(41, 182, 246,1)',
                    pointStrokeColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(41, 182, 246,0.8)',
                    color: 'rgba(41, 182, 246,1)',
                    highlight: 'rgba(41, 182, 246,0.8)'
                }, {
                    fillColor: 'rgba(142, 68, 173,0.2)',
                    strokeColor: 'rgba(142, 68, 173,1)',
                    pointColor: 'rgba(142, 68, 173,1)',
                    pointStrokeColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(142, 68, 173,0.8)',
                    color: 'rgba(142, 68, 173,1)',
                    highlight: 'rgba(142, 68, 173,0.8)'
                }, {
                    fillColor: 'rgba(255, 193, 7,0.2)',
                    strokeColor: 'rgba(255, 193, 7,1)',
                    pointColor: 'rgba(255, 193, 7,1)',
                    pointStrokeColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(255, 193, 7,0.8)',
                    color: 'rgba(255, 193, 7,1)',
                    highlight: 'rgba(255, 193, 7,0.8)'
                }, {
                    fillColor: 'rgba(13, 71, 161,0.2)',
                    strokeColor: 'rgba(13, 71, 161,1)',
                    pointColor: 'rgba(13, 71, 161,1)',
                    pointStrokeColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(13, 71, 161,0.8)',
                    color: 'rgba(13, 71, 161,1)',
                    highlight: 'rgba(13, 71, 161,0.8)'
                }];
        }
        AtexoChartsJs.prototype.ngOnInit = function () {
            this.canvas = this.element.nativeElement.children[0].children[0];
            this.ctx = this.canvas.getContext('2d');
            this.parent = this.element.nativeElement;
            this.refresh();
            this.initFlag = true;
        };
        AtexoChartsJs.prototype.ngOnDestroy = function () {
            if (this.chart) {
                this.chart.destroy();
                this.chart = null;
            }
            if (this.legendTemplate) {
                this.legendTemplate.destroy();
                this.legendTemplate = null;
            }
        };
        AtexoChartsJs.prototype.ngAfterViewInit = function () {
            return true;
        };
        Object.defineProperty(AtexoChartsJs.prototype, "data", {
            get: function () {
                return this._data;
            },
            set: function (value) {
                this._data = value;
                if (this.initFlag && this._data && this._data.length > 0) {
                    this.refresh();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AtexoChartsJs.prototype, "chartType", {
            get: function () {
                return this._chartType;
            },
            set: function (value) {
                this._chartType = value;
                if (this.initFlag && this._chartType && this._chartType.length > 0) {
                    this.refresh();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AtexoChartsJs.prototype, "colours", {
            get: function () {
                return this._colours;
            },
            set: function (value) {
                this._colours = value;
                if (this.initFlag && this._chartType && this._chartType.length > 0) {
                    this.refresh();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AtexoChartsJs.prototype, "labels", {
            get: function () {
                return this._labels;
            },
            set: function (value) {
                this._labels = value;
                if (this.initFlag && this._chartType && this._chartType.length > 0) {
                    this.refresh();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AtexoChartsJs.prototype, "series", {
            get: function () {
                return this._series;
            },
            set: function (value) {
                this._series = value;
                if (this.initFlag && this._chartType && this._chartType.length > 0) {
                    this.refresh();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AtexoChartsJs.prototype, "options", {
            get: function () {
                return this._options;
            },
            set: function (value) {
                this._options = value;
                if (this.initFlag && this._chartType && this._chartType.length > 0) {
                    this.refresh();
                }
            },
            enumerable: true,
            configurable: true
        });
        AtexoChartsJs.prototype.setLegend = function () {
            var list = this.parent.getElementsByTagName('ul');
            if (list.length) {
                list[0].remove();
                this.parent.insertAdjacentHTML('beforeend', this.chart.generateLegend());
            }
            else {
                this.parent.insertAdjacentHTML('beforeend', this.chart.generateLegend());
            }
        };
        AtexoChartsJs.prototype.getColour = function (colour) {
            return {
                fillColor: this.rgba(colour, 0.2),
                strokeColor: this.rgba(colour, 1),
                pointColor: this.rgba(colour, 1),
                pointStrokeColor: '#fff',
                pointHighlightFill: '#fff',
                pointHighlightStroke: this.rgba(colour, 0.8),
                color: this.rgba(colour, 1),
                highlight: this.rgba(colour, 0.8)
            };
        };
        AtexoChartsJs.prototype.getRandomInt = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        AtexoChartsJs.prototype.rgba = function (colour, alpha) {
            return 'rgba(' + colour.concat(alpha).join(',') + ')';
        };
        AtexoChartsJs.prototype.click = function (evt) {
            var atEvent = this.chart.getPointsAtEvent || this.chart.getBarsAtEvent || this.chart.getSegmentsAtEvent;
            var activePoints = atEvent.call(this.chart, evt);
            if (activePoints.length > 0) {
                var activeLabel = activePoints[0].label;
                this.chartClick.emit({ activePoints: activePoints, activeLabel: activeLabel });
            }
            else {
                console.log('not point');
            }
        };
        AtexoChartsJs.prototype.hover = function (evt) {
            var atEvent = this.chart.getPointsAtEvent || this.chart.getBarsAtEvent || this.chart.getSegmentsAtEvent;
            var activePoints = atEvent.call(this.chart, evt);
            if (activePoints.length > 0) {
                var activeLabel = activePoints[0].label;
                var activePoint = activePoints[0].value;
                this.chartHover.emit({ activePoints: activePoints, activePoint: activePoint, activeLabel: activeLabel });
            }
            else {
                console.log('not point');
            }
        };
        AtexoChartsJs.prototype.getChartBuilder = function (ctx, data, options) {
            return new Chart(ctx)[this.chartType](data, options);
        };
        AtexoChartsJs.prototype.getDataObject = function (label, value) {
            if (this.chartType === 'Line'
                || this.chartType === 'Bar'
                || this.chartType === 'Radar') {
                return {
                    label: label,
                    data: value
                };
            }
            if (this.chartType === 'Pie'
                || this.chartType === 'Doughnut'
                || this.chartType === 'PolarArea') {
                return {
                    label: label,
                    value: value
                };
            }
            return null;
        };
        AtexoChartsJs.prototype.getChartData = function (labels, dataObject) {
            if (this.chartType === 'Line'
                || this.chartType === 'Bar'
                || this.chartType === 'Radar') {
                return {
                    labels: labels,
                    datasets: dataObject
                };
            }
            if (this.chartType === 'Pie'
                || this.chartType === 'Doughnut'
                || this.chartType === 'PolarArea') {
                return dataObject;
            }
        };
        AtexoChartsJs.prototype.getChartLabel = function (series, labels) {
            if (this.chartType === 'Line'
                || this.chartType === 'Bar'
                || this.chartType === 'Radar') {
                return series;
            }
            if (this.chartType === 'Pie'
                || this.chartType === 'Doughnut'
                || this.chartType === 'PolarArea') {
                return labels;
            }
        };
        AtexoChartsJs.prototype.refresh = function () {
            this.ngOnDestroy();
            var dataset = [];
            for (var i = 0; i < this.data.length; i++) {
                var colourDesc = [this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255)];
                var colour = i < this.colours.length ? this.colours[i] : this.defaultsColours[i] || this.getColour(colourDesc);
                var data_1 = Object.assign(colour, this.getDataObject(this.getChartLabel(this.series[i], this.labels[i]), this.data[i]));
                dataset.push(data_1);
            }
            var data = this.getChartData(this.labels, dataset);
            this.chart = this.getChartBuilder(this.ctx, data, this.options);
            if (this.legend) {
                this.setLegend();
            }
        };
        AtexoChartsJs = __decorate([
            core_26.Component({
                selector: 'panel-body-charts-js',
                properties: [
                    'data',
                    'labels',
                    'series',
                    'colours',
                    'chartType',
                    'legend',
                    'options'
                ],
                events: ['chartClick', 'chartHover']
            }),
            core_26.View({
                template: "<div class=\"canvas-wrap atexo-canvas-wrap\">\n                    <canvas\n                    class=\"canvas atexo-canvas-chart\"\n                    height=\"100%\"\n                    (click)=\"click($event)\"\n                    (mousemove)=\"hover($event)\"></canvas>\n                </div>"
            }), 
            __metadata('design:paramtypes', [(typeof (_a = typeof core_26.ElementRef !== 'undefined' && core_26.ElementRef) === 'function' && _a) || Object])
        ], AtexoChartsJs);
        return AtexoChartsJs;
        var _a;
    }());
    exports.AtexoChartsJs = AtexoChartsJs;
});
define("common/config/atexo.config", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.AtexoConfig = {
        application: {
            name: 'Dashboard',
            version: '1.0.0',
            date: '2016.02.01'
        }
    };
});
define("components/about/about", ["require", "exports", 'angular2/core', 'angular2/router'], function (require, exports, core_27, router_1) {
    "use strict";
    var About = (function () {
        function About(params) {
            this.id = params.get('id');
        }
        About = __decorate([
            core_27.Component({
                selector: 'about'
            }),
            core_27.View({
                template: "\n\t\tWelcome to the about page! This is the ID: {{id}}\n\t"
            }), 
            __metadata('design:paramtypes', [(typeof (_a = typeof router_1.RouteParams !== 'undefined' && router_1.RouteParams) === 'function' && _a) || Object])
        ], About);
        return About;
        var _a;
    }());
    exports.About = About;
});
define("components/dashboard/services/panel.service", ["require", "exports", 'angular2/core', 'angular2/http'], function (require, exports, core_28, http_10) {
    "use strict";
    var PanelService = (function () {
        function PanelService(http) {
            this.http = http;
        }
        PanelService = __decorate([
            core_28.Injectable(), 
            __metadata('design:paramtypes', [(typeof (_a = typeof http_10.Http !== 'undefined' && http_10.Http) === 'function' && _a) || Object])
        ], PanelService);
        return PanelService;
        var _a;
    }());
    exports.PanelService = PanelService;
});
//# sourceMappingURL=atexo-component-dashboard.amd.js.map