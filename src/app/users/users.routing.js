"use strict";
var router_1 = require("@angular/router");
var user_form_component_1 = require("./user-form.component");
var dirty_tracking_service_1 = require("../dirty-tracking.service");
exports.usersRouting = router_1.RouterModule.forChild([
    { path: 'users/new', component: user_form_component_1.UserFormComponent,
        canDeactivate: [dirty_tracking_service_1.DirtyTracking] },
    { path: 'users/edit/:id', component: user_form_component_1.UserFormComponent,
        canDeactivate: [dirty_tracking_service_1.DirtyTracking] }
]);
//# sourceMappingURL=users.routing.js.map