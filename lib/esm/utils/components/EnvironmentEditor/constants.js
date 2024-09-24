var _a;
export var EnvironmentKind;
(function (EnvironmentKind) {
    EnvironmentKind["configMap"] = "configMap";
    EnvironmentKind["secret"] = "secret";
    EnvironmentKind["serviceAccount"] = "serviceAccount";
})(EnvironmentKind || (EnvironmentKind = {}));
export var MapKindToAbbr = (_a = {},
    _a[EnvironmentKind.configMap] = 'CM',
    _a[EnvironmentKind.secret] = 'S',
    _a[EnvironmentKind.serviceAccount] = 'SA',
    _a);
//# sourceMappingURL=constants.js.map