System.register(['angular2/core', '../panel-body/panel-body.component', '../../../../common/pipe/atexo.pipe'], function(exports_1, context_1) {
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
    var core_1, panel_body_component_1, atexo_pipe_1;
    var Panel;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (panel_body_component_1_1) {
                panel_body_component_1 = panel_body_component_1_1;
            },
            function (atexo_pipe_1_1) {
                atexo_pipe_1 = atexo_pipe_1_1;
            }],
        execute: function() {
            Panel = (function () {
                function Panel(el) {
                    this.el = el;
                    //panelObj:Object;
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
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Panel.prototype, "panelObj", void 0);
                Panel = __decorate([
                    core_1.Component({
                        selector: 'div.panel-component'
                    }),
                    core_1.View({
                        template: "\n            <div class=\"panel panel-default bloc-toggle\"\n                 [ngClass]=\"{close: closeClass}\"\n                 *ngIf=\"panelObj.active\">\n                <!-- Header -->\n                <header class=\"header panel-heading ui-sortable-handle\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"pull-left\">\n                                <h3 class=\"panel-title\">\n                                    <i class=\"{{panelObj.icons}}\"></i>\n                                    {{panelObj.title}}\n                                </h3>\n                            </div>\n                            <div class=\"pull-right\">\n                                <div class=\"widget-controls\">\n                                    <a href=\"\"\n                                       data-widgster=\"Collapse\"\n                                       title=\"{{ (panelObj.options.collapse.title !== '')? panelObj.options.collapse.title : 'R\u00E9duire le panneau' }}\"\n                                       (click)=\"collapse()\"\n                                       *ngIf=\"panelObj.options.collapse.active\">\n                                        <i class=\"{{ (panelObj.options.collapse.icons !== '')? panelObj.options.collapse.icons : 'fa fa-minus' }}\"></i>\n                                    </a>\n                                    <a href=\"\"\n                                       data-widgster=\"close\"\n                                       title=\"{{ (panelObj.options.close.title !== '')? panelObj.options.close.title : 'Fermer le panneau' }}\"\n                                       (click)=\"close()\"\n                                       *ngIf=\"panelObj.options.close.active\">\n                                        <i class=\"{{ (panelObj.options.close.icons !== '')? panelObj.options.close.icons : 'fa fa-close' }}\"></i>\n                                    </a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </header>\n                <!-- End Header -->\n\n                <!-- Body -->\n                <div class=\"panel-body body collapse\"\n                     aria-expanded=\"true\"\n                     [ngClass]=\"{collapse: collapseClass}\">\n                    <panel-body [panelBodyObj]=\"panelObj\"></panel-body>\n                </div>\n                <!-- End Body -->\n\n\n                <!-- Footer -->\n                <footer class=\"panel-footer footer text-right collapse\"\n                        aria-expanded=\"true\"\n                        [ngClass]=\"{collapse: collapseClass}\"\n                        *ngIf=\"panelObj.footer.list.length\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"pull-left\">\n                            </div>\n                            <div class=\"pull-right\">\n                                <div class=\"footer-item\" *ngFor=\"#item of panelObj.footer.list; #i=index\">\n                                    <a [href]=\"item.link\"\n                                    title=\"{{item.title}}\"\n                                    name=\"{{item.title}}\"\n                                    *ngIf=\"(item.type === 'LINK') && item.link\">\n                                        {{item.title}}\n                                        <i class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></i>\n                                    </a>\n\n                                    <a [href]=\"item.link\"\n                                    class=\"btn btn-sm\"\n                                    title=\"{{item.title}}\"\n                                    name=\"{{item.title}}\"\n                                    *ngIf=\"item.type === 'BUTTON'\">\n                                        {{item.title}}\n                                        <i class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></i>\n                                    </a>\n                                </div>\n\n                            </div>\n                        </div>\n                    </div>\n\n                </footer>\n                <!-- End Footer -->\n            </div>\n            ",
                        directives: [panel_body_component_1.PanelBody],
                        pipes: [atexo_pipe_1.ToClassPipe],
                        encapsulation: core_1.ViewEncapsulation.Emulated
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], Panel);
                return Panel;
            }());
            exports_1("Panel", Panel);
        }
    }
});

//# sourceMappingURL=panel.component.js.map
