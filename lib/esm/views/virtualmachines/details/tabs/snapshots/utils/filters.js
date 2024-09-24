import { snapshotStatuses } from './consts';
export var filters = [
    {
        filter: function (statuses, obj) {
            var _a, _b, _c, _d;
            var status = (_a = obj === null || obj === void 0 ? void 0 : obj.status) === null || _a === void 0 ? void 0 : _a.phase;
            return (((_b = statuses.selected) === null || _b === void 0 ? void 0 : _b.length) === 0 ||
                ((_c = statuses.selected) === null || _c === void 0 ? void 0 : _c.includes(status)) ||
                !((_d = statuses === null || statuses === void 0 ? void 0 : statuses.all) === null || _d === void 0 ? void 0 : _d.find(function (item) { return item === status; })));
        },
        filterGroupName: 'Status',
        items: Object.keys(snapshotStatuses).map(function (status) { return ({
            id: snapshotStatuses[status],
            title: snapshotStatuses[status],
        }); }),
        reducer: function (obj) { var _a; return (_a = obj === null || obj === void 0 ? void 0 : obj.status) === null || _a === void 0 ? void 0 : _a.phase; },
        type: 'status-phase',
    },
];
//# sourceMappingURL=filters.js.map