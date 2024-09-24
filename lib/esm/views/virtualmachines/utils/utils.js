import { printableVMStatus } from './virtualMachineStatuses';
export var isLiveMigratable = function (vm, isSingleNodeCluster) {
    var _a, _b, _c;
    return !isSingleNodeCluster &&
        ((_a = vm === null || vm === void 0 ? void 0 : vm.status) === null || _a === void 0 ? void 0 : _a.printableStatus) === printableVMStatus.Running &&
        !!((_c = (_b = vm === null || vm === void 0 ? void 0 : vm.status) === null || _b === void 0 ? void 0 : _b.conditions) === null || _c === void 0 ? void 0 : _c.find(function (_a) {
            var status = _a.status, type = _a.type;
            return type === 'LiveMigratable' && status === 'True';
        }));
};
export var isRunning = function (vm) { var _a; return ((_a = vm === null || vm === void 0 ? void 0 : vm.status) === null || _a === void 0 ? void 0 : _a.printableStatus) === printableVMStatus.Running; };
var decimalToBinary = function (decimalNumber) { return (decimalNumber >>> 0).toString(2); };
var ipStringToBinary = function (ip) {
    return ip
        .split('.')
        .map(function (classes) { return decimalToBinary(parseInt(classes)).padStart(8, '0'); })
        .join('');
};
export var compareCIDR = function (ipSearch, ip) {
    var _a = ipSearch.split('/'), baseIp = _a[0], range = _a[1];
    var baseIpBinary = ipStringToBinary(baseIp);
    var ipBinary = ipStringToBinary(ip);
    var rangeNumber = parseInt(range);
    var baseIpBinarySlice = baseIpBinary.slice(0, rangeNumber);
    var ipBinarySlice = ipBinary.slice(0, rangeNumber);
    return baseIpBinarySlice === ipBinarySlice;
};
//# sourceMappingURL=utils.js.map