System.register(['angular2/core', '../../../../common/pipe/atexo.pipe', './providers/panel-body-editor.provider', './entitys/note.entity'], function(exports_1, context_1) {
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
    var core_1, atexo_pipe_1, panel_body_editor_provider_1, note_entity_1;
    var PanelBodyEditor;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (atexo_pipe_1_1) {
                atexo_pipe_1 = atexo_pipe_1_1;
            },
            function (panel_body_editor_provider_1_1) {
                panel_body_editor_provider_1 = panel_body_editor_provider_1_1;
            },
            function (note_entity_1_1) {
                note_entity_1 = note_entity_1_1;
            }],
        execute: function() {
            PanelBodyEditor = (function () {
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
                            //this.notes = res.json();
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
                    /*let _timeOut:any, _milliseconds:number = this._milliseconds;
                     clearTimeout(_timeOut);
                     _timeOut = setTimeout(() => {
                     note.editing = false;
                     }, _milliseconds);*/
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
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], PanelBodyEditor.prototype, "panelBodyObj", void 0);
                PanelBodyEditor = __decorate([
                    core_1.Component({
                        selector: 'panel-body-editor',
                        providers: [panel_body_editor_provider_1.PanelBodyEditorProvider]
                    }),
                    core_1.View({
                        template: "\n            <div class=\"panel-body-editor-wrap {{ panelBodyObj.type.category | toClass }}\">\n\n                <ul class=\"list-unstyled notes note-list\">\n                    <li *ngFor=\"#note of notes; #i=index\">\n\n                        <article class=\"note note-item\">\n\n                            <ul class=\"overlay-options options top\">\n\n                                <li *ngIf=\"note.editing\">\n                                    <a href=\"#\"\n                                       title=\"Enregistrer\"\n                                       class=\"btn option option-item\"\n                                       (click)=\"save(note)\">\n                                        <i class=\"fa fa-check\"></i>\n                                    </a>\n                                </li>\n                                <li *ngIf=\"note.editing\">\n                                    <a href=\"#\"\n                                       title=\"Annuler\"\n                                       class=\"btn option option-item\"\n                                       (click)=\"cancel(note)\">\n                                        <i class=\"fa fa-close\"></i>\n                                    </a>\n                                </li>\n\n                                <li *ngIf=\"!note.editing\">\n                                    <a href=\"#\"\n                                       title=\"Modifier\"\n                                       class=\"btn option option-item\"\n                                       (click)=\"edit(note)\">\n                                        <i class=\"fa fa-pencil\"></i>\n                                    </a>\n                                </li>\n                            </ul>\n\n                            <div class=\"editor-view\" *ngIf=\"!note.editing\" (click)=\"ondblclick(note)\">\n                                {{ note.data.content }}\n                            </div>\n\n                            <div class=\"editor-textarea\" *ngIf=\"note.editing\">\n                                <textarea class=\"textarea\"\n                                          [(ngModel)]=\"note.draft\"\n                                          (keyup.escape)=\"cancel(note)\"\n                                          (keyup.enter)=\"save(note)\"></textarea>\n                            </div>\n\n                        </article>\n\n                    </li>\n                </ul>\n\n                <a href=\"\" class=\"atexoui-link center add\" (click)=\"add()\" *ngIf=\"false\">Ajouter une note</a>\n\n            </div>\n            ",
                        pipes: [atexo_pipe_1.ToClassPipe]
                    }), 
                    __metadata('design:paramtypes', [panel_body_editor_provider_1.PanelBodyEditorProvider])
                ], PanelBodyEditor);
                return PanelBodyEditor;
            }());
            exports_1("PanelBodyEditor", PanelBodyEditor);
        }
    }
});

//# sourceMappingURL=panel-body-editor.component.js.map
