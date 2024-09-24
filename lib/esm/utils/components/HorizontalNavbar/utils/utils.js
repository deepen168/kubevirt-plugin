export var trimLastHistoryPath = function (location, paths) {
    var pathName = location === null || location === void 0 ? void 0 : location.pathname;
    var relativeUrl;
    for (var _i = 0, paths_1 = paths; _i < paths_1.length; _i++) {
        var path = paths_1[_i];
        if (pathName.endsWith('/' + path)) {
            if (path !== '') {
                relativeUrl = pathName.slice(0, pathName.length - path.length);
            }
            if (path === '') {
                relativeUrl = pathName;
            }
        }
    }
    if (!relativeUrl)
        relativeUrl = pathName + '/';
    return relativeUrl;
};
//# sourceMappingURL=utils.js.map