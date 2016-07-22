// app/common/services/atexo.pipe.ts
/**
 *
 * @name atexo.pipe.ts
 *
 */
System.register(['./atexo/atexo-class.pipe', './atexo/atexo-timestamp-to-date.pipe', './atexo/atexo-trancate.pipe'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (atexo_class_pipe_1_1) {
                exportStar_1(atexo_class_pipe_1_1);
            },
            function (atexo_timestamp_to_date_pipe_1_1) {
                exportStar_1(atexo_timestamp_to_date_pipe_1_1);
            },
            function (atexo_trancate_pipe_1_1) {
                exportStar_1(atexo_trancate_pipe_1_1);
            }],
        execute: function() {
        }
    }
});

//# sourceMappingURL=atexo.pipe.js.map
