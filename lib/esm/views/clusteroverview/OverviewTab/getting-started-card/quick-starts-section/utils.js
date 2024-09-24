import { getQuickStartStatus, QuickStartStatus, } from '@patternfly/quickstarts';
export var orderQuickStarts = function (allQuickStarts, allQuickStartStates, featured, filter) {
    var orderedQuickStarts = [];
    var filteredQuickStarts = filter ? allQuickStarts.filter(filter) : allQuickStarts;
    var isFeatured = function (quickStart) { var _a; return featured === null || featured === void 0 ? void 0 : featured.includes((_a = quickStart === null || quickStart === void 0 ? void 0 : quickStart.metadata) === null || _a === void 0 ? void 0 : _a.name); };
    var getStatus = function (quickStart) { var _a; return getQuickStartStatus(allQuickStartStates, (_a = quickStart === null || quickStart === void 0 ? void 0 : quickStart.metadata) === null || _a === void 0 ? void 0 : _a.name); };
    // Prioritize featured quick starts and keep specified order
    if (featured) {
        var featuredQuickStartsByName_1 = filteredQuickStarts.reduce(function (acc, q) {
            var _a;
            acc[(_a = q === null || q === void 0 ? void 0 : q.metadata) === null || _a === void 0 ? void 0 : _a.name] = q;
            return acc;
        }, {});
        featured.forEach(function (quickStartName) {
            if (featuredQuickStartsByName_1[quickStartName] &&
                getStatus(featuredQuickStartsByName_1[quickStartName]) !== QuickStartStatus.COMPLETE) {
                orderedQuickStarts.push(featuredQuickStartsByName_1[quickStartName]);
            }
        });
    }
    // Show other in progress quick starts (which are not featured)
    orderedQuickStarts.push.apply(orderedQuickStarts, filteredQuickStarts.filter(function (q) { return !isFeatured(q) && getStatus(q) === QuickStartStatus.IN_PROGRESS; }));
    // Show other not started quick starts (which are not featured)
    orderedQuickStarts.push.apply(orderedQuickStarts, filteredQuickStarts.filter(function (q) { return !isFeatured(q) && getStatus(q) === QuickStartStatus.NOT_STARTED; }));
    return orderedQuickStarts;
};
//# sourceMappingURL=utils.js.map