import { osNames, vmiStatuses } from '@kubevirt-utils/resources/vmi';
import { VM_KUBEVIRT_OS_ANNOTATION } from './virtualMachinesInstancesConstants';
var osTitles = {
    centos: 'CentOS',
    fedora: 'Fedora',
    other: 'Other',
    rhel: 'RHEL',
    windows: 'Windows',
};
var getOSName = function (obj) {
    var _a, _b;
    var osAnnotation = (_b = (_a = obj === null || obj === void 0 ? void 0 : obj.metadata) === null || _a === void 0 ? void 0 : _a.annotations) === null || _b === void 0 ? void 0 : _b[VM_KUBEVIRT_OS_ANNOTATION];
    var osName = ((osAnnotation === null || osAnnotation === void 0 ? void 0 : osAnnotation.split(/(\d.*)/)) || [])[0];
    return osTitles[osName] ? osName : 'other';
};
var includeFilter = function (compareData, compareString) {
    var _a, _b, _c;
    return (((_a = compareData.selected) === null || _a === void 0 ? void 0 : _a.length) === 0 ||
        ((_b = compareData.selected) === null || _b === void 0 ? void 0 : _b.includes(compareString)) ||
        !((_c = compareData === null || compareData === void 0 ? void 0 : compareData.all) === null || _c === void 0 ? void 0 : _c.find(function (s) { return s === compareString; })));
};
export var filters = [
    {
        filter: function (statuses, obj) { var _a; return includeFilter(statuses, (_a = obj === null || obj === void 0 ? void 0 : obj.status) === null || _a === void 0 ? void 0 : _a.phase); },
        filterGroupName: 'Status',
        items: Object.keys(vmiStatuses).map(function (status) { return ({
            id: status,
            title: status,
        }); }),
        reducer: function (obj) { var _a; return (_a = obj === null || obj === void 0 ? void 0 : obj.status) === null || _a === void 0 ? void 0 : _a.phase; },
        type: 'vmi-status',
    },
    {
        filter: function (availableOSNames, obj) { return includeFilter(availableOSNames, getOSName(obj)); },
        filterGroupName: 'OS',
        items: osNames.map(function (os) { return ({
            id: os,
            title: osTitles[os] || osTitles.other,
        }); }),
        reducer: function (obj) { return getOSName(obj); },
        type: 'vmi-os',
    },
];
//# sourceMappingURL=virtualMachinesInstancesRowFilter.js.map