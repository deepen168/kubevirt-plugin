export var assertFulfilled = function (item) {
    return item.status === 'fulfilled';
};
export var getSourcePromises = function (callback, uniqueSource) {
    return Promise.allSettled(Object.entries(uniqueSource).flatMap(function (_a) {
        var sourceNamespace = _a[0], sourceNames = _a[1];
        return Array.from(sourceNames).map(function (name) { return callback(name, sourceNamespace); });
    }));
};
//# sourceMappingURL=utils.js.map