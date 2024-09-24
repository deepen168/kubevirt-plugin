export var getServicesForVmi = function (services, vmiLabels) {
    if (!vmiLabels)
        return [];
    return (services || []).filter(function (service) {
        var _a;
        var selectors = ((_a = service === null || service === void 0 ? void 0 : service.spec) === null || _a === void 0 ? void 0 : _a.selector) || {};
        return (Object.keys(selectors).length > 0 &&
            Object.keys(selectors).every(function (key) { return (vmiLabels === null || vmiLabels === void 0 ? void 0 : vmiLabels[key]) === (selectors === null || selectors === void 0 ? void 0 : selectors[key]); }));
    });
};
//# sourceMappingURL=services.js.map