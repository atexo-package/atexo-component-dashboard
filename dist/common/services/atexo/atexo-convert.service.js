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
        this.arrayObject = [];
        this.arrayProperty = [];
        this.arrayPropertyValue = {};
    }
    Convert.prototype.cvsToJson = function (csv, strDelimiter) {
        var lines = csv.split('\n'), linesLength = (lines[lines.length - 1] === '') ? lines.length - 1 : lines.length;
        if (lang_1.isPresent(strDelimiter)) {
            this.strDelimiter = strDelimiter;
        }
        this.getArrayProperty(lines[0]);
        for (var i = 1; i < linesLength; i++) {
            var obj = {}, currentline = lines[i].split(this.strDelimiter);
            for (var j = 0; j < this.arrayProperty.length; j++) {
                obj[this.arrayProperty[j]] = currentline[j];
                if (lang_1.isBlank(this.arrayPropertyValue[this.arrayProperty[j]])) {
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
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Convert);
    return Convert;
}());
exports.Convert = Convert;
//# sourceMappingURL=atexo-convert.service.js.map