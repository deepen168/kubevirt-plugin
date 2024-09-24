export var projectSelectorToIDLabels = function (projectSelector) {
    return Object.entries(projectSelector || {}).map(function (_a, id) {
        var key = _a[0], value = _a[1];
        return ({ id: id, key: key, value: value });
    });
};
//# sourceMappingURL=utils.js.map