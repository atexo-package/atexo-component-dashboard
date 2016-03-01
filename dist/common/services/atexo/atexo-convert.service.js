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
var Convert = (function () {
    function Convert() {
        this.strDelimiter = ';';
        this.arrProperty = [];
        if (!Convert.isCreating) {
            throw new Error('[Convert] You can\'t call new in Singleton instances!');
        }
    }
    Convert.getInstance = function () {
        if (Convert.instance == null) {
            Convert.isCreating = true;
            Convert.instance = new Convert();
            Convert.isCreating = false;
        }
        return Convert.instance;
    };
    Convert.prototype.cvsToJson = function (csv, strDelimiter) {
        var lines = csv.split('\n'), linesLength = (lines[lines.length - 1] === '') ? lines.length - 1 : lines.length;
        if (lang_1.isPresent(strDelimiter)) {
            this.strDelimiter = strDelimiter;
        }
        this.arrData = [];
        this.arrProperty = this.getArrProperty(lines[0]);
        for (var i = 1; i < linesLength; i++) {
            var obj = {}, currentline = lines[i].split(this.strDelimiter);
            for (var j = 0; j < this.arrProperty.length; j++) {
                obj[this.arrProperty[j]] = currentline[j];
            }
            this.arrData.push(obj);
        }
        this.jsonData = JSON.stringify(this.arrData);
        return this.jsonData;
    };
    Convert.prototype.getArrayData = function () {
        return this.arrData;
    };
    Convert.prototype.getArrProperty = function (lineProperty) {
        var arrProperty = [];
        arrProperty = lineProperty.split(this.strDelimiter);
        if (arrProperty[arrProperty.length - 1] === '') {
            arrProperty.pop();
        }
        return this.arrProperty = arrProperty;
    };
    Convert.isCreating = false;
    Convert = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Convert);
    return Convert;
}());
exports.Convert = Convert;
//# sourceMappingURL=atexo-convert.service.js.map