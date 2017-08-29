"use strict";
var User = (function () {
    function User() {
        this.role = 'user';
        this.setUserRole();
    }
    User.prototype.setUserRole = function () {
        //todo check user role and set property
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map