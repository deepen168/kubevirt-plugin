var typeHandler = {
    get: function (target, prop) {
        var _a;
        return (_a = target[prop]) !== null && _a !== void 0 ? _a : target.bridge;
    },
};
var types = {
    bridge: 'Bridge',
    masquerade: 'Masquerade',
    sriov: 'SR-IOV',
};
export var interfacesTypes = new Proxy(types, typeHandler);
//# sourceMappingURL=constants.js.map