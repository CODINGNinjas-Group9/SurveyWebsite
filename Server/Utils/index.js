"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = exports.GetName = void 0;
function GetName(req) {
    if (req.user) {
        let user = req.user;
        return user.displayName.toString();
    }
    return "";
}
exports.GetName = GetName;
function AuthGuard(req, res, next) {
    if (!req.isAuthenticated()) {
        return res.redirect("/login");
    }
    next();
}
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=index.js.map