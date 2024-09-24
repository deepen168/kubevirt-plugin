export var getGroupedOptions = function (filterOptions, options) {
    if (options.some(function (option) { return option.group; })) {
        return filterOptions.reduce(function (groups, option) {
            var group = option.group || 'Ungrouped';
            if (!groups[group]) {
                groups[group] = [];
            }
            groups[group].push(option);
            return groups;
        }, {});
    }
    return null;
};
//# sourceMappingURL=utils.js.map