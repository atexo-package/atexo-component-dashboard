System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Note;
    return {
        setters:[],
        execute: function() {
            Note = (function () {
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
            exports_1("Note", Note);
        }
    }
});

//# sourceMappingURL=note.entity.js.map
