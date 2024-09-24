import { t } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { vmimStatuses } from '@kubevirt-utils/resources/vmim/statuses';
export var getStatusFilter = function () { return [
    {
        filter: function (statuses, obj) {
            var _a, _b, _c, _d;
            var status = (_b = (_a = obj === null || obj === void 0 ? void 0 : obj.vmim) === null || _a === void 0 ? void 0 : _a.status) === null || _b === void 0 ? void 0 : _b.phase;
            return ((_c = statuses === null || statuses === void 0 ? void 0 : statuses.selected) === null || _c === void 0 ? void 0 : _c.length) === 0 || ((_d = statuses === null || statuses === void 0 ? void 0 : statuses.selected) === null || _d === void 0 ? void 0 : _d.includes(status));
        },
        filterGroupName: t('Status'),
        items: Object.keys(vmimStatuses).map(function (status) { return ({
            id: status,
            title: status,
        }); }),
        reducer: function (obj) { var _a, _b; return (_b = (_a = obj === null || obj === void 0 ? void 0 : obj.vmim) === null || _a === void 0 ? void 0 : _a.status) === null || _b === void 0 ? void 0 : _b.phase; },
        type: 'status',
    },
]; };
export var getSourceNodeFilter = function (vmis) {
    var _a;
    if ((vmis === null || vmis === void 0 ? void 0 : vmis.length) === 0 || (vmis === null || vmis === void 0 ? void 0 : vmis.every(function (vmi) { var _a, _b; return !((_b = (_a = vmi === null || vmi === void 0 ? void 0 : vmi.status) === null || _a === void 0 ? void 0 : _a.migrationState) === null || _b === void 0 ? void 0 : _b.sourceNode); }))) {
        return [];
    }
    var nodes = new Set((_a = (vmis || []).map(function (vmi) { var _a, _b; return (_b = (_a = vmi === null || vmi === void 0 ? void 0 : vmi.status) === null || _a === void 0 ? void 0 : _a.migrationState) === null || _b === void 0 ? void 0 : _b.sourceNode; })) === null || _a === void 0 ? void 0 : _a.filter(Boolean));
    return [
        {
            filter: function (selectedNodes, obj) {
                var _a, _b, _c, _d, _e;
                var nodeName = (_c = (_b = (_a = obj === null || obj === void 0 ? void 0 : obj.vmiObj) === null || _a === void 0 ? void 0 : _a.status) === null || _b === void 0 ? void 0 : _b.migrationState) === null || _c === void 0 ? void 0 : _c.sourceNode;
                return (((_d = selectedNodes === null || selectedNodes === void 0 ? void 0 : selectedNodes.selected) === null || _d === void 0 ? void 0 : _d.length) === 0 ||
                    ((_e = selectedNodes === null || selectedNodes === void 0 ? void 0 : selectedNodes.selected) === null || _e === void 0 ? void 0 : _e.includes("source-".concat(nodeName))));
            },
            filterGroupName: t('Source Node'),
            items: Array.from(nodes).map(function (nodeName) { return ({
                id: "source-".concat(nodeName),
                title: nodeName,
            }); }),
            reducer: function (obj) { var _a, _b, _c; return "source-".concat((_c = (_b = (_a = obj === null || obj === void 0 ? void 0 : obj.vmiObj) === null || _a === void 0 ? void 0 : _a.status) === null || _b === void 0 ? void 0 : _b.migrationState) === null || _c === void 0 ? void 0 : _c.sourceNode); },
            type: 'source',
        },
    ];
};
export var getTargetNodeFilter = function (vmis) {
    var _a;
    if ((vmis === null || vmis === void 0 ? void 0 : vmis.length) === 0 || (vmis === null || vmis === void 0 ? void 0 : vmis.every(function (vm) { var _a, _b; return !((_b = (_a = vm === null || vm === void 0 ? void 0 : vm.status) === null || _a === void 0 ? void 0 : _a.migrationState) === null || _b === void 0 ? void 0 : _b.targetNode); }))) {
        return [];
    }
    var nodes = new Set((_a = (vmis || []).map(function (vmi) { var _a, _b; return (_b = (_a = vmi === null || vmi === void 0 ? void 0 : vmi.status) === null || _a === void 0 ? void 0 : _a.migrationState) === null || _b === void 0 ? void 0 : _b.targetNode; })) === null || _a === void 0 ? void 0 : _a.filter(Boolean));
    return [
        {
            filter: function (selectedNodes, obj) {
                var _a, _b, _c, _d, _e;
                var nodeName = (_c = (_b = (_a = obj === null || obj === void 0 ? void 0 : obj.vmiObj) === null || _a === void 0 ? void 0 : _a.status) === null || _b === void 0 ? void 0 : _b.migrationState) === null || _c === void 0 ? void 0 : _c.targetNode;
                return (((_d = selectedNodes === null || selectedNodes === void 0 ? void 0 : selectedNodes.selected) === null || _d === void 0 ? void 0 : _d.length) === 0 ||
                    ((_e = selectedNodes === null || selectedNodes === void 0 ? void 0 : selectedNodes.selected) === null || _e === void 0 ? void 0 : _e.includes("target-".concat(nodeName))));
            },
            filterGroupName: t('Target Node'),
            items: Array.from(nodes).map(function (nodeName) { return ({
                id: "target-".concat(nodeName),
                title: nodeName,
            }); }),
            reducer: function (obj) {
                var _a, _b, _c;
                return "target-".concat((_c = (_b = (_a = obj === null || obj === void 0 ? void 0 : obj.vmiObj) === null || _a === void 0 ? void 0 : _a.status) === null || _b === void 0 ? void 0 : _b.migrationState) === null || _c === void 0 ? void 0 : _c.targetNode);
            },
            type: 'target',
        },
    ];
};
//# sourceMappingURL=filters.js.map