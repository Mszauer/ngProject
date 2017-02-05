"use strict";
var DirtyTracking = (function () {
    function DirtyTracking() {
    }
    DirtyTracking.prototype.canDeactivate = function (component) {
        if (component.form.dirty) {
            return confirm("You have unsaved changes. \n Are you sure you want to leave?");
        }
        return true;
    };
    return DirtyTracking;
}());
exports.DirtyTracking = DirtyTracking;
//# sourceMappingURL=dirty-tracking.service.js.map