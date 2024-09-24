var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { useCallback, useMemo } from 'react';
import { t } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import useSingleNodeCluster from '@kubevirt-utils/hooks/useSingleNodeCluster';
import { getInstanceTypePrefix } from '@kubevirt-utils/resources/bootableresources/helpers';
import { getAnnotation } from '@kubevirt-utils/resources/shared';
import { ANNOTATIONS, LABEL_USED_TEMPLATE_NAME, OS_NAME_LABELS, } from '@kubevirt-utils/resources/template';
import { getOperatingSystem, getOperatingSystemName, } from '@kubevirt-utils/resources/vm/utils/operation-system/operationSystem';
import { getVMIIPAddresses } from '@kubevirt-utils/resources/vmi';
import { compareCIDR, isLiveMigratable } from './utils';
import { isErrorPrintableStatus, printableVMStatus } from './virtualMachineStatuses';
var ErrorStatus = { id: 'Error', title: 'Error' };
var statusFilterItems = __spreadArray(__spreadArray([], Object.keys(printableVMStatus).map(function (status) { return ({
    id: status,
    title: status,
}); }), true), [
    ErrorStatus,
], false);
var useStatusFilter = function () { return ({
    filter: function (statuses, obj) {
        var _a, _b, _c;
        var status = (_a = obj === null || obj === void 0 ? void 0 : obj.status) === null || _a === void 0 ? void 0 : _a.printableStatus;
        var isError = statuses.selected.includes(ErrorStatus.id) && isErrorPrintableStatus(status);
        return ((_b = statuses.selected) === null || _b === void 0 ? void 0 : _b.length) === 0 || ((_c = statuses.selected) === null || _c === void 0 ? void 0 : _c.includes(status)) || isError;
    },
    filterGroupName: t('Status'),
    isMatch: function (obj, filterStatus) {
        var _a, _b;
        return (filterStatus === ((_a = obj === null || obj === void 0 ? void 0 : obj.status) === null || _a === void 0 ? void 0 : _a.printableStatus) ||
            (filterStatus === ErrorStatus.id && isErrorPrintableStatus((_b = obj === null || obj === void 0 ? void 0 : obj.status) === null || _b === void 0 ? void 0 : _b.printableStatus)));
    },
    items: statusFilterItems,
    type: 'status',
}); };
var useLiveMigratableFilter = function () {
    var isSingleNodeCluster = useSingleNodeCluster()[0];
    return {
        filter: function (selectedItems, obj) {
            var _a, _b, _c;
            var isMigratable = isLiveMigratable(obj, isSingleNodeCluster);
            return (((_a = selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.selected) === null || _a === void 0 ? void 0 : _a.length) === 0 ||
                (((_b = selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.selected) === null || _b === void 0 ? void 0 : _b.includes('migratable')) && isMigratable) ||
                (((_c = selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.selected) === null || _c === void 0 ? void 0 : _c.includes('notMigratable')) && !isMigratable));
        },
        filterGroupName: t('Live migratable'),
        items: [
            { id: 'migratable', title: t('Migratable') },
            { id: 'notMigratable', title: t('Not migratable') },
        ],
        reducer: function (obj) { return (isLiveMigratable(obj, isSingleNodeCluster) ? 'migratable' : 'notMigratable'); },
        type: 'live-migratable',
    };
};
var useTemplatesFilter = function (vms) {
    var noTemplate = t('None');
    var templates = useMemo(function () {
        var _a;
        return __spreadArray([], new Set((_a = (Array.isArray(vms) ? vms : [])) === null || _a === void 0 ? void 0 : _a.map(function (vm) {
            var _a, _b;
            var templateName = (_b = (_a = vm.metadata) === null || _a === void 0 ? void 0 : _a.labels) === null || _b === void 0 ? void 0 : _b[LABEL_USED_TEMPLATE_NAME];
            return templateName !== null && templateName !== void 0 ? templateName : noTemplate;
        })), true).map(function (template) { return ({ id: template, title: template }); });
    }, [vms, noTemplate]);
    return {
        filter: function (selectedTemplates, obj) {
            var _a, _b, _c, _d, _e;
            var templateName = (_c = (_b = (_a = obj === null || obj === void 0 ? void 0 : obj.metadata) === null || _a === void 0 ? void 0 : _a.labels) === null || _b === void 0 ? void 0 : _b[LABEL_USED_TEMPLATE_NAME]) !== null && _c !== void 0 ? _c : noTemplate;
            return (((_d = selectedTemplates.selected) === null || _d === void 0 ? void 0 : _d.length) === 0 ||
                ((_e = selectedTemplates.selected) === null || _e === void 0 ? void 0 : _e.includes(templateName)));
        },
        filterGroupName: t('Template'),
        items: templates,
        reducer: function (obj) { var _a, _b, _c; return (_c = (_b = (_a = obj === null || obj === void 0 ? void 0 : obj.metadata) === null || _a === void 0 ? void 0 : _a.labels) === null || _b === void 0 ? void 0 : _b[LABEL_USED_TEMPLATE_NAME]) !== null && _c !== void 0 ? _c : noTemplate; },
        type: 'template',
    };
};
var useOSFilter = function () {
    var getOSName = useCallback(function (obj) {
        var _a;
        var osAnnotation = getAnnotation((_a = obj === null || obj === void 0 ? void 0 : obj.spec) === null || _a === void 0 ? void 0 : _a.template, ANNOTATIONS.os);
        var osLabel = getOperatingSystemName(obj) || getOperatingSystem(obj);
        var osName = Object.values(OS_NAME_LABELS).find(function (osKey) {
            var _a, _b;
            return ((_a = osAnnotation === null || osAnnotation === void 0 ? void 0 : osAnnotation.toLowerCase()) === null || _a === void 0 ? void 0 : _a.startsWith(osKey === null || osKey === void 0 ? void 0 : osKey.toLowerCase())) ||
                ((_b = osLabel === null || osLabel === void 0 ? void 0 : osLabel.toLowerCase()) === null || _b === void 0 ? void 0 : _b.startsWith(osKey === null || osKey === void 0 ? void 0 : osKey.toLowerCase()));
        });
        return osName;
    }, []);
    return {
        filter: function (selectedOS, obj) {
            var _a, _b;
            return ((_a = selectedOS.selected) === null || _a === void 0 ? void 0 : _a.length) === 0 || ((_b = selectedOS.selected) === null || _b === void 0 ? void 0 : _b.includes(getOSName(obj)));
        },
        filterGroupName: t('Operating system'),
        items: Object.values(OS_NAME_LABELS).map(function (osName) { return ({
            id: osName,
            title: osName,
        }); }),
        reducer: getOSName,
        type: 'os',
    };
};
var useNodesFilter = function (vmiMapper) {
    var sortedNodeNamesItems = useMemo(function () {
        return Object.values(vmiMapper === null || vmiMapper === void 0 ? void 0 : vmiMapper.nodeNames).sort(function (a, b) {
            var _a;
            return (_a = a === null || a === void 0 ? void 0 : a.id) === null || _a === void 0 ? void 0 : _a.localeCompare(b === null || b === void 0 ? void 0 : b.id, undefined, {
                numeric: true,
                sensitivity: 'base',
            });
        });
    }, [vmiMapper]);
    return {
        filter: function (selectedNodes, obj) {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            var nodeName = (_f = (_e = (_c = (_a = vmiMapper === null || vmiMapper === void 0 ? void 0 : vmiMapper.mapper) === null || _a === void 0 ? void 0 : _a[(_b = obj === null || obj === void 0 ? void 0 : obj.metadata) === null || _b === void 0 ? void 0 : _b.namespace]) === null || _c === void 0 ? void 0 : _c[(_d = obj === null || obj === void 0 ? void 0 : obj.metadata) === null || _d === void 0 ? void 0 : _d.name]) === null || _e === void 0 ? void 0 : _e.status) === null || _f === void 0 ? void 0 : _f.nodeName;
            return ((_g = selectedNodes.selected) === null || _g === void 0 ? void 0 : _g.length) === 0 || ((_h = selectedNodes.selected) === null || _h === void 0 ? void 0 : _h.includes(nodeName));
        },
        filterGroupName: 'Node',
        items: sortedNodeNamesItems,
        reducer: function (obj) { var _a, _b, _c, _d, _e, _f; return (_f = (_e = (_c = (_a = vmiMapper === null || vmiMapper === void 0 ? void 0 : vmiMapper.mapper) === null || _a === void 0 ? void 0 : _a[(_b = obj === null || obj === void 0 ? void 0 : obj.metadata) === null || _b === void 0 ? void 0 : _b.namespace]) === null || _c === void 0 ? void 0 : _c[(_d = obj === null || obj === void 0 ? void 0 : obj.metadata) === null || _d === void 0 ? void 0 : _d.name]) === null || _e === void 0 ? void 0 : _e.status) === null || _f === void 0 ? void 0 : _f.nodeName; },
        type: 'node',
    };
};
var useInstanceTypesFilter = function (vms) {
    var noInstanceType = t('No InstanceType');
    var instanceTypes = useMemo(function () {
        var _a;
        return __spreadArray([], new Set((_a = (Array.isArray(vms) ? vms : [])) === null || _a === void 0 ? void 0 : _a.map(function (vm) {
            var _a, _b;
            var instanceTypeName = getInstanceTypePrefix((_b = (_a = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _a === void 0 ? void 0 : _a.instancetype) === null || _b === void 0 ? void 0 : _b.name);
            return instanceTypeName !== null && instanceTypeName !== void 0 ? instanceTypeName : noInstanceType;
        })), true).map(function (instanceType) { return ({ id: instanceType, title: instanceType }); });
    }, [vms, noInstanceType]);
    return {
        filter: function (selectedInstanceTypes, obj) {
            var _a, _b, _c, _d;
            var instanceTypeName = getInstanceTypePrefix((_b = (_a = obj === null || obj === void 0 ? void 0 : obj.spec) === null || _a === void 0 ? void 0 : _a.instancetype) === null || _b === void 0 ? void 0 : _b.name);
            return (((_c = selectedInstanceTypes.selected) === null || _c === void 0 ? void 0 : _c.length) === 0 ||
                ((_d = selectedInstanceTypes.selected) === null || _d === void 0 ? void 0 : _d.includes(instanceTypeName || noInstanceType)));
        },
        filterGroupName: t('InstanceType'),
        items: instanceTypes,
        reducer: function (obj) {
            var _a, _b;
            var instanceTypeName = getInstanceTypePrefix((_b = (_a = obj === null || obj === void 0 ? void 0 : obj.spec) === null || _a === void 0 ? void 0 : _a.instancetype) === null || _b === void 0 ? void 0 : _b.name);
            return instanceTypeName !== null && instanceTypeName !== void 0 ? instanceTypeName : noInstanceType;
        },
        type: 'instanceType',
    };
};
var useIPSearchFilter = function (vmiMapper) { return ({
    filter: function (input, obj) {
        var _a, _b, _c, _d, _e;
        var search = (_a = input.selected) === null || _a === void 0 ? void 0 : _a[0];
        if (!search)
            return true;
        var vmi = (_d = (_b = vmiMapper.mapper) === null || _b === void 0 ? void 0 : _b[(_c = obj === null || obj === void 0 ? void 0 : obj.metadata) === null || _c === void 0 ? void 0 : _c.namespace]) === null || _d === void 0 ? void 0 : _d[(_e = obj === null || obj === void 0 ? void 0 : obj.metadata) === null || _e === void 0 ? void 0 : _e.name];
        var ipAddresses = getVMIIPAddresses(vmi);
        if (search.includes('/')) {
            return ipAddresses.some(function (ipAddress) { return compareCIDR(search, ipAddress); });
        }
        return ipAddresses.some(function (ipAddress) { return ipAddress === null || ipAddress === void 0 ? void 0 : ipAddress.includes(search); });
    },
    filterGroupName: t('IP Address'),
    isMatch: function () { return true; },
    items: [],
    type: 'ip',
}); };
export var useVMListFilters = function (vmis, vms, vmims) {
    var vmiMapper = useMemo(function () {
        var _a;
        return (_a = (Array.isArray(vmis) ? vmis : [])) === null || _a === void 0 ? void 0 : _a.reduce(function (acc, vmi) {
            var _a, _b, _c, _d;
            var name = (_a = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _a === void 0 ? void 0 : _a.name;
            var namespace = (_b = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _b === void 0 ? void 0 : _b.namespace;
            if (!acc.mapper[namespace]) {
                acc.mapper[namespace] = {};
            }
            acc.mapper[namespace][name] = vmi;
            var nodeName = (_c = vmi === null || vmi === void 0 ? void 0 : vmi.status) === null || _c === void 0 ? void 0 : _c.nodeName;
            if (nodeName && !((_d = acc === null || acc === void 0 ? void 0 : acc.nodeNames) === null || _d === void 0 ? void 0 : _d[nodeName])) {
                acc.nodeNames[nodeName] = {
                    id: nodeName,
                    title: nodeName,
                };
            }
            return acc;
        }, { mapper: {}, nodeNames: {} });
    }, [vmis]);
    var vmimMapper = useMemo(function () {
        var _a;
        return (_a = (Array.isArray(vmims) ? vmims : [])) === null || _a === void 0 ? void 0 : _a.reduce(function (acc, vmim) {
            var _a, _b;
            var name = (_a = vmim === null || vmim === void 0 ? void 0 : vmim.spec) === null || _a === void 0 ? void 0 : _a.vmiName;
            var namespace = (_b = vmim === null || vmim === void 0 ? void 0 : vmim.metadata) === null || _b === void 0 ? void 0 : _b.namespace;
            if (!acc[namespace]) {
                acc[namespace] = {};
            }
            acc[namespace][name] = vmim;
            return acc;
        }, {});
    }, [vmims]);
    var statusFilter = useStatusFilter();
    var templatesFilter = useTemplatesFilter(vms);
    var osFilters = useOSFilter();
    var nodesFilter = useNodesFilter(vmiMapper);
    var liveMigratableFilter = useLiveMigratableFilter();
    var instanceTypesFilter = useInstanceTypesFilter(vms);
    var searchByIP = useIPSearchFilter(vmiMapper);
    return {
        filters: [
            statusFilter,
            templatesFilter,
            osFilters,
            liveMigratableFilter,
            nodesFilter,
            instanceTypesFilter,
        ],
        searchFilters: [searchByIP],
        vmiMapper: vmiMapper,
        vmimMapper: vmimMapper,
    };
};
//# sourceMappingURL=virtualMachineRowFilter.js.map