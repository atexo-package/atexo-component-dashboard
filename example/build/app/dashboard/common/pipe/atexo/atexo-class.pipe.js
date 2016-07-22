// app/common/pipe/atexo/atexo-class.pipe.ts
/**
 *
 * @name atexo-class.pipe.ts
 *
 */
System.register(['angular2/core', 'angular2/src/facade/lang'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, lang_1;
    var ToClassPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            }],
        execute: function() {
            /*
             * Build custom class type category
             * Takes an exponent argument that defaults to 'type-'.
             * Usage:
             *   value | toClass:exponent
             * Example:
             *   {{ 'list' |  toClass:'type-'}}
             *   formats to: 'type-list'
             */
            ToClassPipe = (function () {
                function ToClassPipe() {
                }
                ToClassPipe.prototype.transform = function (value, args) {
                    this.postClass = lang_1.isPresent(args[0]) ? args[0] : 'panel-body-type-';
                    return this.postClass.concat(value.toLowerCase());
                };
                ToClassPipe = __decorate([
                    core_1.Pipe({ name: 'toClass' }), 
                    __metadata('design:paramtypes', [])
                ], ToClassPipe);
                return ToClassPipe;
            }());
            exports_1("ToClassPipe", ToClassPipe);
        }
    }
});

//# sourceMappingURL=atexo-class.pipe.js.map
