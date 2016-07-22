// app/common/pipe/atexo/atexo-trancate.pipe.ts
/**
 *
 * @name atexo-trancate.pipe.ts
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
    var TrancatePipe;
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
             * Truncates multi-line text (no HTML)
             * Takes an exponent argument that defaults to 100.
             * Usage:
             *   value | trancate:exponent
             * Example:
             *   {{ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' |  trancate:10}}
             *   formats to: 'Lorem ipsu...'
             */
            TrancatePipe = (function () {
                function TrancatePipe() {
                }
                TrancatePipe.prototype.transform = function (value, args) {
                    this.length = lang_1.isPresent(args[0]) ? args[0] : 100;
                    this.placeholderEnd = (value.length < this.length) ? '' : lang_1.isPresent(args[1]) ? args[1] : ' ...';
                    return value.substring(0, this.length).concat(this.placeholderEnd);
                };
                TrancatePipe = __decorate([
                    core_1.Pipe({ name: 'trancate' }), 
                    __metadata('design:paramtypes', [])
                ], TrancatePipe);
                return TrancatePipe;
            }());
            exports_1("TrancatePipe", TrancatePipe);
        }
    }
});

//# sourceMappingURL=atexo-trancate.pipe.js.map
